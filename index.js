const span = document.querySelector("span");
const image = document.querySelector("img");
let inputs = ["cars", "chairs", "Decoration Materials"];
let imgInputs = ["img/cars.jpg", "img/chairs.jpg", "img/deco.jpg"];
let number = 0;

var typed = new Typed(".typing", {
  strings: inputs,
  typeSpeed: 300,
  loop: true,
  cursorChar: "🚶",
});

