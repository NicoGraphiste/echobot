const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Echo ne trouve pas l'utilisateur !");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Echo détecte que tu as pas la permission qu'il faut.");
    if(bUser.hasPermission) return message.channel.send("Echo détecte qu'il ne peut pas kick cette personne.")

    let banEmbed = new Discord.RichEmbed()
    .setDescription(">~Kick~>")
    .setColor("#f90202")
    .addField("Utilisateur Ban", `${bUser} et L'ID ${bUser.id}`)
    .addField("Ban Par", `<@${message.author.id}> et L'ID ${message.author.id}`)
    .addField("Channel ou il a été Ban", message.channel)
    .addField("Il y'a", message.createdAt)
    .addField("Raison", bReason);

    let kickandbanchannel = message.guild.channels.find(`name`, "kick-and-ban");
    if(!kickandbanchannel) return message.channel.send("Echo ne trouve pas le channel kick-and-ban.");

    message.guild.member(bUser).ban(bReason);
    kickandbanchannel.send(banEmbed);


    return;
}

  module.exports.help = {
  name: "ban"
}
