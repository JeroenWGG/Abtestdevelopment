let childElement = document.getElementById("child_6");
let afterSibling = document.getElementById("child_2");

function insertAfter(referenceElement, newElement) {
  referenceElement.parentNode.insertBefore(
    newElement,
    referenceElement.nextSibling
  );
}

insertAfter(afterSibling, childElement);
