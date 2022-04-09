let prefix = "!"

const Roulettemodule = require("./commands/roulette")

const discord = require("discord.js")

const list = [
   
    {
        cmd: prefix + `spamping`,
        action: function(msg){
            const repeatTime = 10

            const arg2 = msg.content.split(" ")[1]

            const replied = arg2

            for (let i = 0; i < repeatTime; i++) {
                replied += arg2
            }

            msg.reply(replied)
        }
    },
    {
      cmd: prefix + "funfact",
      action: function(msg) { 
          const getFunFact = require("./commands/funFact")  

          const data = getFunFact()

          data.then(d => d.data)
          .then(d => msg.reply(d))
      } 
    },
    {
        cmd: prefix + `roulette`,
        action: function(msg, client){
          const randomchance = Roulettemodule(1,2)

          console.log(randomchance)

          const userMsg = randomchance == 1 && "you win" || "you lose"
            
          const embedData = {
            color: 0x0099ff,
            title: 'Roulette',
            author: {
              name: 'Super bot 9000',
              icon_url: 'https://i.imgur.com/ufhQdix.png',
            },
            description: 'Roulette',
            thumbnail: {
              url: 'https://i.imgur.com/h1Al3kp.png',
            },
            fields: [
              {
                name: 'Result',
                value: userMsg,
              },
            ],
            timestamp: new Date(),
            footer: {
              text: `called on by ${msg.author.tag}`,
              icon_url: 'https://i.imgur.com/ufhQdix.png',
	        },
        }
              

          msg.reply({ embeds: [embedData] })

          
        }
    }
]



module.exports = list