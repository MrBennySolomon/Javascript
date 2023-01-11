const book = {
  bookName: 'JS Coock-Book',
  authorName: 'Jeff Wellington',
  publishingYear: 2023,
  book(){
     return `The book ${this.bookName} was written by ${this.authorName} in the year ${this.publishingYear}`;
  }
};

const bookInfo = book => {
  return `The book ${book.bookName} was written by ${book.authorName} in the year ${book.publishingYear}`;
};

console.log(bookInfo(book));
console.log(book.book());