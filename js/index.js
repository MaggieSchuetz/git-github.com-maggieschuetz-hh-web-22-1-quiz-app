/*import { answers } from './answers.js';
import { bookmarks } from './bookmarks.js';
import { create } from './create.js';

bookmarks();
answers();
create();*/

import Card from './Card.js';
import Forms from './Forms.js';
import Logout from './Logout.js';
import Compile from './Compile.js';

// NodeList [HTMLElement, HTMLElement]
const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach((cardElement) => {
  Card(cardElement);
});

const formElements = document.querySelectorAll('[data-js="form"]');

formElements.forEach((formElement) => {
  Forms(formElement);
});

const userLogout = document.querySelectorAll('[data-js="profile"]');

userLogout.forEach((profileLogout) => {
  Logout(profileLogout);
});

const switchTabs = document.querySelectorAll('[data-js="selectAll"]');

switchTabs.forEach((switchClick) => {
  Compile(switchClick);
});
