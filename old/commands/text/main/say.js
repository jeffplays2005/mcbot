module.exports.run = async (bot, username, unique, message, args, db, prefix) => {
  bot.chat(args.join(' '));
}
module.exports.config = {
    // General
    name: "say",
    description: "say something",
    usage: "say <msg>",
    aliases: [],
    disabled: false, // true/false
    hide: false,
}
