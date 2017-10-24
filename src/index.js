
'use strict';

const changeEverything = () => {
  setTimeout(() => {
    document.querySelector('h1').textContent = 'I was changed!';
  }, 3000);
}

changeEverything();