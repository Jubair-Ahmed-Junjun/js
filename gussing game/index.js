var numOfWon = 0;
var numOfLost = 0;
for (var i = 0; i < 5; i++) {
  var guessNumber = parseInt(prompt("Enter a guess number : "));
  var randomNumber = Math.floor(Math.random() * 5) + 1;
  if (guessNumber == randomNumber) {
    document.write("You have won.");
    numOfWon++;
  } else {
    document.write("You have lost. Random number was :" + randomNumber);
    numOfLost++;
  }
}
document.write("Total Number of won : " + numOfWon + "<br>");
document.write("Total Number of lost : " + numOfLost + "<br>");
