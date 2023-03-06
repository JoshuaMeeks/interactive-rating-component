const card = document.querySelector('.card');
const thankYouCard = document.querySelector('.thank-you-card');
const selectionContainer = document.querySelector('.selection-container');
const selectionCircles = document.querySelectorAll('.selection-circle');
const submitButton = document.querySelector('button');

console.log(selectionCircles)

selectionCircles.forEach((circle) => {
  circle.addEventListener('mouseover', () => {
    circle.style.backgroundColor = 'hsl(217, 12%, 63%)'
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