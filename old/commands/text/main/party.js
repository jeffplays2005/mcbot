module.exports.run = async (bot, username, unique, message, args, db, prefix) => {
  bot.chat(`/p ${username}`);
}
module.exports.config = {
    // General
    name: "party",
    description: "invites party",
    usage: "party",
    aliases: [ 'p' ],
    disabled: false, // true/false
    hide: false,
}
