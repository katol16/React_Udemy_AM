'use strict';

// Kurs React Udemy "The Complete React Web Developer Course (with Redux)"
//
// Sekcja 1
//
// Sekcja 2
// Lekcja nr 5 Installing Node.js and Yarn
// Instalacja Yarna
// npm install -g yarn
//
// Sekcja 3
// Lekcja nr 6 Section intro: Hello React
//
// Zainstalujemy live-server za pomocą yarn
// yarn global add live-server
//
// Lekcja nr 7 Setting up a Web Server
//
// Użyjemy live-server na folderze public, który utworzyliśmy czyli:
//     live-sever public
// Po tym uruchomi się nasz plik HTML
//
// Lekcja nr 8 Hello React

// Lekcja nr 9 Setting up Babel
// Instalujemy moduły za pomocą Yarna (pamiętaj, że to można też NPMem zrobić)
// yarn global add babel-cli@6.24.1

// Pamiętaj, że trzeba też wykonać inicjalizacja yarna, czyli (podobnie jak npm):
// yarn init

// Teraz instalujemy dwa moduły
// yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

// Użyjemy tego by odpalić nasz kompiler czyli Babel, mamy tam ścieżke wyjsćiową i wyjsćiową. My będziemy zmieniać app.js w src, w public sie skompiluje rpzez Babela
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log("App is running!");

// JSX - JavaScript XML. Jest to rozszerzenie (extension) Javascriptu, tak samo jak LESS dla CSS

// JSX expression
// Niestety to poniżej nie zadziała, bo musi być przekompilwoane przez Babel.js, wtedy będzie przeądarka wiedziec o co chodzi. Babel to compiler.
// var template = <p>This is JSX from app.js!</p>;
// Dlatego teraz użyjemy skomipilowanego rpzez babel kodu (ze strony babeljs.io)
// var template = React.createElement("p", null, "This is JSX from app.js! is it change?");

// Jak już mamy babela to zadziała to:

var app = {
    title: 'Indecision App',
    subtitle: 'Choose your task',
    options: ['option 1', 'option 2']
    // Pamiętaj, że musi to być oplecione w jeden element
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Your options' : 'no options'
    )
);

var user = "Karol";
var userObj = {
    name: 'Karol V',
    age: 27,
    location: 'Kraków'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var challengeTemplate = React.createElement(
    'div',
    null,
    'Ze zmienej',
    React.createElement(
        'h3',
        null,
        user
    ),
    'Z obiektu',
    React.createElement(
        'h1',
        null,
        userObj.name ? userObj.name : 'Unknown'
    ),
    userObj.age && userObj.age > 18 && React.createElement(
        'p',
        null,
        ' Age: ',
        userObj.age
    ),
    getLocation(userObj.location)
);

// element z HTML'a
var appRoot = document.getElementById("app");

// Teraz wyświetlimy naszego template'a
ReactDOM.render(template, appRoot);
