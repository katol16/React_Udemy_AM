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
import IndecisionApp from './IndecisionApp'

// const template = <p>This is JSX from webpack</p>;
// ReactDOM.render(template, document.getElementById('app'));


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

// PROPS
//     - An object
//     - Can be used when rendering
//     - Changes (from above) cause re-renders
//     - Comes from above
//     - Can't be changed by component itself
//
// STATE
//     - An object
//     - Can be used when rendering
//     - Changes cause re-renders
//     - Defined in component itself
//     - Can be changed by component itself
//

// stateless functional components
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };
// ReactDOM.render(<User name="Karol" age={26} />, document.getElementById('app'));

// Działania dostępne na localStorage
// localStorage.setItem("key","value");
// localStorage.getItem("key");
// localStorage.removeItem("key");

// Dodatkowo warto wiedzieć, że jak zrobisz tak:
// localStorage.setItem("age",26); - to ten number 26, zapisze się jako string! Generalnie localstorage działą tylko ze stringami