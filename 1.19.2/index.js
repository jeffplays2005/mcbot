const controller = new AbortController();
require("dotenv").config();

var mc = require('minecraft-protocol');
var client = mc.createClient({
  host: process.env.host,
  port: process.env.port,
  username: "testbot",
  keepAlive: true,
  version: "1.19.2",
  auth: 'default' // optional; by default uses offline mode, if using a microsoft account, set to 'microsoft'
});

client.on('chat', function(packet) {
  // Listen for chat messages and echo them back.
  var jsonMsg = JSON.parse(packet.message);
  if(jsonMsg.translate == 'chat.type.announcement' || jsonMsg.translate == 'chat.type.text') {
    var username = jsonMsg.with[0].text;
    var msg = jsonMsg.with[1];
    if(username === client.username) return;
    client.write('chat', {message: msg.text});
  }
});
client.on('error', async error => {
  console.log(error)
})
client.login()
