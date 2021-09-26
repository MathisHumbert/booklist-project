// THIS IS MY WAY FOR THIS PROJECT

// get the elements
const form = document.querySelector('.form');
const tableBody = document.querySelector('.table-list');

// create or get the books and id
let books;
if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'));
} else {
  books = [];
}

// display the localStorageBooks
window.addEventListener('DOMContentLoaded', () => {
  tableBody.innerHTML = books
    .map((book) => {
      return `
      <tr data-id="${book[3]}">
    <td>${book[0]}</td>
  <td>${book[1]}</td>
  <td>${book[2]}</td>
  <td><button class="btn"><i class="fas fa-times"></i></button></td>
  </tr>
    `;
    })
    .join('');

  // deleteAction
  const deleteLocalBtn = tableBody.querySelectorAll('.btn');
  deleteLocalBtn.forEach((btn) => {
    btn.addEventListener('click', deletClickBtn);
  });
});

// display the form submit item
form.addEventListener('submit', handleForm);

function handleForm(e) {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // if all of the data is not here
  if (title === '' || author === '' || isbn === '') {
    this.reset();
    return;
  }

  let id = Math.floor(Math.random() * 1000);

  const table = document.createElement('tr');
  table.setAttribute('data-id', id);
  table.innerHTML = `
  <td>${title}</td>
  <td>${author}</td>
  <td>${isbn}</td>
  <td><button class="btn"><i class="fas fa-times"></i></button></td>
  `;
  tableBody.appendChild(table);

  // deleteAction
  const deleteBtn = tableBody.querySelectorAll('.btn');
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', deletClickBtn);
  });

  books.push([title, author, isbn, id]);
  localStorage.setItem('books', JSON.stringify(books));
  id++;
  this.reset();
}

// delete function
function deletClickBtn(e) {
  tableBody.removeChild(e.currentTarget.parentElement.parentElement);

  let actualId = e.currentTarget.parentElement.parentElement.dataset.id;
  books = books.filter((book) => {
    console.log(book[3]);
    return book[3] != actualId;
  });

  localStorage.setItem('books', JSON.stringify(books));
}
