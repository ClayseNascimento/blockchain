const SHA256 = require ('crypto-js/sha256')

class Block {
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index
        this.timestamp = timestamp
        this.data = data
        this.previousHash = previousHash
        this.hash = this.calculateHash()
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString()
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()]
    }

    createGenesisBlock(){
        return new Block(0, "11/06/2021", "Genesis Block", "0")
    }

    getLatesBlock(){
        return this.chain[this.chain.length -1]
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatesBlock().hash
        newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock)
    }

    isChainValid(){
        for(let i = 1; i< this.chain.length; i ++){
            const currentBlock = this.chain[1]
            const previousBlock = this.chain[i-1]

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false
            }

            if (currentBlock.previousHash !== previousBlock.hash){
                return false
            }
        }

        return true
    }

}

let coin = new Blockchain()
coin.addBlock(new Block(1, "13/06/2021", { amount: 4}))
coin.addBlock(new Block(2, "23/06/2021", { amount: 10}))

console.log('Is blockchain valid? ' + coin.isChainValid())

coin.chain[1].data = {amount: 100}
coin.chain[1].hash = coin.chain[1].calculateHash()

console.log('Is blockchain valid? ' + coin.isChainValid())

console.log(JSON.stringify(coin, null, ))



