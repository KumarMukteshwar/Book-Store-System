function Book(title,author,genre,price){
    this.title = title
    this.author = author
    this.genre = genre
    this.price = price
}

function Author(name,birthyear,nationality){
    this.name = name
    this.birthyear = birthyear
    this.nationality = nationality
}
Book.prototype.getBookInfo = function (){
    console.log("Title: " + this.title);
    console.log("Author: " + this.author.name);
    console.log("Genre: " + this.genre);
    console.log("Price: $" + this.price);
}


let author1 = new Author("J.K. Rowling", 1965, "British");
let author2 = new Author("George Orwell", 1903, "British");

// Creating Book objects
let book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 20);
let book2 = new Book("1984", author2, "Dystopian", 15);

// Displaying book details
console.log("Bookstore Inventory:");
book1.getBookInfo();
book2.getBookInfo();