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

import { BrowserRouter, Route } from "react-router-dom";

// yarn add normalize.css@7.0.0 - za pomocą tego usuniemy predefiniowane style przez przeglądarki
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
      This is from my dashboard component
  </div>
);

const AddDashboardPage = () => (
    <div>
        This is from my add expense component
    </div>
);

const EditPage = () => (
    <div>
        This is Edit
    </div>
);

const HelpPage = () => (
    <div>
        This is Help
    </div>
);

const routes = (
  <BrowserRouter>
      <div>
          {/*// exact oznacza, ze tylko dla '/' czyli strony głównej wczyta się jedna rzecz, bo generalnei route nie dba co jest dalej po '/' */}
          <Route exact={true} path='/' component={ExpenseDashboardPage} />
          <Route path='/create' component={AddDashboardPage} />
          <Route path='/edit' component={EditPage} />
          <Route path='/help' component={HelpPage} />
      </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

// Instalujemy react-router
// użyjemy dokłądnie react-router-dom, bo to ejst przystosowane do web-app, a react-router, do web i native (wieć wystraczy nam react-router-dom)
// Generalnie masz 3 rodzaje react-router ( 1: react-router - do wszystkiego, 2: react-router-dom - do web-app, 3: react-router-native - do native-app
// yarn add react-router-dom@4.2.2