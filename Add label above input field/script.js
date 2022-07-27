let emailField = document.getElementById("emailField");

let elementType = "label";
let elementText = "*E-mail:";
let parentElement = document.getElementById("parent_1");

function addElement(type, text, parent) {
  let newElement = document.createElement(type);
  let newElementText = document.createTextNode(text);
  newElement.appendChild(newElementText);
  parent.prepend(newElement);
}

addElement(elementType, elementText, parentElement);
