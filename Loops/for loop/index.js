//Natural Number Print from 1 to 100
/*
for (var i = 0; i <= 100; i++) {
  document.write("<br>", i);
}
*/

//Add from 0 to 100
/*
var sum = 0;
for (var i = 0; i <= 100; i++) {
  var sum = sum + i;
}
document.write("The total sum : " + sum);
*/

//Add all even Numbers from 0-100

/*
var sum = 0;
for (var i = 0; i <= 100; i += 2) {
  var sum = sum + i;
}
document.write("The total sum : " + sum);
*/

//All even numbers print taking input value from user to 100

/*var num1 = prompt("Enter initial value : ");
num1 = parseInt(num1);
var num2 = prompt("Enter ending value : ");
num2 = parseInt(num2);
for (var i = num1; i <= num2; i += 2) {
  if (i % 2 == 0) {
    document.write(i);
  }
}
*/

//All even numbers print taking input value from user to 100

/*
var sum = 0;
var num1 = prompt("Enter initial value : ");
num1 = parseInt(num1);
var num2 = prompt("Enter ending value : ");
num2 = parseInt(num2);
for (var i = num1; i <= num2; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}
document.write(
  "The total sum of even number from geting value of user range :" + sum
);
*/

var sum = 0;
var num1 = prompt("Enter initial value : ");
num1 = parseInt(num1);
var num2 = prompt("Enter ending value : ");
num2 = parseInt(num2);
for (var i = num1; i <= num2; i++) {
  if (i % 2 != 0) {
    sum = sum + i;
  }
}
document.write(
  "The total sum of odd number from geting value of user range :" + sum
);
