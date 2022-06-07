let priceElements = document.getElementsByClassName("price");
for (priceElement of priceElements) {
  if (priceElement.innerText.includes("15")) {
    let priceText = priceElement.innerHTML;
    priceText = priceText.replace(/15/g, "10");
    priceElement.innerHTML = priceText;
  }
}
