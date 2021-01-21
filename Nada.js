const Discord = require('discord.js')
const db = require("firebase").database()
exports.run = async(client, message, args) => {
let erro = new Discord.MessageEmbed()
.setDescription('Você não pode usar esse comando aqui, apenas em <#798987474512773190>!')
.setColor('#FF0101')

if(message.channel.id != 798987474512773190) return message.channel.send(erro)

message.delete()

let embed = new Discord.MessageEmbed()
.setDescription(`<:gb:794538448408281088> | Verifique sua DM!`)
.setImage('https://cdn.discordapp.com/attachments/789308075340464178/799774242891497552/addbot.png')
.setColor('0000FF')

message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))

let embed2 = new Discord.MessageEmbed()
.setTitle('Adicione seu bot 1/4')
.setDescription('Qual a ID do seu bot?')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed2).then((a) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta) => {
resposta = resposta.content

let embed3 = new Discord.MessageEmbed()
.setTitle('Adicione seu bot 2/4')
.setDescription('Qual a linguagem de programação do seu bot?')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed3).then((a1) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta2) => {
resposta2 = resposta2.content

let embed4 = new Discord.MessageEmbed()
.setTitle('Adicione seu bot 3/4')
.setDescription('Qual o prefixo do seu bot? Se for personalizavel ponha o prefixo e diga que é personalizado.')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed4).then((a2) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta3) => {
resposta3 = resposta3.content

let embed5 = new Discord.MessageEmbed()
.setTitle('Adicione seu bot 4/4')
.setDescription('Descreva em poucas palavras, as funcionabilidades do seu bot.')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed5).then((a3) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta4) => {
resposta4 = resposta4.content

let embed6 = new Discord.MessageEmbed()
.setTitle('Enviado para análise')
.setDescription('<:gb:794538448408281088> | O seu bot foi enviado para análise, temos o prazo de até 12 horas para verificarmos o seu bot.')
.setColor('0000FF')
message.author.send(embed6)

let embed7 = new Discord.MessageEmbed()
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setTitle(`${message.author.tag} enviou um bot!`)
.setColor('0000FF')
.setDescription(`
Nome do bot: \`\`\`js
${await.client.users.fetch(resposta1).tag}
\`\`\`
Linguagem: \`\`\`js
${resposta2}
\`\`\`
Prefix: \`\`\`js
${resposta3}\`\`\`
Descrição: \`\`\`
${resposta4}
\`\`\`
Quem mandou: \`\`\`js
${message.author.tag}\`\`\`
Convide o bot:
[Clique aqui](https://discord.com/oauth2/authorize?client_id=${resposta}&scope=bot&permissions=0)`)
client.channels.cache.get("798987474512773190").send(embed7).then

let embed8 = new Discord.MessageEmbed()
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')
.setDescription(`${message.author.tag} enviou o bot ${await.client.users.fetch(resposta1).tag} para analise.`)
client.channels.cache.get("798987169842200577").send(embed8).then
        })
       })
      })
     })
    })
   })
  })
 })
})
}
