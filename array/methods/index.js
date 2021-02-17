//shift(),unshift(),splice(pos,noe,elem1,elm2,..),sort(),reverse()

var num = [20, 15, 30, 5, 7, 10, 2];
document.write("First Array : " + num + "<br>");

var arrayElements = new Array();
arrayElements[0] = 20;
arrayElements[1] = 25;
arrayElements[2] = 30;
arrayElements[3] = 1;
arrayElements[4] = 10;
arrayElements[5] = 3;
document.write("Second Array : " + arrayElements);
var concatArrays = num.concat(arrayElements);
document.write(
  "<br>" + "After Concat Array will be : " + concatArrays + "<br>"
);

arrayElements.push(11);
document.write("After Push a value in Array : " + arrayElements + "<br>");
arrayElements.pop(11);
document.write("After pop a value from Array : " + arrayElements + "<br>");

arrayElements.sort(function (a, b) {
  return a - b;
});
document.write("Sorted Array : " + arrayElements + "<br>");
arrayElements.reverse();
document.write("Reverse Array Elements : " + arrayElements + "<br>");

arrayElements.shift(30);
document.write("After Shift :" + arrayElements + "<br>");

arrayElements.unshift(30);
document.write("After unshift : " + arrayElements + "<br>");
arrayElements.splice(2, 0, 100, 200);
document.write("After splice : " + arrayElements + "<br>");

var sliceArray = arrayElements.slice(3, 5);
document.write("After slice array : " + sliceArray + "<br>");
