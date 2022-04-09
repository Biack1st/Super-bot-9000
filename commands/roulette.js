function ezrandom(min,max){
    return Math.floor(Math.random()*(max,min)+min)
}

function roulette(min,max){
    const randomedchance = ezrandom(min,max)
    return randomedchance
}

module.exports = roulette