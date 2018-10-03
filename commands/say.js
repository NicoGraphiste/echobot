const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //e!say hey!
    //hey
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Pourquoi pas une :pizza:");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
}

module.exports.help = {
    name: "say"
}