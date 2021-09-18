// get the elements
const btn = document.querySelector('#btn');
const form = document.querySelector('.form');
const tableBody = document.querySelector('.table-list');

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

  const 

  console.log(title, author, isbn);
  this.reset();
}
