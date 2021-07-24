//add book post request
let newAniForm = document.getElementById('newAniForm');
newAniForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  let title = document.getElementById('title').value;
  let creator = document.getElementById('creator').value;
  let genre = document.getElementById('genre').value;
  let year = document.getElementById('year').value;
  let text = document.getElementById('text').value;

  let reqBody = {
    title: title,
    creator: creator.split(', '),
    genre: genre,
    year: year,
    text: text,
  };
  fetch('https://api.sampleapis.com/cartoons/cartoons2D'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody),
  }
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert('Added ' + data.animation.title);
    })
    .catch((err) => console.log(err));
});