// // import './utils';
// import substract, { square, add } from './utils';
// // jakbyś chciał improtwać tylko defaulta to możęsz zrobić tak:
// // import substract from './utils'
// // Ponwiaż substract jest defaultem moge zrobić też tak:
// // import anythingIWant from './utils'
// // Póżniej tylko robisz:
// // console.log(anythingIWant(2,4));
// // wiec z default, nazewnistwo nie ejst ważne
//
// console.log('app is running');
// console.log(square(4));
// console.log(add(2,4));
// console.log(substract(2,4));
//
//
// // Importing NPM Modules
// // install -> import -> use
//
// // Improtwacnie po stronie serwera (node.js) i użycie - Server-side usage
// // const validator = require('validator');
// // validator.isEmail('chuj@op.pl');
//
// // Importowanie za pomocą ES6 (by default)
// // tylko dla swoich modułów (utworzonych przez nas) potrzebujemy w ścieżce './'
// import validator from 'validator';
//
// console.log(validator.isEmail('test'));
//
// // Mogą być róznice w improtowaniu modułów, więc warto to zawsze sprawdzać w dokumentacji

import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'test');
ReactDOM.render(template, document.getElementById('app'));