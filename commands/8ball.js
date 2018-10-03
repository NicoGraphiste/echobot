const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //e!8ball <question> !
    if(!args[2]) return message.reply("S'il vous plaît, une question.");
    let replies = ["Ouais", "Non", "Je sais pas", "Essaye une prochaine fois", "je suis pas d'accord", "Ok"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#00ffff")
    .addField("Question", question)
    .addField("Réponse", replies[result]);

    message.channel.send(ballembed)
}

module.exports.help = {
    name: "8ball"
}