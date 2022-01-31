export default function Card(cardElement) {
  const bookmarkIcon = cardElement.querySelector('[data-js="bookmark-icon"]');
  const bookmarkButton = cardElement.querySelector('[data-js="js-bookmark"]');

  bookmarkButton.addEventListener('click', () => {
    bookmarkIcon.classList.toggle('bookmark__marked');
  });

  const answerButton = cardElement.querySelector('[data-js="answer-button"]');
  const answerText = cardElement.querySelector('[data-js="answer-text"]');

  answerButton.addEventListener('click', () => {
    if (answerButton.textContent.trim() === 'Show answer') {
      answerButton.textContent = 'Hide answer';
    } else {
      answerButton.textContent = 'Show answer';
    }
    answerText.classList.toggle('card__answer--hide');
  });
}
