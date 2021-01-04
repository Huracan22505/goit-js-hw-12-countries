import { notice } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';

defaults.sticker = false;
defaults.closer = false;
defaults.delay = 3000;

function errorMsg() {
  notice({
    text: 'Too many matches found. Please enter a more speific query!',
  });
}

export default { errorMsg };
