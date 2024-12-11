# odin-library

A small project from the Odin Project's JavaScript course.

## Note

We could rewrite the Book object using classes:

```javascript
// Class Constructor (after ES6)
class Book {
    // Private fields
    #title;
    #author;
    #pages;
    #read;

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        this.read = !this.read;
    }
}
```

But this project deliberately uses the old syntax as the course covers classes later.
