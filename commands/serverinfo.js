const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Information du Serveur")
    .setColor("#f9ab02")
    .setThumbnail(sicon)
    .addField("Nom du Serveur", message.guild.name)
    .addField("Crée le", message.guild.createdAt)
    .addField("Tu as rejoint le", message.member.joinedAt)
    .addField("Membres total", message.guild.memberCount);

    return message.channel.send(serverembed);

}

module.exports.help = {
  name: "infoserveur"
}
