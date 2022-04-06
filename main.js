"use strict";

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let container = document.createElement("li");
  let produce = document.getElementById("product");
  let quantity = document.getElementById("qty");
  container.innerHTML = quantity.value + " " + produce.value;
  form.appendChild(container);
  produce.value = "";
  quantity.value = "";
});
