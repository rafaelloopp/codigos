const Discord = require('discord.js')
const db = require("firebase").database()
exports.run = async(client, message, args) => {
let erro = new Discord.MessageEmbed()
.setDescription('Você não pode usar esse comando aqui, apenas em #➕・add-bot!')
.setColor('#FF0101')

if(message.channel.id != 789308075340464178) return message.channel.send(erro)

message.delete()

let embed = new Discord.MessageEmbed()
.setDescription('Olhe sua dm!:3')

message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))

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

let embed6 = new Discord.MessageEmbed()
.setDescription(`[Convide](https://discord.com/oauth2/authorize?client_id=${resposta}&scope=bot&permissions=0)
\nID: \`${resposta}\`\nLinguagem: \`${resposta2}\`\nPrefix: \`${resposta3}\`\nDescrição: \`${resposta4}\``
)
client.channels.cache.get("789308076896813076").send(embed6)
        })
      })
    })
  })
}
