const artOfGiving = new Book('The Art of Giving', 'John Mainas', 234, false);
const anotherBook = new Book('Another Book', 'Guess Author', 1000, true);

const myLibrary = [artOfGiving, anotherBook];

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

function addBookToLibrary(Book) {}

// A function that loops through the library and displays
function displayBook() {}

const bookList = document.querySelector('.book-shelf');

myLibrary.forEach((element) => {
  const bookItem = document.createElement('div');
  bookItem.classList = 'card';
  const cardBody = document.createElement('div');
  cardBody.classList = 'container';
  const cardHeader = document.createElement('h4');
  cardHeader.textContent = element.title;
  cardBody.appendChild(cardHeader);
  const cardContent = document.createElement('p');
  cardContent.textContent = element.author + ', Pages ' + element.pages;
  cardBody.appendChild(cardContent);
  bookItem.appendChild(cardBody);
  bookList.appendChild(bookItem);
});
