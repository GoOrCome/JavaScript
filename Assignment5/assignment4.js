/* 4. Filtering and Capitalizing: Books Published After 2010 with Author Names. Write a program that takes a list of books, including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized. */

const books = [
    {
        title: "Indian Polity",
        author: "M. Laxmikanth",
        year: 2020,
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        year: 1997,
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J. K. Rowling",
        year: 2000,
    },
    {
        title: "Demon Slayer: Kimetsu No Yaiba",
        author: "Koyoharu Gotouge",
        year: 2016,
    },
    
];

const filteredBooks = books.filter((book) => {
    return book.year >= 2010;
})

const result = filteredBooks.map((book) => {
    return {
        ...book,
        author: book.author.toUpperCase(),
    };
});

console.log(result);
