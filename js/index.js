/*import { answers } from './answers.js';
import { bookmarks } from './bookmarks.js';
import { create } from './create.js';

bookmarks();
answers();
create();*/

import Card from './Card.js';
import Forms from './Forms.js';

// NodeList [HTMLElement, HTMLElement]
const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach((cardElement) => {
  Card(cardElement);
});

const formElements = document.querySelectorAll('[data-js="form"]');

formElements.forEach((formElement) => {
  Forms(formElement);
});
