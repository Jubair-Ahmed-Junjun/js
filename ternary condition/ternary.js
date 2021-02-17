/*
var num = Number(prompt("Enter a Number :"));
var result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
document.write("The Number is " + ":" + num + " (" + result + ")");
*/

// Find Largest number

var firstNum = Number(prompt("Enter firstNum Number :"));
var secondNum = Number(prompt("Enter secondNum Number :"));
var thirdNum = Number(prompt("Enter thirdNum Number :"));
var result =
  firstNum > secondNum && firstNum > thirdNum
    ? "First one is Largest"
    : secondNum > firstNum && secondNum > thirdNum
    ? "Second Value is Largest"
    : "Third Value is Largest";
document.write(result);
