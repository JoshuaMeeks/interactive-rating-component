const card = document.querySelector('.card');
const thankYouCard = document.querySelector('.thank-you-card');
const selectionContainer = document.querySelector('.selection-container');
const selectionCircles = document.querySelectorAll('.selection-circle');
const submitButton = document.querySelector('button');

selectionCircles.forEach((circle) => {
  circle.addEventListener('click', (e) => {
    e.target.style.background = 'hsl(25, 97%, 53%)'
    e.target.style.color = 'hsl(0, 0%, 100%)'
  })
})

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(() => {
  card.style.display = 'flex';
  thankYouCard.style.display = 'none';
  }, 3000)
  card.style.display = 'none';
  thankYouCard.style.display = 'flex';
})