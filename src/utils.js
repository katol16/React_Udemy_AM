console.log('utils is running');

const square = (x) => {
    return x*x;
};

const add = (a,b) => {
    return a+b;
}

// Mamy dwa rodzaje eksportów
// default export

// named exports
// To poniżej to nie obiekt! Tylko w P{ dajemy nazwe zmiennej którą chcemy eksportować
export { square, add };