// Commander
const Discord = require("@discordjs/collection");

const fs = require('fs');

module.exports = bot => {
  // Cache dbs
  bot.tempDb = new Discord.Collection();
  // Message commands
  bot.commands = new Discord.Collection();
  bot.aliases = new Discord.Collection();
  fs.readdir(__dirname+"/text/", (err, files) => {
    if (err) console.log(err);
    let folders = files.filter(f => f.split(".").pop() == f);
    if (!folders.length) { return console.log("[LOGS][Bot] Couldn't find any command folders!") };
    var foldersNames = [];
    folders.forEach(folder => {
      foldersNames.push(`${folder}`);
      bot.commands.set('bot.folders', foldersNames);
      bot[`${folder}Cmds`] = new Discord.Collection();
      fs.readdir(__dirname+"/text/"+folder, (err, files) => {
        if (err) console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if (jsfile.length <= 0) { return console.log(`[LOGS][Bot] Couldn't find text.${folder} commands!`) }
        jsfile.forEach((f, i) => {
          let pull = require(__dirname+`/text/${folder}/${f}`);
          bot.commands.set(pull.config.name, pull);
          bot[`${folder}Cmds`].set(pull.config.name, pull);
          pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
          });
        })
      })
    })
  });
}
