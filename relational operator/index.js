//Relational operator-> >,>=,<,<=,==,===,!=,!==

var num1 = 5;
var num2 = 7;
num1 = parseInt(num1);
num2 = parseInt(num2);
document.write(num1 > num2); //f
document.write("<br>");
document.write(num1 >= num2); //f
document.write("<br>");
document.write(num1 < num2); //t
document.write("<br>");
document.write(num1 <= num2); //t
document.write("<br>");
document.write(num1 == num2); //f
document.write("<br>");
document.write(num1 === num2); //f
document.write("<br>");
document.write(num1 != num2); //t
document.write("<br>");
document.write(num1 !== num2); //t
document.write("<br>");

//Logical Operator-> &&, ||, !

document.write(num1 == num2 && num1 < num2);
document.write("<br>");

document.write(num1 == num2 || num1 < num2);
document.write("<br>");

document.write(num1 != 7);
document.write("<br>");
