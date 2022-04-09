let prefix = "!"

const Roulettemodule = require("./commands/roulette")

const discord = require("discord.js")



const list = [
   
    {
        cmd: prefix + `spamping`,
        action: function(msg){
            const blacklisted = [759136939889655820]
            const repeatTime = 35

            const arg2 = msg.content.split(" ")[1]

            let replied = arg2

            for (let i = 0; i < repeatTime; i++) {
                replied += arg2
            }

            if (msg.author.id != 759136939889655820) {
              
              msg.reply(replied)
              
            }
            else {
              msg.reply("you are blacklisted from using this command")
            }
            
        },
        description: "Spam pings the following user."
    },
    {
      cmd: prefix + "funfact",
      action: function(msg) { 
          const getFunFact = require("./commands/funFact")  

          const data = getFunFact()

          data.then(d => d.data)
          .then(d => msg.reply(d))
      },
      description: "Replies with a random, useless fact." 
    },
    {
        cmd: prefix + `roulette`,
        action: function(msg, client){
          const randomchance = Roulettemodule(1,2)

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

          
        },
        description: "Plays a game of Roulette"
    },
    {
      cmd: prefix + "help",
      action: function(msg) { 
        const feilds = []
        
        for (let i = 0; i < list.length; i++) {
            const cmd = list[i]
            feilds.push({name: cmd.cmd,
            value: cmd.description || "*no description given*"}) 
        }


        const embedData = {
            color: 0x0099ff,

            author: {
              name: "Super bot 9000",
              icon_url: "https://images-ext-1.discordapp.net/external/j0GYtDP6M3F6iKBkAeLUcVPwHcmA5V-u4nmz3MNTg10/https/i.imgur.com/ufhQdix.png"
            },
            fields: feilds
        }
        msg.reply({embeds: [embedData]})
      }
    }
]



module.exports = list