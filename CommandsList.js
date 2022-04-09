let prefix = "!"

const Roulettemodule = require("./commands/roulette")

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
          const funFactModule = require("./commands/funFact")  

          const data = funFactModule()

          data.then(d => d.data)
          .then(d => msg.reply(d))
      } 
    },
    {
        cmd: prefix + `roulette`,
        action: function(msg){
          const randomchanc = Roulettemodule(1,2)
          const msges = randomchanc === 1 && "you win" || "you lose"
          msg.reply(msges)
        }
    },
    {
        cmd: prefix + `roulette`,
        action: function(msg){
          const randomchanc = Roulettemodule(1,2)
          const msges = randomchanc === 1 && "you win" || "you lose"
          msg.reply(msges)
        }
    }
]



module.exports = list