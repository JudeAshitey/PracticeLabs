// Create Two Functions -> addChild and redWedding
const stArks = document.querySelector(".starks");

function addChild() {
  const newDiv = document.createElement("div");

  newDiv.textContent = "Cool Beans";
  stArks.appendChild(newDiv);
  return newDiv;
}

function redWedding() {
  while (stArks.firstChild) {
    stArks.removeChild(stArks.lastChild);
  }
}
// Attach functions to buttons
const aDdC = document.getElementById("add-child");
const reD = document.getElementById("red-wedding");

aDdC.addEventListener("click", addChild);
reD.addEventListener("click", redWedding);
// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)

