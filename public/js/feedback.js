const form = document.getElementById('feedback-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  axios.post('https://m-ojdg.onrender.com/api/feedback', {
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
    });
}); 