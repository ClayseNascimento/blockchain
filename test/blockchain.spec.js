const Blockchain = require("../src/modules/Blockchain");

describe ("Blockchain Test", () => {
    it("Should create genesis block (index = 0)", function(){
        expect(blockchain.createGenesisBlock()[0].index).to.be.equal(0)
    })


    it ("Blockchain must return the last block", function(){
        
    })


})



