const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let rUser = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Echo n'a pas réussi à trouver l'utilisateur");
      let reason = args.join(" ").slice(22);

      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#f9ab02")
      .addField("Utilisateur Report", `${rUser} et l'ID: ${rUser.id}`)
      .addField("Report Par", `${message.author} et l'ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Il y'a", message.createdAt)
      .addField("Raison", reason);

      let reportschannel = message.guild.channels.find(`name`, "reports");
      if(!reportschannel) return message.channel.send("Echo n'a pas trouvé le channel reports.");


      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);

      return;
}

module.exports.help = {
  name: "report"
}
