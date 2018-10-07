const Discord = require("discord.js");
const botconfig = require("../botconfig");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {

  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00ffff")
  .addField("eLevel", curlvl, true)
  .addField("XP", curxp, true)
  .setFooter(`${difference} XP jusqu'au niveau supérieur`, message.author.displayAvatarURL);

  message.channel.send(lvlEmbed)

}

module.exports.help = {
  name: "elevel"
}
