const allBooks = [];


const newBook = document.querySelector('.new-book');
const emptyLibrary = document.querySelector('.clear');
const dialog = document.querySelector('dialog');
const container = document.querySelector('.container');

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

let readChecker;





/*this.checkReadStatus = function() {
    if (this.read === true) {
        console.log('checked');
    } else {
        console.log('not checked');
    }
} */

Book.prototype.checkReadStatus = function() {
    
    readChecker = document.querySelectorAll('.read-checker');

    for (let i = 0; i < allBooks.length; i++) {
        if (allBooks[i].read === true) {
            readChecker[i].style.backgroundColor = '#c70606';
            readChecker[i].textContent = "Unread";
        } else {
            readChecker[i].style.backgroundColor = '#076e07';
            readChecker[i].textContent = "Read";
        }
    }
    
       /* if (this.read === true) {
            console.log('checked');
          
            readChecker.style.backgroundColor = 'red';
            readChecker.textContent = "Unread";
        } else {
            console.log('not checked');
            readChecker.style.backgroundColor = 'green';
            readChecker.textContent = "Read";
        }     */
   
 
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
    console.log('all books: ', allBooks);
    addBook();
   
    book.checkReadStatus();
    dialog.close();
    resetForm();
    console.log(allBooks);
    console.log( typeof numberOfPages.value);
} else {
    errorMessage.textContent = 'Please fill in the data properly!';
}
    
})

function addBook() {
   
    const libraryBook = document.createElement('div');
    libraryBook.classList.add('library-book');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-book');
    deleteButton.textContent = 'X';
    libraryBook.appendChild(deleteButton);

    const titleHeading = document.createElement('div');
    titleHeading.classList.add('title-heading');
    titleHeading.textContent = allBooks[allBooks.length - 1].title;
    libraryBook.appendChild(titleHeading);

    const authorParagraph = document.createElement('p');
    authorParagraph.textContent = 'By: ';
    const authorName = document.createElement('span');
    authorName.classList.add('author-name');
    authorName.textContent = allBooks[allBooks.length - 1].author;
    authorParagraph.appendChild(authorName);
    libraryBook.appendChild(authorParagraph);

    const pagesParagraph = document.createElement('p');
    pagesParagraph.textContent = 'Pages: ';
    const pageNumber = document.createElement('span');
    pageNumber.classList.add('page-number');
    pageNumber.textContent = allBooks[allBooks.length - 1].numberOfPages;
    pagesParagraph.appendChild(pageNumber);
    libraryBook.appendChild(pagesParagraph);

    const readDiv = document.createElement('div');
    readDiv.classList.add('read-checker');
    libraryBook.appendChild(readDiv);

    container.appendChild(libraryBook);


}

