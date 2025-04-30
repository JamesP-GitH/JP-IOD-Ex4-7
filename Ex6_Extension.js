let books = [
  {
    title: "Moby Dick",
    description: "A whaling voyage and revenge.",
    author: "Herman Melville",
    pages: 635,
  },
  {
    title: "1984",
    description: "Dystopian future society.",
    author: "George Orwell",
    pages: 328,
  },  
  {
    title: "Twenty Thousand Leagues Under the Sea",
    description: "Submarine Adventure.",
    author: "Jules Verne",
    pages: 287,
  },
  {
    title: "The Great Gatsby",
    description: "The American dream examined.",
    author: "F. Scott Fitzgerald",
    pages: 180,
  },
  {
    title: "Pride and Prejudice",
    description: "A romantic tale of manners.",
    author: "Jane Austen",
    pages: 279,
  },
];

books[2].description = "Captain Nemo's submarine adventure";
console.log(books);