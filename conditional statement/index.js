// positive or negative

/*
var num = parseInt(prompt("Enter a Number : "));
if (num > 0) {
  document.write("Positive");
} else {
  document.write("Negative");
}
*/

// Even or Not

/*var num = parseInt(prompt("Enter a Number : "));
if (num % 2 == 0) {
  document.write("Even");
} else {
  document.write("Odd");
}
*/

// Leap Year or not

/*var year = parseInt(prompt("Enter a Year : "));
if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
  document.write("Leap Year");
} else {
  document.write("Not Leap year");
}
*/

// Find the Largest value from three numbers

/*
var firstNumber = parseInt(prompt("Enter first Number"));
var secondNumber = parseInt(prompt("Enter second Number"));
var thirdNumber = parseInt(prompt("Enter third Number"));
if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  document.write("First Number is largest.");
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  document.write("Second Number is largest .");
} else {
  document.write("Third Number is largest.");
}
*/

// Letter grade

/*
var mark = parseInt(prompt("Enter a mark"));
if (mark > 100 || mark < 0) {
  document.write("Invalid mark");
} else if (mark >= 80 && mark <= 100) {
  document.write("Congratulations.Your GPA : A+");
} else if (mark >= 70 && mark <= 79) {
  document.write("Congratulations.Your GPA :  A");
} else if (mark >= 60 && mark <= 69) {
  document.write("Congratulations.Your GPA :  A-");
} else if (mark >= 50 && mark <= 59) {
  document.write("Congratulations.Your GPA :  B");
} else if (mark >= 40 && mark <= 49) {
  document.write("Congratulations.Your GPA :  C");
} else {
  document.write("Failed..!Try again.");
}
*/

// Vowel or Consonant

var letter = prompt("Enter a Letter :");
letter = letter.toLowerCase();
if (
  letter == "a" ||
  letter == "e" ||
  letter == "i" ||
  letter == "o" ||
  letter == "u"
) {
  document.write("Vowel");
} else {
  document.write("Consonant");
}
