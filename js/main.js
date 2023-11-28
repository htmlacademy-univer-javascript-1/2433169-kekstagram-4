import './data.js';
import {PHOTOS_COUNT, addmainObject } from './data.js';
import {createPictures} from './photoModule.js';

createPictures(Array.from( {length: PHOTOS_COUNT}, addmainObject));
