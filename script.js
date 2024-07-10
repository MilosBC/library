const allBooks = [];

const newBook = document.querySelector('.new-book');
const emptyLibrary = document.querySelector('.clear');
const dialog = document.querySelector('dialog');

function Book(author, title, numberOfPages) {
this.author = author;
this.title = title;
this.numberOfPages = numberOfPages;
}

newBook.addEventListener('click', () => {
dialog.showModal();
})

