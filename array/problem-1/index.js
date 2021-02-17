var num = new Array();
for (var i = 0; i <= 5; i++) {
  num[i] = parseInt(prompt("Enter value : "));
}
document.write("My Array Elements : " + num);
var sum = 0;
for (var i = 0; i <= 5; i++) {
  sum = sum + num[i];
}
document.write("<br>" + "Addition of Array Elements : " + sum);
