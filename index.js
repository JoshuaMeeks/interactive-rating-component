const card = document.querySelector('.card');
const thankYouCard = document.querySelector('.thank-you-card');
const selectionContainer = document.querySelector('.selection-container');
const selectionCircles = document.querySelectorAll('.selection-circle');
const submitButton = document.querySelector('button');

let activeStatus = false;
let rating = '';

selectionCircles.forEach((circle) => {
  circle.addEventListener('click', (e) => {
    if (!activeStatus) {
      activeStatus = true;
      e.target.style.background = 'hsl(25, 97%, 53%)';
      e.target.style.color = 'hsl(0, 0%, 100%)'; 
    }
    if (activeStatus) {
      selectionCircles.forEach((circle) => {
        circle.style.background = 'hsl(213, 19%, 22%)';
        circle.style.color = 'hsl(217, 12%, 63%)';
        e.target.style.background = 'hsl(25, 97%, 53%)';
        e.target.style.color = 'hsl(0, 0%, 100%)';
      })
    }
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
  console.log('placeholder')
})