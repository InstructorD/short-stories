let animations = document.getElementById('animations');
let aniLinks = document.getElementById('aniLinks');
//get animations get request
fetch('https://api.sampleapis.com/cartoons/cartoons2D')
  .then((res) => {
    let data = res.json();
    return data;
  })
  .then((data) => {
    data.forEach((animation) => {
      let container = document.createElement('div');
      let title = document.createElement('h2');
      let creator = document.createElement('h3');
      let genre = document.createElement('h3');
      let year = document.createElement('h4');
      //let text = document.createElement('p');

      title.innerText = animation.title;
      title.id = animation.title.replace(/\W_/g, '');
      title.id = title.id.split(' ').join('');
      creator.innerText = animation.creator;
      genre.innerText = animation.genre;
      year.innerText = animation.year;
      //text.innerText = animation.text;

      //to let text area to appear, add text in []
      [title, creator, genre, year].forEach((element) =>
        container.appendChild(element)
      );

      let li = document.createElement('li');
      let link = document.createElement('a');
      link.setAttribute('href', '#' + title.id);
      link.innerText = animation.title;
      li.appendChild(link);
      aniLinks.appendChild(li);

      animations.appendChild(container);
    });
  });