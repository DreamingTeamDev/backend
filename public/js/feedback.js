const form = document.getElementById('feedback-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  // https://mail-server-54wd.onrender.com/api/feedback
  axios.post('localhost:3000/api/feedback', {
    name,
    email,
    message
  })
    .then((response) => {
      console.log(response.data);
      successMessage.style.display = 'block';
    })
    .catch((error) => {
      console.log(error);
      console.log('error');
      // errorMessage.style.display = 'block';
    });
});