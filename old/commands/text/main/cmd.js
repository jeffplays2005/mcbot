module.exports.run = async (bot, username, unique, message, args, db, prefix) => {
  var msg = args.join(' ');
  bot.chat(`/${msg}`)
}
module.exports.config = {
    // General
    name: "cmd",
    description: "runs a cmd",
    usage: "cmd <cmd>",
    aliases: [ 'command' ],
    disabled: false, // true/false
    hide: false,
}
