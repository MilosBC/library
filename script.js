let allBooks = [];


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

let allLibraryBooks; 

function setDataPositions(deleteButtons) {

    if (deleteButtons === null) {
        deleteButtons = Array.from(document.querySelectorAll('.delete-book'));
    }

deleteButtons.forEach((button, index) => {
    button.setAttribute('data-position', index);
})
}






function Book(author, title, numberOfPages, read) {
this.author = author;
this.title = title;
this.numberOfPages = numberOfPages;
this.read = read;

let readChecker;

Book.prototype.checkReadStatus = function() {
    
    readChecker = document.querySelectorAll('.read-checker');
    const readCheckerToArray = Array.from(readChecker);

    if (allBooks[allBooks.length - 1].read === true) {
        readCheckerToArray[readCheckerToArray.length - 1].style.backgroundColor = '#c70606';
            readCheckerToArray[readCheckerToArray.length - 1].textContent = "Unread";
            
            
        } else {
            readCheckerToArray[readCheckerToArray.length - 1].style.backgroundColor = '#076e07';
            readCheckerToArray[readCheckerToArray.length - 1].textContent = "Read";
            
        }

           // The switch logic

    readCheckerToArray[readCheckerToArray.length - 1].addEventListener('click', ()=> {
        if (readCheckerToArray[readCheckerToArray.length - 1].textContent === 'Unread') {
            readCheckerToArray[readCheckerToArray.length - 1].style.backgroundColor = '#076e07';
            readCheckerToArray[readCheckerToArray.length - 1].textContent = "Read";
          } else if(readCheckerToArray[readCheckerToArray.length - 1].textContent === 'Read') {
            readCheckerToArray[readCheckerToArray.length - 1].style.backgroundColor = '#c70606';
            readCheckerToArray[readCheckerToArray.length - 1].textContent = "Unread";
    
          }
    })
    }

    Book.prototype.deleteIndividualBook = function() {

        
       
        allLibraryBooks = document.querySelectorAll('.library-book');
        const allLibraryBooksToArray = Array.from(allLibraryBooks);

        let deleteButtons = Array.from(document.querySelectorAll('.delete-book'));
     

        //set data positions

        setDataPositions(deleteButtons);

        deleteButtons[deleteButtons.length - 1].addEventListener('click', (e)=> {

                let numberIndex = e.target.getAttribute('data-position');

                console.log(numberIndex);

                console.log('opravljeni dugmici: ', deleteButtons);

                
            
            allBooks.splice(numberIndex,1);
            

            const bookToBeRemoved = e.target.parentElement;
            bookToBeRemoved.remove();

            deleteButtons = null;

           setDataPositions(deleteButtons);
          

           

            
            })



          console.log('sve knjizice: ', allBooks);
            console.log('kontejnercic: ', container);

 

   

   

     
        



        
        





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
    if (errorMessage.textContent !== 'The book already exists!') {
    errorMessage.textContent = '';
    }
}





submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let book = new Book(author.value, title.value, numberOfPages.value, readStatus.checked);
    const containsTitle = allBooks.some((singleBook)=>singleBook.title.toLowerCase() === title.value.toLowerCase());
    const containsAuthor = allBooks.some((singleBook)=>singleBook.author.toLowerCase()=== author.value.toLowerCase());

    if (containsTitle && containsAuthor) {
        errorMessage.textContent = 'The book already exists!';
        resetForm();
    } else {

        if (author.value !== '' && title.value !== '' && numberOfPages.value !== '' && !numberOfPages.value.includes('-') && !numberOfPages.value.includes('.') && !numberOfPages.value.includes('e') && !numberOfPages.value.includes('E')) {

        if (errorMessage.textContent === 'The book already exists!') {
        errorMessage.textContent = '';
        }
   
        allBooks.push(book);

        //Add id

        for (let i = 0; i < allBooks.length; i++) {
        allBooks[i].id = i;
        }
        console.log('all books: ', allBooks);
        addBook();
        book.checkReadStatus();
        book.deleteIndividualBook();
        
        dialog.close();
        resetForm(); 
        console.log('container:', container);

    } else {
        errorMessage.textContent = 'Please fill in the data properly!';

    }
        }

    }
        
    )

function addBook() {
   
    const libraryBook = document.createElement('div');
    libraryBook.classList.add('library-book');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-book');
    deleteButton.textContent = 'X';
    //deleteButton.setAttribute(`data-position`, `${allBooks.length - 1}` );
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

emptyLibrary.addEventListener('click', ()=> {
    allLibraryBooks = document.querySelectorAll('.library-book');
    Array.from(allLibraryBooks).forEach(libraryBook => {
    container.removeChild(libraryBook);

    })

    allBooks = [];

 
})

            



