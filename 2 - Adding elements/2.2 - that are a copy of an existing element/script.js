let parent_1 = document.getElementById("parent_1");
let child1 = document.getElementById("child_1");
let clone = child1.cloneNode(true);
parent_1.appendChild(clone);
