const myLibrary = [];

// Constructor function (Legacy)
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error('Must use the new operator to call the function');
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Set the function on the prototype and not on the constructor
// so that there is only one copy of the function.
Book.prototype.info = function () {
    if (read) {
        return `${this.title} by ${this.author}, ${this.pages} pages, read`
    } else {
        return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`
    }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// Display
allowedColors = [
    "maroon",
    "purple",
    "green",
    "navy",
    "teal",
    // "black",
    // "grey",
]

function getRandomColor() {
    return allowedColors[Math.floor(Math.random() * allowedColors.length)];
}

function displayBooks() {
    const library = document.getElementById('library');

    myLibrary.forEach((book) => {
        const newBook = document.createElement("div");
        newBook.classList.add("book");
        newBook.style.setProperty("background-color", getRandomColor());
        newBook.style.setProperty("color", "white");

        // Title
        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = book.title;
        newBook.appendChild(title);

        // Author
        const author = document.createElement("div");
        author.classList.add("author");
        author.textContent = book.author;
        newBook.appendChild(author);

        // Pages
        const pages = document.createElement("div");
        pages.classList.add("pages");
        pages.textContent = `${book.pages}p`;
        newBook.appendChild(pages);

        // Read
        const read = document.createElement("div");
        read.classList.add("read");
        if (book.read) {
            read.textContent = "read";
        } else {
            read.textContent = "not read";
        }
        newBook.appendChild(read);

        library.appendChild(newBook);
    });
}

// Execution



addBookToLibrary("Mere Christianity", "C.S. Lewis", "227", true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "384", true);
addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", "480", true);
addBookToLibrary("The Two Towers", "J.R.R. Tolkien", "416", true);
addBookToLibrary("The Return of the King", "J.R.R. Tolkien", "512", true);
addBookToLibrary("The Last Unicorn", "Peter S. Beagle", "320", true);
addBookToLibrary("The Way Home", "Peter S. Beagle", "224", false);

console.log(myLibrary)
displayBooks();
