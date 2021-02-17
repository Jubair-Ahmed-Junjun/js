function largestNumber(num1, num2, num3) {
  var num1 = Number(prompt("Enter first number : "));
  var num2 = Number(prompt("Enter second number : "));
  var num3 = Number(prompt("Enter third number : "));
  if (num1 > num2 && num1 > num3) {
    document.write("num1 is largest");
  } else if (num2 > num1 && num2 > num3) {
    document.write("num2 is largest");
  } else {
    document.write("num3 is largest");
  }
}
// var num1 = Number(prompt("Enter first number : "));
// var num2 = Number(prompt("Enter second number : "));
// var num3 = Number(prompt("Enter third number : "));
largestNumber();
