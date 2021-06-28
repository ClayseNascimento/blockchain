import { Blockchain } from "../../modules/Blockchain";
import { addNewBlock } from "./addNewBlock";
import { headerContent } from "./headerContent";
import { mainContent } from "./mainContent"

const buildPage = () => {
  const blockchainInstance = new Blockchain();
  const header = headerContent();
  const { mainDiv, blockchainContent } = mainContent();

  // Body Initial Style
  document.body.style.margin = 0;
  document.body.style.backgroundColor = "#F5F5F5";

  document.body.appendChild(header);
  document.body.appendChild(mainDiv);

  const headerInput = document.getElementById("header-input"); 

  const button = document.getElementById("add-new-block-button");
  const inputElement = document.getElementById("add-new-block-input");
  button.addEventListener("click", () => {
    if(blockchainInstance.chain.length === 0) headerInput.disabled = true;

    addNewBlock(blockchainContent, blockchainInstance, inputElement.value, headerInput.value);
  });
}

buildPage();

