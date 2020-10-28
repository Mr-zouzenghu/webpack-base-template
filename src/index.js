/* eslint-disable import/no-self-import */
import './index.scss';

import addElem from './js/addElem';

document.body.appendChild(addElem('Hello Webpack'));

const imgFile = require('./index.jpg');

const img = new Image();
img.src = imgFile;
document.body.appendChild(img);
