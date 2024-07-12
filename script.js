const allBooks = [];


const newBook = document.querySelector('.new-book');
const emptyLibrary = document.querySelector('.clear');
const dialog = document.querySelector('dialog');

const author = document.querySelector('#author');
const title = document.querySelector('#title');
const numberOfPages = document.querySelector('#number');
const readStatus = document.querySelector('#read');
const submitButton = document.querySelector('.add-book');
const cancelButton = document.querySelector('.cancel');
const errorMessage = document.querySelector('.error-message');

function Book(author, title, numberOfPages, read) {
this.author = author;
this.title = title;
this.numberOfPages = numberOfPages;
this.read = read;



/*this.checkReadStatus = function() {
    if (this.read === true) {
        console.log('checked');
    } else {
        console.log('not checked');
    }
} */

Book.prototype.checkReadStatus = function() {
    if (this.read === true) {
        console.log('checked');
    } else {
        console.log('not checked');
    } 
}


}

newBook.addEventListener('click', () => {
dialog.showModal();
})

cancelButton.addEventListener('click', () => {

    dialog.close();
    resetForm();
})

function resetForm() {
    author.value = '';
    title.value = '';
    numberOfPages.value = '';
    readStatus.checked = false;
    errorMessage.textContent = '';
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let book = new Book(author.value, title.value, numberOfPages.value, readStatus.checked);

    if (author.value !== '' && title.value !== '' && numberOfPages.value !== '' && !numberOfPages.value.includes('-') && !numberOfPages.value.includes('.') && !numberOfPages.value.includes('e') && !numberOfPages.value.includes('E')) {
    allBooks.push(book);
    book.checkReadStatus();
    dialog.close();
    resetForm();
    console.log(allBooks);
    console.log( typeof numberOfPages.value);
} else {
    errorMessage.textContent = 'Please fill in the data properly!';
}
    
})

