const prompt = require('prompt-sync')({sigint: true})

function getRandom() {
    const r =  Math.floor(Math.random() * 90) +10
    return r
}

function calcPrize(choice, lotteryNumber) {
    let prize = 0
    if (choice === lotteryNumber)
        prize = 10000
    
    else if (lotteryNumber.indexOf(choice[0]) >= 0 && lotteryNumber.indexOf(choice[1]) >= 0)
        prize = 3000
    
    else if (lotteryNumber.indexOf(choice[0]) >= 0 || lotteryNumber.indexOf(choice[1]) >= 0)
        prize = 1000
    
    return prize
}

const lotteryNumber = getRandom(10,99).toString()
const playerNumber = prompt('Enter a two-digit number: ')
const prize = calcPrize(lotteryNumber, playerNumber)

console.log(`Lottery number was ${lotteryNumber}`)
console.log(`You win £${prize}`)

