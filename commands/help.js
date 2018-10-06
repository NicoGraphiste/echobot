const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let boticon = bot.user.displayAvatarURL;
    let helpembed = new Discord.RichEmbed()
    .setDescription("~Commandes du bot~")
    .setColor("#f9ab02")
    .setThumbnail(boticon)
    .addField("Prefix normal du bot", "e!")
    .addField("Modération", "Commandes Modérateur.")
    .addField("e!warn", "Permet de warn une personne | Usage : e!warn @Nico insultes | e!help warn\n **e!clear** | permet de supprimer des messages | Usage : e!clear 5\n **e!tempmute** | Permet de mute une personne | Usage : e!tempmute @nico 1s tu fait des bêtises\n **e!say** | Permet de faire parler le bot | Usage : e!say Bonsoir | **e!prefix** | Permet de changer le prefix du bot | Usage : e!prefix j!")
    .addField("Fun", "Commandes Fun !\n **e!8ball** | Permet de faire répondre le bot a une question que vous lui posez | Usage : e!8ball je suis beau ?")
    .addField("Commandes Publique", "Commandes que tous le monde peut faire\n **e!infoserveur** | Permet de montrer les info du serveur | Usage : e!infoserveur\n **e!botinfo** | Permet de montrer les info du bot | Usage : e!botinfo\n **e!report** | Permet de signaler une personne | Usage : e!report @nico a boum big shaq\n **e!elevel** | Permet de montrer ses elevel | Usage : e!elevel");

    return message.channel.send(helpembed);

}

module.exports.help = {
    name: "help"
}