import { isEscKey } from './utils.js';
import {pristine} from './hashtag-pristine.js';
import {initRadios, resetFilters } from './effects.js';
import { uploadData } from './api.js';
import { onSuccess, onFail } from './form-submit.js';

const TYPE_FILE = ['gif', 'jpg', 'jpeg', 'png'];

const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');

const closeButton = document.querySelector('#upload-cancel');

const uploadFile = document.querySelector('#upload-file');
const previewImg = document.querySelector('.img-upload__preview img');
const effects = document.querySelectorAll('.effects__preview');
const mainPicture = document.querySelector('.img-upload__preview img');

const buttonPlus = document.querySelector('.scale__control--bigger');
const buttonMinus = document.querySelector('.scale__control--smaller');
const controlScale = document.querySelector('.scale__control--value');


const Zoom = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
};


const onFormUploadSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  uploadData(onSuccess, onFail, 'POST', formData);
};


const openForm = () => {
  closeButton.addEventListener('click', onCloseFormClick);
  document.addEventListener('keydown', onCloseFormEscDown);

  uploadFile.addEventListener('change', onFileUploadChange);
  controlScale.value = '100%';

  uploadForm.addEventListener('submit', onFormUploadSubmit);
};

const changeZoom = (factor = 1) => {
  let size = parseInt(controlScale.value, 10) + (Zoom.STEP * factor);
  if(size < Zoom.MIN){
    size = Zoom.MIN;
    return;
  }
  if(size > Zoom.MAX){
    size = Zoom.MAX;
    return;
  }

  controlScale.value = `${size}%`;
  previewImg.style.transform = `scale(${size / 100})`;
};

const onMinusButtonClick = () => {
  changeZoom(-1);
};

const onPlusButtonClick = () => {
  changeZoom(1);
};

const initButtons = () => {
  buttonMinus.addEventListener('click', onMinusButtonClick);
  buttonPlus.addEventListener('click', onPlusButtonClick);
};

const removeEvents = () => {
  closeButton.removeEventListener('click', onCloseFormClick);
  document.removeEventListener('keydown', onCloseFormEscDown);
  uploadForm.removeEventListener('submit', onFormUploadSubmit);

  buttonMinus.removeEventListener('click', onMinusButtonClick);
  buttonPlus.removeEventListener('click', onPlusButtonClick);

};
const closeForm =  () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  removeEvents();

  uploadForm.reset();
  pristine.reset();

  controlScale.value = '100%';
  previewImg.style.transform = 'scale(100%)';

  resetFilters();
};

function onCloseFormClick (event) {
  event.preventDefault();
  closeForm();
}

function onCloseFormEscDown (event) {

  if(isEscKey(event) &&
  !event.target.classList.contains('text__hashtags') &&
  !event.target.classList.contains('text__description') &&
  !body.querySelector('.error'))
  {
    event.preventDefault();
    closeForm();
  }
}

const changeImages = () => {
  const file = uploadFile.files[0];
  const nameFile = file.name.toLowerCase();

  if(TYPE_FILE.some((it) => nameFile.endsWith(it))){
    mainPicture.src = URL.createObjectURL(file);

    effects.forEach((effect) => {
      effect.style.backgroundImage = `url('${mainPicture.src}')`;
    });
  }
};


function onFileUploadChange () {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  openForm();
  changeImages();
  initButtons();
  initRadios();
}

export {openForm, closeForm};
