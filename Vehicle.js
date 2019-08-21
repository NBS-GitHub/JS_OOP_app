// abstract class - cannot be instantiated
module.exports = class Vehicle {

    constructor() {                                                     // preventing instantiation
        if (this.constructor === Vehicle)
            throw new TypeError(`Class "Vehicle" is abstract. It cannot be instantiated directly.`)
    }

    // abstract method - must be implemented in a subclass
    start() {
        throw new Error(`Mathod "start()" is abstract. It has to be implemented in a subclass.`);
    }

    performSuperclassOnlyMethod() {
        console.log('I am the text from the Vehicle-only-method.');
    }

}