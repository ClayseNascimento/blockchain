import sha256 from 'crypto-js/sha256';

class Block {
    constructor(index, timestamp, data, previousHash = '', difficulty){
      this.index = index
      this.timestamp = timestamp
      this.data = data
      this.previousHash = previousHash
      this.difficulty = difficulty;
      this.nonce = 0;
      this.hash = this.calculateHash();
    }

    calculateHash() {
      let newHash = sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();

      while(!this.isValidHashDifficulty(newHash, this.difficulty)) {
        this.nonce++;

        newHash = sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
      }

      return newHash;
    }

    isValidHashDifficulty(hash, difficulty) {
      let count = 0;

      while(count !== hash.length){
        if(hash[count] !== '0') {
          break;
        }
        count++;
      }

      return count >= difficulty;
    }
}

export { Block };