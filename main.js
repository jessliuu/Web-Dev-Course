"use strict";

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass (ex 61)
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

//filter array exercise (ex 49)

function validUserNames(usernames) {
  let filteredUserNames = usernames.filter(function (x) {
    return x.length < 10;
  });
  return filteredUserNames;
}

console.log(validUserNames(["mark", "sdfhjhkjhkjhs", "carrie"]));
