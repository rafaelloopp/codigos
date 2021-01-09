const Discord = require('discord.js')
const db = require("firebase").database()
exports.run = async(client, message, args) => {
let erro = new Discord.MessageEmbed()
.setDescription('Você não pode usar esse comando aqui, apenas em <#789308075340464178>!')
.setColor('#FF0101')

if(message.channel.id != 789308075340464178) return message.channel.send(erro)

let embed = new Discord.MessageEmbed()
.setDescription('Olhe sua dm!:3')

message.channel.send(embed)

let embed2 = new Discord.MessageEmbed()
.setDescription('qual id')

message.author.send(embed2)
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta) => {
resposta = resposta.content

let embed3 = new Discord.MessageEmbed()
.setDescription('qual linguagem')

message.author.send(embed3)
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta2) => {
resposta2 = resposta2.content

let embed4 = new Discord.MessageEmbed()
.setDescription('qual prefixo')

message.author.send(embed4)
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta3) => {
resposta3 = resposta3.content

let embed5 = new Discord.MessageEmbed()
.setDescription('qual desc')

message.author.send(embed5)
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta4) => {
resposta4 = resposta4.content
  })
})
}
