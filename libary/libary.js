console.log("Hello world!");

const myLibrary = [
    { title: "One man", author: "John", publicationYear: 2015, genre: "Sicfi", pages: 100, read: true },
    { title: "Book 2", author: "Ashik", publicationYear: 2025, genre: "Novel", pages: 110, read: false },
    { title: "Check not", author: "Mathew", publicationYear: 1915, genre: "Horror", pages: 100, read: true },
    { title: "Happy life", author: "Baskar", publicationYear: 2007, genre: "Thriler", pages: 100, read: false }
];

const bookDialogBtn = document.getElementById('bookDialogBtn');
const newBookDialog = document.getElementById('newBookDialog');
const confirmBtn = document.getElementById('confirmBtn');
var alert = document.querySelector('.alert');
var alertText = document.querySelector('#alertmsg');




const book = {
    title: "",
    author: "",
    publicationYear: "",
    genre: "",
    pages: 0,
    read: false,
}



function Book() {
    // the constructor...

}

function addBookToLibrary(newbook) {
    // do stuff here
    myLibrary.push(newbook);
}
function displayAllBooks(library) {
    const tbody = document.querySelector('#bookTable tbody');
    tbody.innerHTML = '';

    library.forEach((book, index) => {
        const row = document.createElement('tr');

        Object.values(book).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
            
        });
       
        // Add action buttons to each row
        const actionTd = document.createElement('td');
        const readBtn = document.createElement('button');
        readBtn.textContent = library[index].read?"UnRead":"Read";
        readBtn.onclick = () => ReadBook(index); // Call delete function

        actionTd.appendChild(readBtn);
        row.appendChild(actionTd);

        tbody.appendChild(row);
    });
}

// Call the function to display books
displayAllBooks(myLibrary);

function ReadBook(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayAllBooks(myLibrary);
}

bookDialogBtn.addEventListener('click', () => {
    newBookDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let publicationYear = document.getElementById('publishyear').value;
    let genreSelect = document.querySelector('#gener');
    let selectedGenreText = genreSelect.options[genreSelect.selectedIndex].text;
    let pages = parseInt(document.getElementById('pages').value);
    let selectedReadStatus = document.querySelector('input[name="hasRead"]:checked');
    let selectedHasRead = selectedReadStatus? selectedReadStatus.value :  showAlert('Fill all the fields.');
    
    //check if the values are not null
    if (title === "" || author === "" || publicationYear === "" || selectedGenreText === "" || pages === "" || selectedHasRead === ""){
        showAlert('Fill all the fields.');
        return;
    }

    //close the dialoag and send the book object

        book.title=title;
        book.author=author;
        book.publicationYear= publicationYear;
        book.genre= selectedGenreText;
        book.pages= pages;
        book.read=selectedHasRead === "read"? true : false;
   
    addBookToLibrary(book);
    newBookDialog.close();
    displayAllBooks(myLibrary);
  });


  function showAlert(msg){
    
    alert.style.display = 'block';
    alertText.innerHTML = msg;
  }

  function hideAlert(){
    alert.style.display = 'none';
    alertText.innerHTML = "";
  }


  // Close the alert when the user clicks outside of it