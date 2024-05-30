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

function addBookToLibrary() {
  const bookTitle = prompt('Book Title');
  const bookAuthor = prompt(bookTitle + ' author :');
  const bookPages = prompt('No. of pages ');
  const isBookRead = prompt('Have you read the book?(Y/N)');
  const bookReadStatus = isBookRead === 'Y' ? true : false;
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookReadStatus);
  myLibrary.push(newBook);
}

// A function that loops through the library and displays
function displayBook() {
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
}

const addABookLink = document.getElementById('add-a-book-link');
addABookLink.addEventListener('click', () => {
  addBookToLibrary();
  const bookList = document.querySelector('.book-shelf');
  bookList.textContent = '';
  displayBook();
});
displayBook();

// Modal
const showButton = document.getElementById('showDialog');
const bookDialog = document.getElementById('addBookDialog');
const outputBox = document.querySelector('output');
const title = bookDialog.querySelector('#title');
const author = bookDialog.querySelector('#author');
const pages = bookDialog.querySelector('#pages');
const isRead = bookDialog.querySelector('select');
const confirmBtn = bookDialog.querySelector('#confirmBtn');

// open the <dialog> modally
showButton.addEventListener('click', () => {
  bookDialog.showModal();
});

// get value of 'is-read'
isRead.addEventListener('change', (e) => {
  confirmBtn.value = isRead.value;
});

// "Cancel" button closes the dialog without submitting because of [formmethod='dialog'],
// triggering a close event
bookDialog.addEventListener('close', (e) => {
  outputBox.value =
    bookDialog === 'default'
      ? 'No return value'
      : `ReturnValue: ${displayBook.returnValue}.`; //Have to check for 'default' rather than empty string
});

// Prevent the 'confirm' button from the default behavior of submitting the form,
// and close the dialog with 'close()' method, which triggers the 'close' event
confirmBtn.addEventListener('click', (event) => {
  event.preventDefault();
  bookDialog.close(isRead.value);
});
