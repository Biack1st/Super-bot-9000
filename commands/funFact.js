const nodeFetch = require("node-fetch")

const url = "https://useless-facts.sameerkumar.website/api"

async function funFact() {
    const jokePromise = await nodeFetch(url)

    const jokeData = await jokePromise.json()

    return jokeData
}

module.exports = funFact