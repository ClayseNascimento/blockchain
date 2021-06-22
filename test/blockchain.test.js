import { Blockchain } from "../src/modules/Blockchain";

let blockchainInstance;

describe ("Blockchain Test", () => {

  beforeAll(() => {
    const hashDifficulty = {
      difficulty: 3
    };

    blockchainInstance = new Blockchain(hashDifficulty)
  })

  it("should be able tp create a genesis block", () => {
    expect(blockchainInstance.chain[0]).toHaveProperty("data", "Genesis Block");
  })


  it("should be able to return the last block of blockchain", () => {
    const blockchainLength = blockchainInstance.chain.length;

    expect(blockchainInstance.chain[blockchainLength - 1]).toHaveProperty(
      "index", (blockchainLength - 1)
    )
  })

  it("should be able to create a new block and add to the chain", () => {
    blockchainInstance.addBlock(1, "13/06/2021", { amount: 4}, 3);

    const desiredObject = {
      index: 1,
      timestamp: "13/06/2021",
      data: {
        amount: 4
      },
      previousHash: blockchainInstance.chain[0].hash,
      difficulty: 3
    };

    expect(blockchainInstance.chain[1]).toMatchObject(desiredObject);
  })

  it("should be able to validate the blockchain and return true", () => {
    expect(blockchainInstance.isChainValid()).toBeTruthy();
  })

})