module.exports.run = async (bot, username, unique, message, args, db, prefix) => {
  bot.chat('/lobby');
  bot.chat('/play sb');
}
module.exports.config = {
    // General
    name: "startup",
    description: "starts up",
    usage: "startup",
    aliases: [],
    disabled: false, // true/false
    hide: false,
}
