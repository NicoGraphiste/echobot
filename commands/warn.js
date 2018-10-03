const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'warns');
  if (!modlog) return message.reply('Echo ne trouve pas le channel "warns"');
  if (reason.length < 1) return message.reply('Vous devez mettre une raison pour le warn');
  if (message.mentions.users.size < 1) return message.reply('Vous devez mentionner une personne pour warn').catch(console.error);
  let bicon = user.displayAvatarURL;
  let embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setThumbnail(bicon)
  .setDescription("**Warn**")
  .addField("Utilisateur mute :", user.tag)
  .addField("Par le Modérateur :", message.author.tag)
  .addField("Raison :", reason)
  .addField("Il y'a", message.createdAt);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "warn"
};