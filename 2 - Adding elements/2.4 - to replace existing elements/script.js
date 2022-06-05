let elementType = "div";
let elementText = "Child 7";
let parentElement = document.getElementById("parent_1");
let oldElement = document.getElementById("child_5");
let elementId = "child_7";

function addAndReplaceElement(type, text, parent, id, oldElement) {
  let newElement = document.createElement(type);
  let newElementText = document.createTextNode(text);
  newElement.appendChild(newElementText);
  newElement.setAttribute("id", id);
  parent.replaceChild(newElement, oldElement);
}

addAndReplaceElement(elementType, elementText, parentElement, elementId);
