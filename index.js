const card = document.querySelector('.card');
const thankYouCard = document.querySelector('.thank-you-card');
const userRating = document.querySelector('.user-rating');
const selectionContainer = document.querySelector('.selection-container');
const selectionCircles = document.querySelectorAll('.selection-circle');
const submitButton = document.querySelector('button');

let activeStatus = false;
let rating = '';

selectionCircles.forEach((circle) => {
  circle.addEventListener('click', (e) => {
    e.target.id = 'active';
    rating = e.target.textContent;
  })
})

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(() => {
    card.style.display = 'flex';
    thankYouCard.style.display = 'none';
    selectionCircles.forEach((circle) => {
      circle.id = '';
      circle.style.background = 'hsl(213, 19%, 22%)';
      circle.style.color = 'hsl(217, 12%, 63%)';
    })
  }, 4000)
  card.style.display = 'none';
  thankYouCard.style.display = 'flex';
  userRating.textContent = rating;
})