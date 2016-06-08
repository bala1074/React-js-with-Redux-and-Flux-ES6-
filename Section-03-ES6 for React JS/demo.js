// ES6
class PersonClass {

    // equivalent of the CustomType constructor
    constructor(name) {
        this.name = name;
    }

    // equivalent of CustomType.prototype.sayName
    sayName() {
        console.log(this.name);
    }

    // equivalent of CustomType.create
    static create(name) {
        return new PersonClass(name);
    }
}

let person = PersonClass.create("Trogdor");