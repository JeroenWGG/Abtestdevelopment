var prices = document.getElementsByClassName("price");
for (node of prices) {
  var price = node.innerHTML;
  var price = price.replace(/\$ /g, "");
  node.innerHTML = price;
}
