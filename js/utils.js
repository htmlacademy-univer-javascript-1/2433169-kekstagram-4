const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createRandomIdFromRangeGenerator =  (min, max) => {
  const valuesLast = [];

  return function () {
    let valueActual = getRandomInteger(min, max);

    while (valuesLast.includes(valueActual)) {
      valueActual = getRandomInteger(min, max);
    }

    valuesLast.push(valueActual);

    return valueActual;
  };
};

const isEscKey = (event) => event.key === 'Escape';

const createImageUrl = (id, derictory, format) => derictory + id + format;

function debounce (callback, timeoutDelay = 500) {
  let idTimeout;
  return (...rest) => {
    clearTimeout(idTimeout);
    idTimeout = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const shuffle = (array) => array.sort(() => Math.random() - 0.5);


export {getRandomInteger, createRandomIdFromRangeGenerator, createImageUrl, isEscKey, debounce, shuffle};
