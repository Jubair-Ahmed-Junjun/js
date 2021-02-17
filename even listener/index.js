// mouse over

var myHeading = document.querySelector("#heading");
myHeading.addEventListener("click", function () {
  myHeading.classList.add("heading-style");
});

myHeading.addEventListener("mouseout", function () {
  myHeading.classList.remove("heading-style");
});

// using button

var alertBox = document.querySelector("#button");
alertBox.addEventListener("click", function () {
  alert("Hello Junjun");
});
