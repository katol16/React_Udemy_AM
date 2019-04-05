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
// yarn add normalize.css@7.0.0 - za pomocą tego usuniemy predefiniowane style przez przeglądarki
import 'normalize.css/normalize.css'
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

// Dodajemy react-modal
// yarn add react-modal@2.2.2


//////////////////////////////
// Poniżej materiał edukacyjny 1

// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {/*{props.content}*/}
//             {props.children}
//             <p>footer</p>
//         </div>
//     );
// };
//
// // Jeden sposób do przekazania dynamicznie jakiejś części podstrony, w tym wypadku content za pomocą props
// // ReactDOM.render(<Layout content={props.content} />, document.getElementById('app'));
// // Kolejny sposób za pomocą props.children
// ReactDOM.render((
//     <Layout>
//         <p>Drugi sposób</p>
//     </Layout>
//         ), document.getElementById('app'));
//
// // const template = <p>This is JSX from webpack</p>;
// // ReactDOM.render(template, document.getElementById('app'));


//////////////////////////////
// Poniżej materiał edukacyjny 2

class OldSyntax {
    constructor() {
        this.name = "Mike";
        // this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi! My name is ${this.name}`
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

// Jeśli zrobimy tak jak poniżej, to przez to, ze zapiszemy w zmiennej getGreeting naszą metode, złamiemy "binding"
const getGreeting = oldSyntax.getGreeting;
// To poniżej wyjebie błąd
// Żeby to poniżej zadziałało musimy dać w constructor oldSyntax this.getGreeting = this.getGreeting.bind(this);
// console.log(getGreeting());
// a to poniżej zadziała
console.log(oldSyntax.getGreeting());

// Poniżej przedstawimy nowy syntax, dostepny po instalacji i załączeniu pluginu   "plugins": ["transform-class-properties"] w .babelrc
// Poniiższy przykład pozwala pominąć constructor() i całe to bindowanie funkcji w constructorze
class NewSyntax{
    // tutaj wstawiamy już key:value pairs. Nie uzywasz żadnego var, elt, const - tego bedziemy uzwyac w kursie
    name = 'Jan';
    // Tutaj this, będzie wskazywało na "parent object"
    getGreeting = () => {
        return `Hi! My name is ${this.name}`
    }
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
// W newSyntaz, nie zjebiemy bind, to poniżej zadziała
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());

// ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

/////////////////////////////////
// Koniec materiału edukacyjnego


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