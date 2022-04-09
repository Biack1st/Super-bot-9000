let prefix = "!"

const list = [
    {
        cmd: `${prefix}bruh`,
        action: function(msg) {
            
        }

    },
    {
        cmd: `${prefix}spamping`,
        action: function(msg){
            const repeatTime = 10

            const arg2 = msg.split(" ")[1]

            const replied = arg2

            for (let i = 0; i < repeatTime; i++) {
                replied += arg2
            }

            msg.reply(replied)
        }
    }
]



module.exports = list