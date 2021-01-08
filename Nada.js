const Discord = require('discord.js')
exports.run = async(client, message, args) => {
let erro = new Discord.MessageEmbed()
.setDescription('Mensagem de erro')
.setColor('#FF0101')

if(message.channel.id != 789308075340464178) return message.channel.send(erro)
}
