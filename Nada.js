const Discord = require('discord.js')
exports.run = async(client, message, args) => {
let erro = new Discord.MessageEmbed()
.setDescription('Você não pode usar esse comando aqui, apenas em <#789308075340464178>!')
.setColor('#FF0101')

if(message.channel.id != 789308075340464178) return message.channel.send(erro)

let embed = new Discord.MessageEmbed()
.setDescription('Olhe sua dm!:3')

message.channel.send(embed)

}
