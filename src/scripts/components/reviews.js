import Reviews from '../../assets/reviews.json';
import vars from '../vars';

let index = 0;
vars.reviewsCounter.textContent = Reviews.length + 2;

vars.reviewsButton.addEventListener('click', (e) => {
    if (Reviews.length > 0 && index < Reviews.length) {
        let review = Reviews[index];
        initReviews(review);
        index++;
    }
    if (Reviews.length == index) {
        vars.reviewsButton.style.display = 'none';
        vars.allReviewsButton.style.display = 'none';
    }
});

vars.allReviewsButton.addEventListener('click', (e) => {
    if (Reviews.length > 0 && index < Reviews.length) {
        for(let i = 0 ; i < Reviews.length; i++) {
            if (index <= i){
                let review = Reviews[i];
                initReviews(review);
                index++;
            }
        }
    }
    index = Reviews.length;
    vars.reviewsButton.style.display = 'none';
    vars.allReviewsButton.style.display = 'none';
});

function initReviews(review) {
    let name = review.name;
    let date = review.date;
    let ratingValue = review.ratingValue;
    let text = review.text;
    let div = document.createElement('div');
    div.className = "reviews__item";
    div.innerHTML = `<div class="reviews__item-title"><div class="reviews__item-name">${name}</div><div class="reviews__item-date">${date}  </div><div class="rating reviews__item__rating rating__set"><div class="rating__body"><div class="rating__active"></div><div class="rating__items"><input type="radio" class="rating__item" value="2.4" name="rating"><input type="radio" class="rating__item" value="4.8" name="rating"><input type="radio" class="rating__item" value="7.2" name="rating"><input type="radio" class="rating__item" value="9.6" name="rating"><input type="radio" class="rating__item" value="12" name="rating"></div></div><div class="rating__value">${ratingValue}</div></div></div><div class="reviews__item-main"><p>${text}</p></div>`;
    document.querySelector('.reviews__items').append(div);
}