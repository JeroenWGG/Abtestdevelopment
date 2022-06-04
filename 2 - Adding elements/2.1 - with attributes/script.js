let elementType = "div";
let elementText = "Child 7";
let elementParent = document.getElementById("parent_1");
let elementId = "child_7";

function addElement(type, text, parent, id) {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(text);
  newDiv.appendChild(newContent);
  newDiv.setAttribute("id", id);
  parent.appendChild(newDiv);
}

addElement(elementType, elementText, elementParent, elementId);
