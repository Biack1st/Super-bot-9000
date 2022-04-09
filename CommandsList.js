let prefix = "!"

const list = [
    {
        cmd: `${prefix}bruh`,
        action: function(msg) {
            msg.reply("bruh bruh")
        }
    },
    {
        cmd: `${prefix}spamping`,
        action: function(msg){
            const arg2 = msg.split(" ")[1]
            for (let i = 0; i < 5; i++){
                msg.reply(`${arg2}`)
            }
        }
    }
]



module.exports = list