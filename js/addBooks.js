//add book post request
let newBookForm = document.getElementById('newBook');
newBookForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  let title = document.getElementById('title').value;
  let authors = document.getElementById('author').value;
  let publisher = document.getElementById('publisher').value;
  let publishDate = document.getElementById('publishDate').value;
  let text = document.getElementById('text').value;

  let reqBody = {
    title: title,
    authors: authors.split(','),
    publisher: publisher,
    publishDate: publishDate,
    text: text,
  };
  fetch('https://lapcbooks.herokuapp.com/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert('Added ' + data.book.title);
    })
    .catch((err) => console.log(err));
});