export default function Card(cardElement) {
  const bookmarkIcon = cardElement.querySelector('[data-js="bookmark-icon"]');
  const bookmarkButton = cardElement.querySelector('[data-js="js-bookmark"]');

  bookmarkButton.addEventListener('click', () => {
    bookmarkButton.classList.toggle('bookmark__marked');
  });
  /*bookmarkButton.addEventListener('click', () => {
    if (bookmarkButton.classList.contains('bookmark__marked')) {
      bookmarkButton.classList.remove('bookmark__marked');
      console.log(bookmarkButton.classList);
    } else {
      bookmarkButton.classList.add('bookmark__marked');
      console.log(bookmarkButton.classList);
    }
  });*/
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

  /*const bookmark = cardElement.querySelector('[data-js="js-bookmark"]');

  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark__marked');
    console.log('hello');
  });*/
}
