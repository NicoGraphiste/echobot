
const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let muteReason = args.join(" ").slice(22);
  let Muteuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Echo ne trouve pas la personne a mute.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Impossible de mute!");
  let muterole = message.guild.roles.find(`name`, "mutebyEcho");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "mutebyEcho",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Vous avez pas spécifier le temps du mute!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> a été mute [Temps du mute] ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> n'est plus mute!`);
  }, ms(mutetime));

  let mIcon = Muteuser.user.displayAvatarURL;
  let muteEmbed = new Discord.RichEmbed()
  .setDescription("~Mute~")
  .setColor("#e56b00")
  .addField("Utilisateur Mute", `${Muteuser} son ID ${Muteuser.id}`)
  .addField("Mute par", `<@${message.author.id}> son ID ${message.author.id}`)
  .setThumbnail(mIcon)
  .addField("Mute dans le channel", message.channel)
  .addField("Il y'a", message.createdAt)
  .addField("Raison", muteReason);

  let muteChannel = message.guild.channels.find(`name`, "mute");
  if(!muteChannel) return message.channel.send("Impossible de trouver le channel mute.");

  muteChannel.send(muteEmbed);

//end of module
}

module.exports.help = {
  name: "tempmute"
}
