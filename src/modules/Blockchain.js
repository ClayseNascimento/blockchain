import { Block } from "./Block";

class Blockchain{
    constructor(){
      this.chain = new Array();
    }

    createGenesisBlock(data, difficulty){
      const date = new Date();
      const options = { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
      };
      const newBlock = new Block(0, date.toLocaleDateString("pt-BR", options), data, "0", difficulty); 

      this.chain.push(newBlock);
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


