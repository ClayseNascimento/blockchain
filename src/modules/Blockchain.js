import { Block } from "./Block";

class Blockchain{
    constructor(hashDifficulty = 3){
      this.chain = [this.createGenesisBlock(hashDifficulty.difficulty)]
    }

    createGenesisBlock(difficulty){
      return new Block(0, "11/06/2021", "Genesis Block", "0", difficulty);
    }

    getLatestBlock() {
      return this.chain[this.chain.length -1]
    }

    addBlock(index, timestamp, data, difficulty){
      let newBlock = new Block(
        index, timestamp, data, this.getLatestBlock().hash, difficulty
      );
      newBlock.hash = newBlock.calculateHash()
      this.chain.push(newBlock)
    }

    isChainValid(){
      for(let i = 1; i< this.chain.length; i ++){
        const currentBlock = this.chain[i]
        const previousBlock = this.chain[i-1]

        if(currentBlock.hash !== currentBlock.calculateHash()) {
          return false
        }

        if (currentBlock.previousHash !== previousBlock.hash) {
          return false
        }
      }

      return true
    }
}

export { Blockchain };


