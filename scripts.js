// Selecting necessary elements from the DOM
let body = document.querySelector("body");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let h3 = document.querySelector("h3");

// Logging initial values of color1 and color2 to console
console.log(color1.value, color2.value);

// Initial function call to set the gradient background
setGradient();

// Function to set the gradient background based on color inputs
function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

// Event listener for color1 input changes
color1.addEventListener("input", function () {
  setGradient();  // Update gradient background
  color1.value;   // Not clear why this line is here, doesn't affect the functionality
  h3.innerHTML = body.style.background;  // Update h3 with the new background value
});

// Event listener for color2 input changes
color2.addEventListener("input", function () {
  setGradient();  // Update gradient background
  color1.value;   // Similar to the above, unclear purpose
  h3.innerHTML = body.style.background;  // Update h3 with the new background value
});

// Event listener for the "Random" button click
let random = document.getElementById("random");
random.addEventListener("click", function () {
  // Generate random colors and set the gradient background
  let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  body.style.background = `linear-gradient(to right, #${randomColor1}, #${randomColor2})`;
  
  // Set the input values to the randomly generated colors
  color1.value = `#${randomColor1}`;
  color2.value = `#${randomColor2}`;
  
  // Update h3 with the new background value
  h3.innerHTML = body.style.background;
});
