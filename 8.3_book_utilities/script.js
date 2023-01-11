const book1 = {
  name: 'JS Coock-Book',
  author: 'Jeff Wellington',
  year: 2023,
};

const book2 = {
  name: 'CSS Coock-Book',
  author: 'Jeremy Cohen',
  year: 2022,
};

let bookUtils = {

  setLanguage(book, language) {

    this.language = language;
  },

  setTranslation(book, language, translator) {
    this.translation = {
      translator: translator,
      language: language
    };
  },

  setPublisher(book, name, location) {
    this.publisher = {
      location: location
    };
  }

  isSamePublisher(book1, book2) {
    return ((book1.name === book2.name) && (book1.location === book2.location));
  }
};

bookUtils.getFirstPublished = (book1, book2) => {
  return book1.year <= book2.year ? book1 : book2;
};

bookUtils.setNewEdition = (book, year) => {
  book.latestEdition = year;
};
bookUtils.setLanguage(book1, 'Spenish');

console.log(bookUtils.getFirstPublished(book1, book2));
console.log(bookUtils);
console.log(bookUtils.setNewEdition(book1, 1900));
console.log(book1);
console.log(book2);