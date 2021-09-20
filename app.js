// get the elements
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

  const table = document.createElement('tr');
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

  this.reset();
}

// delete function
function deletClickBtn(e) {
  console.log(e.currentTarget);
  tableBody.removeChild(e.currentTarget.parentElement.parentElement);
}
