const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let erro = new Discord.MessageEmbed()
.setDescription('Você só pode usar esse comando no canal <#789308075340464178>')
.setColor('#FF0101')

if(message.channel.id != 789308075340464178) return message.channel.send(erro)
  ) 
  var sender = message.author;
  message.channel.send(`Olá ${message.author.username}, as perguntas para adicionar o bot foi enviada no seu privado, caso não tenha recebido, verifique se o seu privado esta desbloqueado.`);
  message.author.send("**Adicione seu bot** \nQual o nome do bot?")
    .then(async msg => {
      let nome = await msg.channel.createMessageCollector(
        m => m.author.id === message.author.id,
        { max: 1 }
      );
      // create a message collector
      nome.on("collect", async () => {
        var name = nome.collected.first().content;
        if (nome.collected.first().content.length > 950) {
          sender.send("Limite de caracteres excedido! Resposta reduzida.");
          let ts = nome.collected.first().content;
          name = "";
          for (var i = 0; i < 950; i++) name += ts[i];
        }
        // collect
        message.author.send("Mande o ID do bot.");
        let idade = await msg.channel.createMessageCollector(
          m => m.author.id === message.author.id,
          { max: 1 }
        );

        // collector message 2
        idade.on("collect", async () => {
          var idadee = idade.collected.first().content;
          if (idade.collected.first().content.length > 950) {
            sender.send("Limite de caracteres excedido! Resposta reduzida.");
            let ts2 = idade.collected.first().content;
            idadee = "";
            for (var i = 0; i < 950; i++) idadee += ts2[i];
          }
          message.author.send("Qual prefixo do bot?");
          let hora = await msg.channel.createMessageCollector(
            m => m.author.id === message.author.id,
            { max: 1 }
          );

          // collector message 2
          hora.on("collect", async () => {
            var hour = hora.collected.first().content;
            if (hora.collected.first().content.length > 950) {
              sender.send("Limite de caracteres excedido! Resposta reduzida.");
              let ts3 = hora.collected.first().content;
              hour = "";
              for (var i = 0; i < 950; i++) hour += ts3[i];
            }
            message.author.send("Dê uma descrição sobre o bot!");
            let cargo = await msg.channel.createMessageCollector(
              m => m.author.id === message.author.id,
              { max: 1 }
            );
            cargo.on("collect", async () => {
              var carg = cargo.collected.first().content;
              if (cargo.collected.first().content.length > 950) {
                sender.send(
                  "Limite de caracteres excedido! Resposta reduzida."
                );
                let ts4 = cargo.collected.first().content;
                carg = "";
                for (var i = 0; i < 950; i++) carg += ts4[i];
              }
              message.author.send("Qual a linguagem do seu bot?");
              let bots = await msg.channel.createMessageCollector(
                m => m.author.id === message.author.id,
                { max: 1 }
              );

              bots.on("collect", async () => {
                var bot = bots.collected.first().content;
                if (bots.collected.first().content.length > 950) {
                  sender.send("Limite de caracteres excedido! Resposta reduzida.");
                  let ts5 = bots.collected.first().content;
                  bot = "";
                  for (var i = 0; i < 950; i++) bot += ts5[i];
                }
                message.author.send("Qual o comando que lista os outros comandos? E qual o comando que mostra o SEU NOME?");
                let motivo = await msg.channel.createMessageCollector(
                  m => m.author.id === message.author.id,
                  { max: 1 }
                );

                motivo.on("collect", async () => {
                  var motv = motivo.collected.first().content;
                  if (motivo.collected.first().content.length > 1000) {
                    sender.send("Limite de caracteres excedido! Resposta reduzida.");
                    let ts6 = motivo.collected.first().content;
                    motv = "";
                    for (var i = 0; i < 1000; i++) motv += ts6[i];
                  }
                  //Mensagem final
                  message.author.send("Seu bot foi enviado para análise, fique atento no discord **Galaxy | Bot List**.");

                  let rcanal = message.guild.channels.cache.find(
                    a => a.id === "789308075622006816"
                  );
                  let form = new Discord.MessageEmbed()
                    .setTitle("NOVO BOT ADICIONADO")
                    .setThumbnail(
                      message.author.avatarURL({
                        dynamic: true,
                        format: "png",
                        size: 1024
                      })
                    )
                    .setColor("#dc143c")
                    .setTimestamp()
                    .addField("Nome do bot:", name)
                    .addField("Adicione o bot:", idadee)
                    .addField("Prefixo:", hour)
                    .addField("Descrição:", carg)
                    .addField("Linguagem:", bot)
                    .addField("Comandos:", motv)
                    .setFooter("ID do Usuário: " + message.author.id);

                  rcanal.send(form);
                });
              });
            });
          });
        });
      });
    });
};

module.exports.help = () => {
  return {
    name: "form",
    info: "nada",
    restrict: false
  };
};
