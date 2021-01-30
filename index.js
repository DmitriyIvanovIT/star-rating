const starRatingActive = document.querySelector('.star-rating__change'),
starRatingCount = document.querySelector('.star-rating__count');

console.log(starRatingCount);

console.log(starRatingCount / 5 * 100);

starRatingActive.style.width = `${starRatingCount.textContent / 5 * 100}%`; 