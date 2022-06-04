let element = document.getElementById("child_6");
let afterSibling = document.getElementById("child_2");

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

insertAfter(afterSibling, element);
