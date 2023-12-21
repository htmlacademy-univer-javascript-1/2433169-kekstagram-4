import {closeForm} from './form.js';
import { isEscKey } from './utils.js';

const body = document.body;
const successCompletionTemplate = document.querySelector('#success').content.querySelector('section');
const errorMessageTemplate = body.querySelector('#error').content.querySelector('section');

const onBodyClick = (event) => {
  const clickElement = event.target;

  if(clickElement.classList.contains('success__inner') || clickElement.classList.contains('error__inner')){
    return;
  }
  closeMessage();
};


const onBodyKeyDown = (event) => {
  event.preventDefault();
  if(isEscKey(event)){
    closeMessage();
  }
};

function closeMessage () {
  body.removeEventListener('click', onBodyClick);
  document.removeEventListener('keydown', onBodyKeyDown);
  body.removeChild(body.lastChild);
}


const showMessage = (messageTemplate) => {
  const message = messageTemplate.cloneNode(1);
  message.style.zIndex = 100;

  document.addEventListener('keydown', onBodyKeyDown);
  body.addEventListener('click', onBodyClick);


  body.appendChild(message);
};

const onSuccess = () => {
  closeForm();
  showMessage(successCompletionTemplate);
};

const onFail = () => {
  showMessage(errorMessageTemplate);
};


export{onSuccess, onFail};
