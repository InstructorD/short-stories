const loginForm = document.getElementById('login');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  let reqBody = {
    email: email,
    password: password,
  };
  fetch('https://lapcbooks.herokuapp.com/users/login', {
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
      alert('Logged In ' + data.email);
      document.cookie = `token=${data.token}`;
    })
    .catch((err) => console.log(err));
});