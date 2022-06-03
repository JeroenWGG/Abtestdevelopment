let elements = document.getElementsByClassName("element");
for (element of elements) {
  if (element.innerText.includes("2")) {
    element.classList.add("hide");
  }
}
