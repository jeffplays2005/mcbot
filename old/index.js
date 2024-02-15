// requirements and imports
const mineflayer = require('mineflayer');
const config = require("./config.js");
require('dotenv').config();

const { pathfinder, Movements } = require('mineflayer-pathfinder');
const { GoalBlock } = require('mineflayer-pathfinder').goals;

const mineflayerViewer = require('prismarine-viewer').mineflayer;
// create an instance with credentials
const bot = mineflayer.createBot({
  host: process.env.host,         // minecraft server ip
  username: process.env.username, // minecraft username
  password: process.env.pw,       // minecraft password, comment out if you want to log into online-mode=false servers
  version: "1.8.9",               // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  auth: process.env.auth          // only set if you need microsoft auth, then set this to 'microsoft'
});
// load plugins
bot.loadPlugin(pathfinder);
// load commands and functions
require("./commands/manager.js")(bot)
require("./functionLoader.js")
// create an event listener
bot.on('chat', (username, message) => {
  if(username == bot.username) return; // ignore messages by itself
  if(!config.whitelist.includes(username.toLowerCase())) return;
  console.log(`[${username}]: ${message}`); // logging
  // command parsing
  var prefix = config.prefix;
  if(!message.toLowerCase().startsWith(prefix)) return;
  let args = message.slice(prefix.length).split(/ +/g);
  let cmd = args.shift().toLowerCase();
  unique = bot.uniqueSequence(5); // used to allow for repeated messages
  let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
  if(commandfile && commandfile.config.disabled === false){ // run command
    commandfile.run(bot, username, unique, message, args, bot.tempDb, prefix);
  }
});
// Log errors and kick reasons:
bot.on('kicked', console.log);
bot.on('error', console.log);
// spawn event listener
bot.once('spawn', () => {
  console.log(`logged in as ${bot.username}`);
  if(config.viewer){ // if the browser viewer is enabled
    mineflayerViewer(bot, { port: 3000 }) // Start the viewing server on port 3000
    console.log(`mineflayer viewer: http://localhost:3000`) // log address

    bot.on('path_update', (r) => {
      const nodesPerTick = (r.visitedNodes * 50 / r.time).toFixed(2)
      console.log(`I can get there in ${r.path.length} moves. Computation took ${r.time.toFixed(2)} ms (${nodesPerTick} nodes/tick). ${r.status}`)
      const path = [bot.entity.position.offset(0, 0.5, 0)]
      for (const node of r.path) {
        path.push({ x: node.x, y: node.y + 0.5, z: node.z })
      }
        bot.viewer.drawLine('path', path, 0xff00ff)
    })
    const mcData = require('minecraft-data')(bot.version)
    const defaultMove = new Movements(bot, mcData)

    bot.viewer.on('blockClicked', (block, face, button) => { // handle movement
      if (button !== 2) return // only right click

      const p = block.position.offset(0, 1, 0)

      bot.pathfinder.setMovements(defaultMove)
      bot.pathfinder.setGoal(new GoalBlock(p.x, p.y, p.z))
    })
  }
});
