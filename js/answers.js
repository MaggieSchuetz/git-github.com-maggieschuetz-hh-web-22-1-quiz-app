export function answers() {
  const answerButton = document.querySelector('[data-js="answer-button"]');
  const answerButtonShow = document.querySelector(
    '[data-js="answer-button-show"]'
  );
  const answerButtonHide = document.querySelector(
    '[data-js="answer-button-hide"]'
  );
  const answerText = document.querySelector('[data-js="answer-text"]');

  answerButton.addEventListener('click', () => {
    answerButtonHide.classList.toggle('card__answer--hide');
    answerButtonShow.classList.toggle('card__answer--hide');
    answerText.classList.toggle('card__answer--hide');
  });
}
