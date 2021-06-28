export const headerContent = () => {

  const header = document.createElement("header");
  const headerTitle = document.createElement("p");
  const headerInput = document.createElement("input");
  headerInput.setAttribute("id", "header-input");
  headerInput.setAttribute("type", "number");
  headerInput.setAttribute("min", "1");
  headerInput.setAttribute("max", "10");
  headerInput.setAttribute("onKeyDown", "return false");

  header.style.width = "100vw";
  header.style.height = "32vh";

  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "center";
  
  headerInput.style.width = "18vw";
  headerInput.style.height = "32px";
  headerInput.style.padding = "0 12px";

  headerInput.style.marginLeft = "16px";
  headerInput.style.border = "none";
  headerInput.style.outline = "none";
  headerInput.style.boxShadow = "0 5px 15px -2px rgba(10,16,34,.4)";
  headerInput.style.borderRadius = "8px";

  headerTitle.appendChild(document.createTextNode("Dificuldade:"));
  header.appendChild(headerTitle);
  header.appendChild(headerInput);

  return header;
  
}