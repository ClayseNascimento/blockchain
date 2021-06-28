export const mainContent = () => {

  // Create main div
  const mainDiv = document.createElement("div");

  // Create Content div
  const blockchainContent = document.createElement("div");
  blockchainContent.setAttribute("id", "blockchain-content");

  // Create block to add new blocks to the blockchain
  const addNewBlockElement = document.createElement("div");
  addNewBlockElement.setAttribute("id", "new-block-element");

  // Create input to addNewBlockElement
  const addElementData = document.createElement("input");
  addElementData.setAttribute("placeholder", "NEW BLOCK DATA");
  addElementData.setAttribute("id", "add-new-block-input");
  addElementData.setAttribute("maxlength", "36");

  // Create button to addNewBlockElement
  const addElement = document.createElement("button");
  addElement.setAttribute("id", "add-new-block-button");

  // Main div Style 
  mainDiv.style.width = "100vw";

  mainDiv.style.display = "flex";
  mainDiv.style.alignItems = "center";
  mainDiv.style.justifyContent = "center";
  mainDiv.style.flexDirection = "column";

  mainDiv.style.fontFamily = "font-family: 'Roboto', sans-serif";

  //
  addElementData.style.width = "200px";
  addElementData.style.height = "32px";
  addElementData.style.padding = "0 12px";
  addElementData.style.marginBottom = "24px";

  addElementData.style.border = "1px solid #d9d9d9";
  addElementData.style.outline = "none";
  addElementData.style.borderRadius = "8px";
  addElementData.style.backgroundColor = "#F5F5F5";

  // addNewBlock Style
  addNewBlockElement.style.width = "22vw";
  addNewBlockElement.style.height = "26vh";
  addNewBlockElement.style.marginBottom = "64px";

  addNewBlockElement.style.display = "flex";
  addNewBlockElement.style.alignItems = "center";
  addNewBlockElement.style.justifyContent = "center";
  addNewBlockElement.style.flexDirection = "column";

  addNewBlockElement.style.backgroundColor = "#FFF";
  addNewBlockElement.style.borderRadius = "16px";
  addNewBlockElement.style.boxShadow = "0 5px 15px -2px rgba(10,16,34,.4)";

  addNewBlockElement.appendChild(addElementData);
  addNewBlockElement.appendChild(addElement);

  // Button Style
  addElement.style.width = "128px";
  addElement.style.height = "48px";

  addElement.style.borderRadius = "12px";
  addElement.style.border = "none";
  addElement.style.backgroundColor = "#0c1821"
  addElement.style.color = "#FFF"
  addElement.style.cursor = "pointer"

  addElement.appendChild(document.createTextNode("+ ADD"));

  const blockchainText = document.createElement("h1");
  blockchainText.appendChild(document.createTextNode("BLOCKCHAIN"));
  blockchainText.style.fontSize = "48px";
  blockchainText.style.fontWeight = 400;
  blockchainText.style.letterSpacing = "8px";
  blockchainText.style.marginBottom = "48px";
    
  mainDiv.appendChild(blockchainText);

  mainDiv.appendChild(blockchainContent);
  mainDiv.appendChild(addNewBlockElement);

  return { mainDiv, blockchainContent };
}