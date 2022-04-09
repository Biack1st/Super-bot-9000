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
            msg.reply()
        }
    }
]



module.exports = list