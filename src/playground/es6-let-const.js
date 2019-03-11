// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch

// Użyjemy live-server na folderze public, który utworzyliśmy czyli:
//     live-sever public

// Z "var" możesz nie tylko nadpisywać zmienne, ale róœnież je redefiniować, co może prowadzić do prowadzić do problemów
// Nadpisanie
var zmienna1 = "jeden";
    zmienna1 = "dwa";
console.log(zmienna1);

// Redefiniowanie
var zmienna2 = "trzy";
var zmienna2 = "cztery";
console.log(zmienna2);

// "let" możesz nadpisac, ale nie możesz redefiniować

// "const" nie możesz nadpisać ani redefiniować


// SCOPE
function getPateName() {
    var petName = 'Bila';
    return petName;
}

getPateName();
// Zwróci, że petName is not defined, bo ta zmienna żyje tylko w funkcji getPateName
// Tak samo będzie dla let i const
// console.log(petName);

// UWAGA! Możesz zrobić tak

function getPateName2() {
    const petName2 = 'Bambo';
    return petName2;
}
const petName2 = getPateName2();
// Tutaj zadziała, bo tworzysz nowego globalnego skope, w którym wywołuejsz naszą funkcję
console.log(petName2);

// UWAGA! let i const jest też block level scoping