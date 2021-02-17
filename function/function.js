/*
creating a function
Calling a function
How to pass value in a function
returning a Value
*/

//create a function
function addition(num1, num2) {
  //var num = 5;
  var add = num1 + num2;
  document.write(add + "<br>");
}

function subtraction(num1, num2) {
  //var num = 5;
  var sub = num1 - num2;
  document.write(sub + "<br>");
}
function multiplication(num1, num2) {
  //var num = 5;
  var mul = num1 * num2;
  document.write(mul + "<br>");
}

function division(num1, num2) {
  //var num = 5;
  var div = num1 / num2;
  document.write(div + "<br>");
}
function reminder(num1, num2) {
  //var num = 5;
  var rem = num1 % num2;
  document.write(rem + "<br>");
}
addition(5, 10);
subtraction(5, 10);
multiplication(5, 10);
division(5, 10);
reminder(5, 10);
