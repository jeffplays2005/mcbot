module.exports.run = async (bot, username, unique, message, args, db, prefix) => {
  bot.chat('/skyblock')
}
module.exports.config = {
    // General
    name: "sb",
    description: "plays skyblock",
    usage: "sb",
    aliases: [ 'skyblock' ],
    disabled: false, // true/false
    hide: false,
}
