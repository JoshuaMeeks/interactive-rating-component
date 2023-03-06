const card = document.querySelector('.card');
const thankYouCard = document.querySelector('.thank-you-card');
const selectionCircle = document.querySelector('.selection-circle');
const submitButton = document.querySelector('button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  card.style.display = 'none';
  thankYouCard.style.display = 'flex';
})