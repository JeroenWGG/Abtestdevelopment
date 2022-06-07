let childElements = document.getElementsByClassName("child");
for (childElement of childElements) {
  let childText = childElement.innerHTML;
  childText = childText.replace(/Boring/g, "Awesome");
  childElement.innerHTML = childText;
}
