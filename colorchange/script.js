const COLORS_ARRAY = [
  "red",
  "yellow",
  "magenta",
  "cyan",
  "blue",
  "black",
  "gray",
  "teal",
  "green",
  "purple",
  "violet",
];
// let rAndColorNum = Math.floor(Math.random() * COLORS_ARRAY.length);
// let rAndColor = COLORS_ARRAY[rAndColorNum];
// ===== CHALLENGE =====
// 1. Create A Function (generate)
// Function should get a random color from the COLORS_ARRAY
// Create a li element
// Add the color name to the li text
//  / / Set the background color of the li to the random color
// Append the li to the ul

// 2. Create Function (reset)
// Should remove all li children from the ul.
// Should set background color to white.

const ul = document.querySelector('#color-list')

//Functions
function gEnerate (){
  
  const rAndColorNum = Math.floor(Math.random() * COLORS_ARRAY.length);
  const rAndColor = COLORS_ARRAY[rAndColorNum]; 
  
  const lIst = document.createElement('li')
  lIst.textContent = rAndColor
  ul.appendChild(lIst)
  lIst.style.backgroundColor = rAndColor
}

function reset (){
  while(ul.firstChild){
   ul.removeChild(ul.lastChild)
  }
}

//Buttons
const btn = document.querySelector('#generate-color')
const btn1 = document.querySelector('#reset')

//Buttons attached to functions
 btn.addEventListener('click',gEnerate)
 btn1.addEventListener('click',reset)