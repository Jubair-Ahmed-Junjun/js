for (var i = 0; i <= 5; i++) {
  var myButton = document
    .querySelectorAll(".myButton")
    [i].addEventListener("click", function () {
      var txt = this.innerHTML;
      console.log(txt);
      switch (txt) {
        case "a":
          var audio = new Audio("sounds/1.mp3");
          audio.play();
          break;
        case "b":
          var audio = new Audio("sounds/2.mp3");
          audio.play();
          break;
        case "c":
          var audio = new Audio("sounds/3.mp3");
          audio.play();
          break;
      }
    });
}
