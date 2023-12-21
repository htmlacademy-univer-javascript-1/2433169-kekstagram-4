import {showBigPicture} from './bigPicture.js';

const containerPicture = document.querySelector('.pictures');
const fragmentsPicture = document.createDocumentFragment();
const templatePictures = document.querySelector('#picture')
  .content
  .querySelector('a');


const removePictures = () => {
  document.querySelectorAll('.picture').forEach((photo) => photo.remove());
};

const createPicture = (picture) => {
  const currentPicture = templatePictures.cloneNode(true);

  currentPicture.querySelector('img').src = picture.url;
  currentPicture.querySelector('img').alt = picture.description;
  currentPicture.querySelector('.picture__comments').textContent = picture.comments.length;
  currentPicture.querySelector('.picture__likes').textContent = picture.likes;


  const onPictureClick = (event) => {
    event.preventDefault();
    showBigPicture(picture);
  };
  currentPicture.dataset.id = picture.id;
  currentPicture.addEventListener('click', onPictureClick);
  fragmentsPicture.append(currentPicture);
};

const createPictures = (pictures) => {
  pictures.forEach((picture) => {
    createPicture(picture);
  });

  containerPicture.append(fragmentsPicture);
};

export {createPictures, removePictures};
