/*
How to create an Object
How to print the value of an Object
adding a constructor
*/

// var name = "Junjun";
// var age = 20;
// var cgpa = 3.5;
// var lang = ["Bangla", "English", "Hindi", "Arabic"];
// document.write(age);

function Book(author, pages, isbn, publication) {
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
  this.publication = publication;
  this.display = function () {
    document.write(this.author);
    document.write(this.pages);
    document.write(this.isbn);
    document.write(this.publication);
  };
}

var book1 = new Book("Junjun", 200, "A120", ["pangaree", "joykoli", "anopom"]);

var book2 = new Book("Rahim", 100, "B120", ["anondo", "royal", "nuton"]);

/*
document.write(book1.author);
document.write(book1.pages);
document.write(book1.isbn);
document.write(book1.publication);
*/
book1.display();
document.write("<br>");
book2.display();

//create object
/*
var book = {
  author: "Junjun",
  pages: 200,
  isbn: "A210",
  publication: ["pangaree", "joykoli", "anopom"],
};
document.write(book.isbn + "<br>");
document.write(book.pages);
*/
