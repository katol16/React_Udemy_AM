// ES6 arrow functions are always anonymous
// Jeśli chcesz stworzyć arrow function i później ją wywołąć, musisz ją przypisać to zmiennej lub stałej (var, let, const)

function square(x) {
    return x*x;
};

console.log(square(3));

// const squareArrow = (x) => {
//     return x*x;
// };

// Poniżej skrócony zapis
const squareArrow = (x) => x*x;

console.log(squareArrow(4));