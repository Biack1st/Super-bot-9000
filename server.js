const express = require("express")

const app = express()

function startServer() {
    app.get("/", (req, res) => {
        res.send("bot running")
    })
    
    app.listen(3000, () => {
        console.log("server started")
    })
}


module.exports = startServer
