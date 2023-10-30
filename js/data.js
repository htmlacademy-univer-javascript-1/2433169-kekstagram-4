import {getRandomInteger} from './util.js';

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTODESCRIPTIONS = [
  'Закат на пляже',
  'Городская ночь',
  'Цветущие вишни',
  'Заснеженные горы',
  'Детская радость',
  'Пикник в парке',
  'Океанские волны'
];

const LIKES = {
  minimum: 15,
  maximum: 200
};

const COUNTOBJECT = 25;
const COMMENTSSMAX = 30;

const commentsObject = () => ({
  id: Math.random(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  authorName: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const addmainObject = () => ({
  id: getRandomInteger(1, COUNTOBJECT),
  url: `photos/${getRandomInteger(1, COUNTOBJECT)}.jpg`,
  description: PHOTODESCRIPTIONS[getRandomInteger(0, PHOTODESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES.minimum, LIKES.maximum),
  comments: Array.from(getRandomInteger(0, COMMENTSSMAX), commentsObject()),
});


const getmainObject = () => Array.from({ length: COUNTOBJECT }, addmainObject);

export {getmainObject};
