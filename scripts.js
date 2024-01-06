let body = document.querySelector("body");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let h3 = document.querySelector("h3");
console.log(color1.value, color2.value);
setGradient();

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener("input", function () {
  setGradient();
  color1.value;
  h3.innerHTML = body.style.background;
});

color2.addEventListener("input", function () {
  setGradient();
  color1.value;
  h3.innerHTML = body.style.background;
});

let random = document.getElementById("random");
random.addEventListener("click", function () {
  let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  body.style.background = `linear-gradient(to right, #${randomColor1}, #${randomColor2})`;
  color1.value = `#${randomColor1}`;
  color2.value = `#${randomColor2}`;
  h3.innerHTML = body.style.background;
});
