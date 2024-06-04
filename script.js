const artOfGiving = new Book('The Art of Giving', 'John Mainas', 234, false);
const anotherBook = new Book('Another Book', 'Guess Author', 1000, true);
const artOfLiving = new Book('The Art of Giving', 'Mainas', 234, false);
const anotherManuscript = new Book('Manuscript', 'Gift', 1000, true);

const myLibrary = [artOfGiving, anotherBook, artOfLiving, anotherManuscript];

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

  this.changeReadStatus = function (status) {
    return (this.isRead = status);
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
  const totalBooks = document.getElementById('total-books');
  totalBooks.textContent = 'Books(' + myLibrary.length + ')';

  const bookList = document.querySelector('.book-shelf');

  myLibrary.forEach((element, index) => {
    const bookItem = document.createElement('div');
    bookItem.classList = 'card';
    const cardBody = document.createElement('div');
    cardBody.classList = 'container';
    const cardHeader = document.createElement('h4');
    cardHeader.textContent = element.title;
    cardBody.appendChild(cardHeader);
    const cardContent = document.createElement('p');
    cardContent.textContent =
      element.author +
      ', Pages ' +
      element.pages +
      ', ' +
      (element.isRead === true ? 'Read' : 'Not Read');

    const cardFooter = document.createElement('div');
    cardFooter.classList = 'actions';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    editBtn.classList = 'material-symbols-outlined';
    editBtn.value = index;
    editBtn.addEventListener('click', () => {
      element.changeReadStatus(!element.isRead);
      refreshPage();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    deleteBtn.classList = 'material-symbols-outlined';
    deleteBtn.value = index;
    deleteBtn.addEventListener('click', () => {
      const text =
        'Are you sure you want to delete the book -' + element.title + '?';
      if (confirm(text)) {
        myLibrary.splice(index, 1);
      }
      refreshPage();
    });

    cardFooter.append(editBtn);
    cardFooter.append(deleteBtn);

    cardBody.appendChild(cardContent);
    cardBody.appendChild(cardFooter);
    bookItem.appendChild(cardBody);
    bookList.appendChild(bookItem);
  });
}

const addABookLink = document.getElementById('add-a-book-link');
addABookLink.addEventListener('click', () => {
  addBookToLibrary();
  refreshPage();
});
displayBook();

function refreshPage() {
  const bookList = document.querySelector('.book-shelf');
  bookList.textContent = '';
  displayBook();
}
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

confirmBtn.addEventListener('click', () => {
  const newModalBook = new Book(
    title.value,
    author.value,
    pages.value,
    isRead.value
  );
  myLibrary.push(newModalBook);
  title.value = '';
  author.value = '';
  pages.value = '';
  isRead.value = '';
  const bookList = document.querySelector('.book-shelf');
  bookList.textContent = '';
  displayBook();
});

// "Cancel" button closes the dialog without submitting because of [formmethod='dialog'],
// triggering a close event
bookDialog.addEventListener('close', (e) => {
  // outputBox.value =
  //   bookDialog === 'default'
  //     ? 'No return value'
  //     : `ReturnValue: ${displayBook.returnValue}.`; //Have to check for 'default' rather than empty string
});

// Prevent the 'confirm' button from the default behavior of submitting the form,
// and close the dialog with 'close()' method, which triggers the 'close' event
confirmBtn.addEventListener('click', (event) => {
  event.preventDefault();
  bookDialog.close(isRead.value);
});
