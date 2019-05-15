// jshint esversion:6
const _ = require("lodash");

var array = [1,2,3,4,5,6,7,8];
console.log("answer", _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

setGradient();

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function randomGradient() {
	let firstColor = randomColor();
	let secondColor = randomColor();

	body.style.background = "linear-gradient(to right, " + firstColor + ", " + secondColor + ")";

	css.textContent = body.style.background + ";";
}

button.addEventListener("click", randomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

const hello = () => alert("Hello World");