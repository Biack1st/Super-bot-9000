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
      action: async function(msg) { 
        try {
          const getFunFact = require("./commands/funFact")  

          const data = await getFunFact()

          console.log(data)

          msg.reply({embeds: [{
              color: 0x0099ff,
	            title: 'Fun fact',
              author: {
                name: 'Super Robot 9000',
                icon_url: 'https://images-ext-1.discordapp.net/external/j0GYtDP6M3F6iKBkAeLUcVPwHcmA5V-u4nmz3MNTg10/https/i.imgur.com/ufhQdix.png',
              },
              description: 'Fun fact',

              fields: [
                {
                  name: ":warning: WARNING :warning:",
                  value: "The following fact is returned by 3rd party API endpoint. The following fact may be inappropriate or gross for some users."
                },  
                {
                  name: "Fact",
                  value: data.data
                },
              
            ],
            footer: {
              text: `Called on by: ${msg.author.tag}`,
              icon_url: 'https://images-ext-1.discordapp.net/external/j0GYtDP6M3F6iKBkAeLUcVPwHcmA5V-u4nmz3MNTg10/https/i.imgur.com/ufhQdix.png',
            },
          }]
        })
        }
        catch(err) {
          msg.reply("Failed to get a fun fact :(")
          console.log(err)          
        } 
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
    },
    {
      cmd: prefix + "troll",

      action: function(msg, client) {
        if (! msg.author.bot) {
          if (msg.content.toLowerCase().match("!troll")) {
             msg.delete()
             const target = msg.content.split(" ")[1]
 
             const trollMsg = msg.content.split("-m")[1] || "get trolled nub lmao"
               
             const anonymous = msg.content.split("-a")[1] != null || false
                         
             if (target) {
                 const member = client.users.cache.find(u => u.tag == target)
     
                 const currentUser = msg.author.tag
     
                 if (member && ! member.bot) {
                     const id = member.id
                     
                     const targetUser = client.users.cache.find(u => u.id == id)
       
                     targetUser.send(`${ anonymous == true && "Anonymous" || currentUser} trolled you: ${trollMsg}`)
     
                     console.log(`sender: ${msg.author.id} sent msg to ${targetUser} msg: ${trollMsg}`)
                 }
             }
         }
       }
      },
      description: "trolls the specified user"
    }
]



module.exports = list