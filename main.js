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

//map array exercise

function capitalizeFirstLetter(str) {
  let capitalizedStr = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return capitalizedStr;
}

console.log(capitalizeFirstLetter("this is a test"));

function capitalizeEveryOtherWord(str) {
  let capitalizedStr = str
    .split(" ")
    .map((word, index) => {
      return index % 2 === 0 ? word.toUpperCase() : word;
    })
    .join(" ");
  return capitalizedStr;
}

console.log(capitalizeEveryOtherWord("this is a test"));

function replaceA(str) {
  let newStr = str
    .split("")
    .map((x) => {
      return x === "a" || x === "A" ? (x = "1") : (x = x);
    })
    .join("");
  return newStr;
}

console.log(replaceA("this is A javascript test"));
