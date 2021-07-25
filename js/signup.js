const signupForm = document.getElementById('signup');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  let reqBody = {
    name: name,
    email: email,
    password: password,
  };
  fetch('http://localhost:3000/users/signup', {
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
      alert('Thank you for signing up. ' + data.email);
    })
    .catch((err) => console.log(err));
});