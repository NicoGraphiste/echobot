const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Echo ne trouve pas l'utilisateur !");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("! Non.");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut pas être kick !");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Utilisateur Kick", `${kUser} son ID ${kUser.id}`)
    .addField("Kick par", `<@${message.author.id}> son ID ${message.author.id}`)
    .addField("Kick dans le channel", message.channel)
    .addField("Il y'a", message.createdAt)
    .addField("Raison", kReason);

    let kickChannel = message.guild.channels.find(`name`, "kick-and-ban");
    if(!kickChannel) return message.channel.send("Impossible de trouver le channel kick-and-ban.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
