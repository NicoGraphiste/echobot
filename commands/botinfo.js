const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Information Bot !")
  .setColor("#f9ab02")
  .setThumbnail(bicon)
  .addField("Nom du Bot", bot.user.username)
  .addField("Crée le", bot.user.createdAt);

  return message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}
