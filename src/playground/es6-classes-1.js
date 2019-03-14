// Nazwa klasy z dużej litery

class Person {
    // Poniżej w name = 'Anonymous', masz sposób, żeby określić wartość defaultową
    constructor(name = 'Anonymous', age = 0) {
        // Poniżej drugi sposób na wartość defaultowa
        // this.name = name || 'Anonumous';
        this.name = name;
        this.age = age;
    }
    // UWAGA! Po constructor nie wstawiamy przecinka!
    getGreeting() {
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age}!`
    }
}

const me = new Person('Adnrew Mead', 26);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other);
console.log(other.getGreeting());


// Subclass - Student będzie rozszerzeniem klasy Person
class Student extends Person {
    constructor(name, age, major) {
        // żeby teraz nasza subklasa korzystała z constructora w Person, dajemy super()
        super(name, age);
        this.major = major;
    }
    // Metoda dostępna tylko na Student class
    studentMajor() {
        return `${this.major}!`
    }
    // Teraz dla celów naszej klasy Student, nadpiszemy troche metode getDescription
    getDescription() {
        let description = super.getDescription();

        return description += ` his major is ${this.major}`
    }
}

const student = new Student('Adnrew Mead', 26, 'science');
console.log(student);
console.log(student.getGreeting());
console.log(student.studentMajor());
console.log(student.getDescription());


// Challenge
class Traveler extends Person {
    constructor(name, location) {
        super(name);
        this.location = location;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        return greeting += ` pozdrawia z ${this.location}`
    }
}

const traveler = new Traveler('Adnrew Mead2', 'Narol');
console.log(traveler.getGreeting());