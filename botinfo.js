const Discord = require("discord.js")
const color = require('../uteis/colors.json')
const emoji = require('../uteis/emojis.json')

exports.run = async(client, message, args) => {

    let user = message.author
  
    let dias = 0; 
    let week = 0; 
 
     let uptime = ``; 
     let totalSegundos = (client.uptime / 1000); 
     let horas = Math.floor(totalSegundos / 3600); 
     totalSegundos %= 3600; 
     let minutos = Math.floor(totalSegundos / 60); 
     let segundos = Math.floor(totalSegundos % 60); 
 
     if (horas > 23){
         dias = dias + 1;
         horas = 0; 
     }
     if (dias == 7){ 
         dias = 0; 
         week = week + 1; 
     }
     if (week > 0){ 
         uptime += `${week} week, `;
     }
     if (minutos > 60){ 
         minutos = 0;
     }
     uptime += `\`${dias}d ${horas}h ${minutos}m ${segundos}s\``;

     var servs = client.guilds.cache.size;
     var users = client.users.cache.size;
     var channelsize = client.channels.cache.size;

     var linguagem = ('[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) com [Node.js](https://nodejs.org/en/)');
     var livraria = ('[Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)');
     var database = ('[Firebase](https://firebase.google.com/)')
     var host = ('[AntryHost](https://antryhost.com)')

     var meadicione = ('[Me adicione!](https://discord.com/api/oauth2/authorize?client_id=793863785844572221&permissions=8&scope=bot)')
     var suporte = ('[Servidor oficial!](https://discord.gg/a5s6FFE7Ky)')
     var site = ('[Site oficial!](https://galaxybot1.000webhostapp.com/)')

     let info = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#2f3136")
        .setTitle(`Minhas informações`)
        .setDescription('Olá, sou o Galaxy BOT tudo bem? Espero que sim... Eu sou um bot para o discord com o objetivo de ajudar os servidores. Corra, me adicione! Aqui estão algumas informações minhas.')
        .setImage('https://cdn.discordapp.com/attachments/699633424461332574/796410689647542302/botinfo.png')
        .addField("Desenvolvedores", `<@577992010506436609> \`RafaGamerOFC#1654\`
        `)
        .addField("**Estatísticas**",`» Servidores: **${client.guilds.cache.size}**\n» Usuários: **${client.users.cache.size}**\n» Canais: **${client.channels.cache.size}**`, true)
        .addField("**Status**", `» Estou acordado há: ` + uptime, true)
        .addField("**Informações e Créditos**", `» Escrito em ${linguagem}\n» Library: ${livraria}\n» DataBase: ${database}\n» Hospedagem: ${host} \n» Criado em: \`15/11/2020\`\n» Créditos: \`RafaGamerOFC#1654\` `)
        .addField("**Links**", `**»** ${meadicione}\n**»** ${suporte}\n**»** ${site}
    
        `)
        .setFooter(`Solicitado por ${message.member.user.username}`, message.member.user.displayAvatarURL({dynamic: true}))

    let loading = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setDescription("<a:loading:784187772456927273>")
        
     message.channel.send(loading)
    .then(m => m.delete({ timeout: 2000 }))
    .then(() => message.channel.send(info))
}

exports.help = {
  name: "botinfo",
  aliases: ["info", "bot"]
}
