// arguments object - no longer bound with arrow functions

// normalna funkcja
const add = function (a,b) {
    // wyświetli się normlanie
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

// normalna funkcja
const arrowAdd = (a,b) => {
    // będzie błąd jeśli zechcesz wyświetlić "arguments"
    // console.log(arguments);
    return a + b;
};

console.log(arrowAdd(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Karol',
    cities: ['Narol', 'Kraków', 'Legionowo'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        // const that = this;

        // this.cities.forEach(function (city) {
        //     // to poniżej się nie wyświetli i wyrzuci błąd. this.name jest dostępne w metodzie printPlacesLived (powyżej - console.log), ale nie jest dostępne w tej wewnętrznej anomiowej funckji w forEach
        //     console.log(this.name + ' has lived in ' + city);
        //
        //     // ten problem można też rozwiązać w sposób z "that"
        //     // console.log(that.name + ' has lived in ' + city);
        // });

        // Najlepiej ejdnak nasz problem rozwiązać za pomocą arrow function
        this.cities.forEach( (city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }

    // są oczywiście miejsca gdzie NIE chcesz używać arrow function
    // np:
    // printPlacesLived: () => {
    //     this.cities.forEach( (city) => {
    //         console.log(this.name + ' has lived in ' + city);
    //     });
    // }
    // tutaj nie chcesz użyć arrow function, bo "this" nie bedzie wskazywal na obiekt, tylko na rodzica wiec na window i w metodzie wyjebie, że this.user jest undefined

    // Jest jeszcze opcja, zeby utworzyć metodę za pomocą nowego ES6 syntax - wszystko będzie działać - TEGO BĘDZIEMY UŻYWAĆ
    // printPlacesLived() {
    //     this.cities.forEach( (city) => {
    //         console.log(this.name + ' has lived in ' + city);
    //     });
    // }
};

user.printPlacesLived();