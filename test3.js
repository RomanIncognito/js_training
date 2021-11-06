function factor(x){
    if (x == 0 || x == 1){
        return BigInt(1)
    } else {
        let temp = BigInt(1)
        for (let i = 2n; i <= x; i += 1n){
            temp *= i
        }
        return temp
    }
}

function getParticipants(handshakes){
    if (handshakes == 0) {return 1}
    let numberFarmers = 2
    let numberHandshakes = BigInt(0)
    while (true){
        numberHandshakes = factor(numberFarmers) / (factor(2) * factor(numberFarmers - 2))
        if (numberHandshakes >= handshakes){
            return numberFarmers
        }
        numberFarmers += 1
    }
}

console.log(getParticipants(56280))