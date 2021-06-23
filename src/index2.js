import { Blockchain } from "./modules/Blockchain";

const hashDifficulty = {
  difficulty: 3
}

let coin = new Blockchain(hashDifficulty);
coin.addBlock(1, "13/06/2021", { amount: 4}, hashDifficulty.difficulty)
coin.addBlock(2, "23/06/2021", { amount: 10}, hashDifficulty.difficulty)

console.log('Is blockchain valid? ' + coin.isChainValid())

coin.chain[1].data = {amount: 100}
coin.chain[1].hash = coin.chain[1].calculateHash()

console.log('Is blockchain valid? ' + coin.isChainValid())

console.log(JSON.stringify(coin, null, 4))