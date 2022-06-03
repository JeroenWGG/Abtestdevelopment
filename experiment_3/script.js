let element = document.getElementById("child_6");
let elementParent = document.getElementById("child_6").parentNode;
let beforeSibling = document.getElementById("child_2");
elementParent.insertBefore(element, beforeSibling);
