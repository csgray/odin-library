# odin-library

A small project from the Odin Project's JavaScript course.

## Note

This originally used the legacy function model:

```javascript
function Book(title, author, pages = 0, read = false) {
    if (!new.target) {
        throw Error("Must use the new operator to call the function");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read);
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}
```

But was updated to use a class as part of the intermediate JavaScript course.
