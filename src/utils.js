console.log('utils is running');

const square = (x) => {
    return x*x;
};

const add = (a,b) => {
    return a+b;
}

const substract = (a,b) => a-b;

// Mamy dwa rodzaje eksportów
// default export -  możemy eksportować tylko jedną wartość

// named exports
// To poniżej to nie obiekt! Tylko w P{ dajemy nazwe zmiennej którą chcemy eksportować
export { square, add, substract as default };

// named exports można też tak
// export const add = (a,b) => {
//     return a+b;
// }

// export default mozna też tak:
// export default substract;
// lub
// export default (a,b) => a-b;