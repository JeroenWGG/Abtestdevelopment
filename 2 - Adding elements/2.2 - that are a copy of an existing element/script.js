let parentElement = document.getElementById("parent_1");
let childElement = document.getElementById("child_2");
let elementClone = childElement.cloneNode(true);

elementClone.innerText = "Child 7";
elementClone.setAttribute("id", "child_7");
parentElement.appendChild(elementClone);
