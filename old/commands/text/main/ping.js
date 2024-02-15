module.exports.run = async (bot, username, unique, message, args, db, prefix) => {
  bot.chat(`/msg ${username} pong! [${unique}]`)
}
module.exports.config = {
    // General
    name: "ping",
    description: "Replies with ping",
    usage: "ping",
    aliases: [],
    disabled: false, // true/false
    hide: false,
}
