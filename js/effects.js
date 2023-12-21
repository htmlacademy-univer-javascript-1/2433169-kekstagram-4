const EFFECT_LEVEL_DEFAULT = 100;

const Slider = {
  MIN: 10,
  MAX: 100,
  STEP: 10,
};

const elementSlider = document.querySelector('.effect-level__slider');
const uploadSlider = document.querySelector('.img-upload__effect-level');
const currentSlider = document.querySelector('.effect-level__value');
const radiosFilter = document.querySelectorAll('.effects__item');
const picture = document.querySelector('.img-upload__preview img');

let radioActual = document.querySelector('.effects__radio').value;

currentSlider.value = EFFECT_LEVEL_DEFAULT;

const Effects = {
  none: 0,
  chrome: {
    filter: 'grayscale',
    range: {min: 0, max: 1.0},
    step: 0.1,
    measurementUnit: ''},
  sepia: {
    filter: 'sepia',
    range: {min: 0, max: 1.0},
    step: 0.1,
    measurementUnit: ''},
  marvin: {
    filter: 'invert',
    range: {min: 0, max: 100},
    step: 1,
    measurementUnit: '%'},
  phobos: {
    filter: 'blur',
    range: {min: 0, max: 3.0},
    step: 0.1,
    measurementUnit: 'px'},
  heat: {
    filter: 'brightness',
    range: {min: 1, max: 3.0},
    step: 0.1,
    measurementUnit: ''}
};

const sliderConnector = () => {
  if (radioActual !== 'none') {
    const effect = Effects[radioActual];
    picture.style.filter = `${effect.filter}(${elementSlider.noUiSlider.get()}${effect.measurementUnit})`;
    currentSlider.value = `${parseFloat(elementSlider.noUiSlider.get())}${effect.measurementUnit}`;
  } else {
    picture.style.filter = '';
  }
};


const changeSlider = (newEffect) => {
  const effect = Effects[newEffect];
  if(effect !== 0){
    elementSlider.noUiSlider.updateOptions({
      range: {
        min: effect.range.min,
        max: effect.range.max,
      },
      start: effect.range.max,
      step: effect.step
    });
    uploadSlider.classList.remove('visually-hidden');
    sliderConnector();
  }
  else{
    uploadSlider.classList.add('visually-hidden');
    picture.style.filter = '';
  }
};

const onNoUiSliderChange = () => {
  sliderConnector();
};

const onRadioChange = (event) =>{
  radioActual = event.currentTarget.querySelector('.effects__radio').value;
  changeSlider(radioActual);
};

const resetFilters = () =>{
  radiosFilter.forEach((filter) => {
    filter.removeEventListener('change', onRadioChange);
  });

  picture.style.filter = 'none';
  elementSlider.noUiSlider.off('change', onNoUiSliderChange);
};

const initRadios = () =>{
  elementSlider.noUiSlider.on('change', onNoUiSliderChange);
  uploadSlider.classList.add('visually-hidden');
  radiosFilter.forEach((filter) => {
    filter.addEventListener('change', onRadioChange);
  });
  picture.style.filter = 'none';
};

noUiSlider.create(elementSlider, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX
  },
  start: Slider.MAX,
  step: Slider.STEP,
  connect: 'lower',
});
export {initRadios,  resetFilters};
