import {debounce, shuffle} from './utils.js';
import {pictures} from './main.js';
import {createPictures, removePictures} from './pictures.js';

const PICTURES_MAX_RANDOM = 10;

const filtersForm = document.querySelector('.img-filters__form');
let buttonActive = document.querySelector('.img-filters__button--active');

const Filters = {
  'filter-default': () => pictures.slice(),
  'filter-random': () => shuffle(pictures.slice()).slice(0, PICTURES_MAX_RANDOM),
  'filter-discussed': () => pictures.slice().sort((first, second) => second.comments.length - first.comments.length ),
};

const applyFilters = (id) =>{
  removePictures();
  createPictures(Filters[id]());
};


const toogleButtons = (event) => {
  buttonActive.classList.remove('img-filters__button--active');
  buttonActive = event.target;
  buttonActive.classList.add('img-filters__button--active');
};

const onFilterFormClick = debounce((event) => {
  event.preventDefault();
  if(event.target.type === 'button'){
    applyFilters(event.target.id);
    toogleButtons(event);
  }
});

const initFilters = () => {
  filtersForm.addEventListener('click', onFilterFormClick);
};

export{initFilters};
