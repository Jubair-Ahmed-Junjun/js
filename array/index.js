var arrayElement = new Array(4);
arrayElement[0] = "Bangladesh";
arrayElement[1] = "India";
arrayElement[2] = "Pakistan";
arrayElement[3] = "Nepal";
document.write(arrayElement[3] + "<br>");
document.write(arrayElement.length + "<br>");
for (var i = 0; i <= arrayElement.length; i++) {
  document.write(arrayElement[i] + "<br>");
}
arrayElement.push("Chin");
document.write(arrayElement.length + "<br>");
for (var i = 0; i <= arrayElement.length; i++) {
  document.write(arrayElement[i] + "<br>");
}
arrayElement.pop(0);
document.write(
  "After pop a value array size will be : " + arrayElement.length + "<br>"
);
var names = ["sohail", "forkan", "nabil", "rafat"];
var arrayConcat = arrayElement.concat(names);
document.write(
  "After Concat Array will be : " +
    arrayConcat +
    "<br>" +
    "After Concat Array size will be : " +
    arrayConcat.length
);
