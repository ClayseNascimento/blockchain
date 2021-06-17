const Block = require("../src/modules/Block");

const blockInstance = new Block(0, "21/06/2021", { amount: 5 }, "Genesis Block", 3);

describe("Block test", () => {

  it("should be able to create a new block", () => {
    expect(blockInstance).toBeInstanceOf(Block);
  })

  it("should be able to test if it contains index, timestamp, data, previousHash, difficulty, hash", () => {
    const desiredObject = {
      index: 0,
      timestamp: "21/06/2021",
      data: {
        amount: 5
      },
      previousHash: "Genesis Block",
      difficulty: 3
    };

    expect(blockInstance).toMatchObject(desiredObject);
  })
})