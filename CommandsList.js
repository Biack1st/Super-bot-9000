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
            msg.reply(`${arg2}${arg2}${arg2}${arg2}${arg2}${arg2}${arg2}${arg2}${arg2}${arg2}${arg2}${arg2}${arg2}`)
        }
    }
]



module.exports = list