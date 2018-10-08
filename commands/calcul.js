const math = require('mathjs');
const Discord = require('discord.js');

module.exports.run = (client, message, args, tools) => {

    if (!args[0]) return message.channel.send("S'il vous plaît mettez un calcul.");

    let resp;
    try {
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send("Désoler, mais vous devez mettre un calcul valide merci.");
    }
    let embed = new Discord.RichEmbed()
        .setColor("#00ffff")
        .setTitle("Calcul mathématique.")
        .addField('Calcul', (`\`\`\`js\n${args.join('')}\`\`\``))
        .addField('Résultat', `\`\`\`js\n${resp}\`\`\``)

        message.channel.send(embed);
        
}

module.exports.help = {
    name: "calcul"
  }