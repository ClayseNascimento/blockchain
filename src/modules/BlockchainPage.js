import { Blockchain } from "./Blockchain";

class BlockchainPage {
  constructor() {
    // Build Main Elements
    const header = document.createElement("header");
    header.style.width = "100vw";
    header.style.height = "32vh";

    document.body.style.margin = 0;
    document.body.style.backgroundColor = "#F5F5F5";
    document.body.appendChild(header);

    this.mainDiv = document.createElement("div");
    document.body.appendChild(this.mainDiv);

    this.blockchainContent = document.createElement("div");
    this.blockchainContent.setAttribute("id", "blockchain-content");

    this.mainDiv.style.width = "100vw";

    this.mainDiv.style.display = "flex";
    this.mainDiv.style.alignItems = "center";
    this.mainDiv.style.justifyContent = "center";
    this.mainDiv.style.flexDirection = "column";

    this.mainDiv.style.fontFamily = "font-family: 'Roboto', sans-serif";

    const blockchainText = document.createElement("h1");
    blockchainText.appendChild(document.createTextNode("BLOCKCHAIN"));
    blockchainText.style.fontSize = "48px";
    blockchainText.style.fontWeight = 400
    blockchainText.style.letterSpacing = "8px";
    blockchainText.style.marginBottom = "48px";
     
    this.mainDiv.appendChild(blockchainText);
    this.mainDiv.appendChild(this.blockchainContent);

    // Create chain
    this.chain;
  }

  createBlock(hash, previousHash, nonce, data, timestamp, difficulty) {
    const newBlock = document.createElement("div");
    newBlock.style.width = "40vw";
    newBlock.style.height = "24vh";
    newBlock.style.marginBottom = "64px";

    newBlock.style.display = "flex";
    newBlock.style.alignItems = "center";
    newBlock.style.justifyContent = "center";

    newBlock.style.backgroundColor = "#FFF";
    newBlock.style.borderRadius = "16px";
    newBlock.style.boxShadow = "0 5px 15px -2px rgba(10,16,34,.4)";

    return newBlock;
  }

  addBlockToPage() {
    const newBlock = this.createBlock();
  }

  /* reconfigureBlockchain() {

  } */

}

export default BlockchainPage;