var len = document.querySelectorAll(".myButton").length;
for (var i = 0; i <= len; i++) {
  var myButtons = document
    .querySelectorAll(".myButton")
    [i].addEventListener("click", function () {
      var txt = this.innerHTML;
      document.querySelector("h1").innerHTML = txt + " is clicked.";
    });
}
