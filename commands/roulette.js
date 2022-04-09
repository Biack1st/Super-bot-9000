function ezrandom(min,max){
    return Math.floor(Math.random()*(max,min)+min)
}

function roulette(msg){
 const randomedchance = ezrandom(1,2)
 return randomedchance
}

module.exports = roulette