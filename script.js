// Creating a Book object
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    // const read = this.isRead ? 'read' : 'not yet read';
    return (
      this.title +
      ' by ' +
      this.author +
      ',' +
      this.pages +
      'pgs' +
      ',' +
      (this.isRead ? 'read' : 'not yet read')
    );
  };
}

const artOfGiving = new Book('The Art of Giving', 'John Mainas', 234, false);
const anotherBook = new Book('Another Book', 'Guess Author', 1000, true);

console.log(artOfGiving.info());

console.log(anotherBook.info());
