import './data.js';
import {PHOTOS_COUNT, addmainObject } from './data.js';
import {createPictures} from './photoModule.js';
import { initPictures } from './big-picture.js';

createPictures(Array.from( {length: PHOTOS_COUNT}, addmainObject));
const pictures = Array.from( {length: PHOTOS_COUNT}, addmainObject);

createPictures(pictures);

initPictures(pictures);
