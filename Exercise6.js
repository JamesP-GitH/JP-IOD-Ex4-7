let book = {
    "title": "Twenty Thousand Leagues Under the Sea",
    "description": "Submarine Adventure",
    "author": "Jules Verne",
    "pages": "287"
}

console.log("Title:", book.title);
console.log("Description:", book.description);
console.log("Author:", book.author);
console.log("Pages:", book.pages);

console.log(book);

book.description = "Captain Nemo's submarine adventure";

console.log("New Description:", book.description);