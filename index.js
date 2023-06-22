const readMoreBtn = document.querySelector('.read-more-btn');
const cardReadMore = document.querySelector('.card-read-more');
const cardHolder = document.querySelector('.card-holder');


readMoreBtn.addEventListener('click', () => {
  cardReadMore.classList.toggle('card-read-more-open')
  
  if (readMoreBtn.innerHTML === 'Read Less..') {
    readMoreBtn.innerHTML = 'Read More..';
  } else {
    readMoreBtn.innerHTML = 'Read Less..';
  }
  
  });







