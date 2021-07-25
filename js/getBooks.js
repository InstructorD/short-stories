let stories = document.getElementById('stories');
let storyLinks = document.getElementById('storyLinks');
//get books get request
fetch('https://lapcbooks.herokuapp.com/books')
  .then((res) => {
    let data = res.json();
    return data;
  })
  .then((data) => {
    data.forEach((story) => {
      let container = document.createElement('div');
      let title = document.createElement('h2');
      let author = document.createElement('h3');
      let publisher = document.createElement('h4');
      let publishDate = document.createElement('h4');
      let text = document.createElement('p');

      title.innerText = story.title;
      title.id = story.title.replace(/\W_/g, '');
      title.id = title.id.split(' ').join('');
      author.innerText = story.author;
      publisher.innerText = story.publisher;
      publishDate.innerText = story.publishDate;
      text.innerText = story.text;

      [title, author, publisher, publishDate, text].forEach((element) =>
        container.appendChild(element)
      );

      let li = document.createElement('li');
      let link = document.createElement('a');
      link.setAttribute('href', '#' + title.id);
      link.innerText = story.title;
      li.appendChild(link);
      storyLinks.appendChild(li);

      stories.appendChild(container);
    });
  });