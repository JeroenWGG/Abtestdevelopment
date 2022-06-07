let priceElements = document.getElementsByClassName("price");
for (priceElement of priceElements) {
  let priceText = priceElement.innerHTML;
  priceText = priceText.replace(/\$ /g, "");
  priceElement.innerHTML = priceText;
}
