const createEmptyBlock = () => {
  const newBlock = document.createElement("div");
  newBlock.style.width = "43vw";
  newBlock.style.padding = "24px";
  newBlock.style.marginBottom = "72px";

  newBlock.style.display = "flex";
  newBlock.style.alignItems = "center";
  newBlock.style.justifyContent = "center";
  newBlock.style.flexDirection = "column";

  newBlock.style.backgroundColor = "#FFF";
  newBlock.style.borderRadius = "16px";
  newBlock.style.boxShadow = "0 5px 15px -2px rgba(10,16,34,.4)";

  return newBlock;
}

const fillBlock = (blockchainInstance) => {
  const firstPart = document.createElement("div");
  const secondPart = document.createElement("div");
  const thirdPart = document.createElement("div");
  const fourthPart = document.createElement("div");

  // Parts style
  firstPart.style.width = "42vw";
  firstPart.style.display = "flex";
  firstPart.style.alignItems = "center";
  firstPart.style.border = "1px solid #d9d9d9";
  firstPart.style.borderRadius = "8px";

  secondPart.style.width = "42vw";
  secondPart.style.display = "flex";
  secondPart.style.alignItems = "center";

  thirdPart.style.width = "42vw";
  thirdPart.style.display = "flex";
  thirdPart.style.alignItems = "center";
  thirdPart.style.marginTop = "-8px";

  fourthPart.style.width = "42vw";
  fourthPart.style.display = "flex";
  fourthPart.style.alignItems = "center";
  fourthPart.style.justifyContent = "space-between";

  const chainLength = blockchainInstance.chain.length - 1;

  // First Part
  const firstPartText = document.createElement("p");
  const showData = document.createElement("p");

  firstPartText.appendChild(document.createTextNode("DATA"));
  showData.appendChild(
    document.createTextNode(blockchainInstance.chain[chainLength].data)
  )

  firstPart.appendChild(firstPartText);
  firstPart.appendChild(showData);

  firstPartText.style.fontSize = "14px";
  firstPartText.style.padding = "10px 12px";
  firstPartText.style.margin = "0";
  firstPartText.style.borderRight = "1px solid #d9d9d9";

  showData.style.fontSize = "13px";
  showData.style.margin = "10px 12px";

  // Second Part
  const secondPartText = document.createElement("p");
  const showPreviousHash = document.createElement("p");

  secondPartText.appendChild(document.createTextNode("PREVIOUS HASH"));
  showPreviousHash.appendChild(
    document.createTextNode(blockchainInstance.chain[chainLength].previousHash)
  );

  secondPart.appendChild(secondPartText);
  secondPart.appendChild(showPreviousHash);

  secondPartText.style.fontSize = "13px";
  secondPartText.style.marginRight = "14px";

  showPreviousHash.style.fontSize = "12px";
  showPreviousHash.style.color = "#52c41a";
  showPreviousHash.style.backgroundColor = "#f6ffed";
  showPreviousHash.style.padding = "2px 4px";
  showPreviousHash.style.margin = "0";
  showPreviousHash.style.border = "1px solid";
  showPreviousHash.style.borderRadius = "4px";

  // Third Part
  const thirdPartText = document.createElement("p");
  const showHash = document.createElement("p");

  thirdPartText.appendChild(document.createTextNode("HASH"));
  showHash.appendChild(
    document.createTextNode(blockchainInstance.chain[chainLength].hash)
  )

  thirdPart.appendChild(thirdPartText);
  thirdPart.appendChild(showHash);

  thirdPartText.style.fontSize = "14px";
  thirdPartText.style.marginRight = "14px";

  showHash.style.fontSize = "13.75px";
  showHash.style.color = "#52c41a";
  showHash.style.backgroundColor = "#f6ffed";
  showHash.style.padding = "2px 4px";
  showHash.style.margin = "0";
  showHash.style.border = "1px solid";
  showHash.style.borderRadius = "4px";

  // Fourth Part
  const fourthPartTexts = document.createElement("div");
  const fourthPartText = document.createElement("p");
  const showTimestamp = document.createElement("p");
  const showNonce = document.createElement("p");

  if(chainLength === 0) {
    fourthPartText.appendChild(document.createTextNode("GENESIS BLOCK"));
    showNonce.style.margin = "0 0 0 64px";
  } else{
    fourthPartText.appendChild(document.createTextNode(`BLOCK #${chainLength}`));
    showNonce.style.margin = "0 0 0 9vw";
  }
  showTimestamp.appendChild(
    document.createTextNode(blockchainInstance.chain[chainLength].timestamp)
  )
  showNonce.appendChild(
    document.createTextNode(blockchainInstance.chain[chainLength].nonce)
  )

  fourthPartTexts.appendChild(fourthPartText);
  fourthPartTexts.appendChild(showTimestamp);
  fourthPart.appendChild(fourthPartTexts);
  fourthPart.appendChild(showNonce);

  fourthPartTexts.style.display = "flex";

  fourthPartText.style.margin = 0;
  fourthPartText.style.fontSize = "26px";

  showTimestamp.style.marginBottom = "2px";
  showTimestamp.style.marginLeft = "8px";
  showTimestamp.style.fontSize = "12px";

  showNonce.style.padding = "12px";
  showNonce.style.border = "1px solid #d9d9d9";
  showNonce.style.borderRadius = "8px";

  return {firstPart, secondPart, thirdPart, fourthPart};
}

export const addNewBlock = (blockchainContent, blockchainInstance, data, difficulty) => {
  const newBlock = createEmptyBlock();

  if(blockchainInstance.chain.length === 0) {
    blockchainInstance.createGenesisBlock(data, difficulty);
  } else {
    const date = new Date();
    const options = { 
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
    };
    blockchainInstance.addBlock(
      blockchainInstance.chain.length - 1, date.toLocaleDateString("pt-BR", options), data, difficulty
    );
  }

  const {
    firstPart, secondPart, thirdPart, fourthPart
  } = fillBlock(blockchainInstance);

  newBlock.appendChild(firstPart);
  newBlock.appendChild(secondPart);
  newBlock.appendChild(thirdPart);
  newBlock.appendChild(fourthPart);

  blockchainContent.appendChild(newBlock);
}

// DATA, PREVIOUS HASH, HASH, BLOCK NAME, TIMESTAMP, NONCE AND DIFFICULTY