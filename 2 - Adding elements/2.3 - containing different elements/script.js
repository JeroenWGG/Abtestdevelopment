let listItems = ["Item", "Item", "Item"];
let parentNode = document.getElementById("parent_1");

function addList(listItems, targetLocation) {
  let ulElement = document.createElement("UL");
  for (listItem of listItems) {
    let listElement = document.createElement("LI");
    let listText = document.createTextNode(listItem);
    listElement.appendChild(listText);
    ulElement.appendChild(listElement);
  }
  targetLocation.append(ulElement);
}

addList(listItems, parentNode);
