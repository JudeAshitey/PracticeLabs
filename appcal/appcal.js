//1. Create a new variable called 'total' and assign it the div with the id of 'total'
const total = document.getElementById("total");

//2. Create Six Functions (add, subtract, multiplyBy2, divideby5, multiplyBy5, divideBy5)
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const mult2Btn = document.querySelector("#mult-2");
const div2 = document.querySelector("#div-2");
const mult5 = document.querySelector("#mult-5");
const div5 = document.querySelector("#div-5");

// Example:
function add() {
  //update the value of the total variable textContent
  
  total.textContent = Number(total.textContent) + 1
  console.log(total.textContent)

}

function subtract() {
  //update the value of the total variable textContent
  total.textContent = Number(total.textContent) - 1
  console.log(total.textContent)

  // use an alert to alert the user
}

function multiplyBy2() {
  //update the value of the total variable textContent
  total.textContent = Number(total.textContent) * 2
  console.log(total.textContent)

  // use an alert to alert the user
}

function divideby5() {
  //update the value of the total variable textContent
  total.textContent = Number(total.textContent) / 5
  console.log(total.textContent)

  // use an alert to alert the user
}
function divideby2() {
  //update the value of the total variable textContent
  total.textContent = Number(total.textContent) / 2
  console.log(total.textContent)

  // use an alert to alert the user
}

function multiplyBy5() {
  //update the value of the total variable textContent
  total.textContent = Number(total.textContent) * 5
  console.log(total.textContent)

  // use an alert to alert the user
}

//3. Attach Functions to Buttons

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
mult2Btn.addEventListener('click', multiplyBy2)
div2.addEventListener('click', divideby2)
mult5.addEventListener('click', multiplyBy5)
div5.addEventListener('click', divideby5)
