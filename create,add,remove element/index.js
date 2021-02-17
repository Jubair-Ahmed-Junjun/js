var heading1 = document.createElement("h1");
var text1 = document.createTextNode("This is heading1");
heading1.appendChild(text1);

var heading2 = document.createElement("h1");
var text2 = document.createTextNode("This is heading2");
heading2.appendChild(text2);

var list = document.createElement("p");
var textList = document.createTextNode("This is heading2");
list.appendChild(textList);

var myDiv = document.getElementById("my_div");
myDiv.appendChild(heading1);

var myDiv = document.getElementById("my_div");
myDiv.appendChild(heading2);

var myDiv = document.getElementById("my_div");
myDiv.appendChild(list);

//remove

var myPara = document.createElement("p");
var paraText = document.createTextNode("This is paragraph");
myPara.appendChild(paraText);

var myDiv2 = document.getElementById("my_div2");
myDiv2.appendChild(myPara);
