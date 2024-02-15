module.exports.run = async (bot, username, unique, message, args, db, prefix) => {
  bot.chat(`/warp hub`);
}
module.exports.config = {
    // General
    name: "hub",
    description: "warp hub",
    usage: "hub",
    aliases: [ 'h' ],
    disabled: false, // true/false
    hide: false,
}
