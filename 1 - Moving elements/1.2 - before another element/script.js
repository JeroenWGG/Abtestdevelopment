let childElement = document.getElementById("child_6");
let parentElement = document.getElementById("child_6").parentNode;
let beforeSibling = document.getElementById("child_2");

parentElement.insertBefore(childElement, beforeSibling);
