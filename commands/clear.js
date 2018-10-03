const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    //e!clear 3
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Encore une pizza aussi ? :pizza:");
    if(!args[0]) return message.channel.send("Encore ! :pizza:");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]}, Messages clear.`).then(msg => msg.delete(5000));
    })
}

module.exports.help = {
    name: "clear"
}