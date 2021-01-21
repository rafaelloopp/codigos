const Discord = require('discord.js')
const db = require("firebase").database()
exports.run = async(client, message, args) => {
let erro = new Discord.MessageEmbed()
.setDescription('Você não pode usar esse comando aqui, apenas em <#798987474512773190>!')
.setColor('#FF0101')

if(message.channel.id != 798987474512773190) return message.channel.send(erro)

message.delete()

let embed = new Discord.MessageEmbed()
.setDescription(`<:gb:794538448408281088> | O formulário de adesão para a equipe **Galaxy BOT | Sup/Lab**, foi enviado na sua DM!`)
.setColor('0000FF')

message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))

let embed1 = new Discord.MessageEmbed()
.setTitle('Aplicação')
.setDescription('Qual seu nome?')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed1).then((a) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta1) => {
resposta1 = resposta1.content

let embed2 = new Discord.MessageEmbed()
.setTitle('Aplicação')
.setDescription('Quantos anos você tem?')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed2).then((a1) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta) => {
resposta = resposta.content

let embed3 = new Discord.MessageEmbed()
.setTitle('Aplicação')
.setDescription('Você já dentrou-se em alguma equipe? Se sim, qual foi a sua experiência? E porque saiu?')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed3).then((a2) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta2) => {
resposta2 = resposta2.content

let embed4 = new Discord.MessageEmbed()
.setTitle('Aplicação')
.setDescription('Fale um pouco sobre você.')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed4).then((a3) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta3) => {
resposta3 = resposta3.content

let embed5 = new Discord.MessageEmbed()
.setTitle('Aplicação')
.setDescription('Tem conhecimento de alguma linguagem de programação? Se sim qual?')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed5).then((a4) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta4) => {
resposta4 = resposta4.content

let embed6 = new Discord.MessageEmbed()
.setTitle('Aplicação')
.setDescription('Tem conhecimento da lingua inglêsa?')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed6).then((a5) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta5) => {
resposta5 = resposta5.content

let embed7 = new Discord.MessageEmbed()
.setTitle('Aplicação')
.setDescription('Dê um exemplo de 5 perguntas frequentes de nosso bot/discord, em seguinda responda as mesmas.')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed7).then((a6) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta6) => {
resposta6 = resposta6.content

let embed8 = new Discord.MessageEmbed()
.setTitle('Aplicação')
.setDescription('Dê um exemplo de "flood" e de "spam".')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed8).then((a7) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta7) => {
resposta7 = resposta7.content

let embed9 = new Discord.MessageEmbed()
.setTitle('Aplicação')
.setDescription('Caso um membro xingasse ou ofendesse outro membro o que você faria?')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed9).then((a8) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta8) => {
resposta8 = resposta8.content

let embed10 = new Discord.MessageEmbed()
.setTitle('Aplicação')
.setDescription('Em suas palaras define o termo "`maturidade`".')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed10).then((a9) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta9) => {
resposta9 = resposta9.content

let embed11 = new Discord.MessageEmbed()
.setTitle('Aplicação')
.setDescription('Em suas palaras define o termo "`responsabilidade`".')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed11).then((a10) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta10) => {
resposta10 = resposta10.content

let embed12 = new Discord.MessageEmbed()
.setTitle('Aplicação')
.setDescription('Explique em suas palavras o que seria ser um ajudante."')
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')

message.author.send(embed12).then((a11) => {
 message.author.dmChannel.createMessageCollector((x) => x.author.id == message.author.id, {max: 1}).on("collect", async (resposta11) => {
resposta11 = resposta11.content

let embed13 = new Discord.MessageEmbed()
.setTitle('Formulário enviado para análise')
.setDescription('<:gb:794538448408281088> | O seu bot foi enviado para análise, temos o prazo de até 12 horas para verificarmos o seu bot.')
.setColor('0000FF')
message.author.send(embed13)

let embed14 = new Discord.MessageEmbed()
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setTitle(`${message.author.tag} enviou um bot!`)
.setColor('0000FF')
.setDescription(`
Nome do bot: \`\`\`js
${resposta1}
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
client.channels.cache.get("798987474512773190").send(embed14).then

let embed15 = new Discord.MessageEmbed()
.setThumbnail('https://cdn.discordapp.com/icons/728027642728677386/37cd5f90aa2d69c518505b3907e0f863.png?size=1024')
.setColor('0000FF')
.setDescription(`**${message.author.tag}** enviou o bot \`${resposta1}\` para analise.`)
client.channels.cache.get("798987169842200577").send(embed15).then
          })
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
