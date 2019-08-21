const Vehicle = require('./Vehicle');

// concrete class
class Car extends Vehicle {                                             // inheritance

    constructor(carMake = "unknown", carModel = "unknown", carProductionYear = "unknown", carColor = "unknown", carDistanceRecord = "unknown", carhasWinterTires = false) {
        super();
        Car.instancesCount++;

        this.make = carMake;                                            // public properties
        this.model = carModel;
        this.color = carColor;
        this.accidentsCount = 0;
        const productionYear = carProductionYear;                       // 'private properties'
        const distanceRecord = carDistanceRecord;
        let hasWinterTires = carhasWinterTires;

        this.getProductionYear = () => productionYear;                  // closure mechanism used to acces the 'private properties'
        this.getDistanceRecord = () => distanceRecord;
        this.hasWinterTires = () => hasWinterTires;
        this.changeTires = () => {
            console.log("Changing tires...");
            hasWinterTires = !hasWinterTires
        };

        console.log("Instance created.");
    }

    start() {                                                           // overriding
        const message = this.prepareMessage(this.make, this.model);
        console.log(`The car ${message}is starting...`);
    }

    getMake() {                                                         // getters
        return this.make;
    }

    getModel() {
        return this.model;
    }

    getColor() {
        return this.color;
    }

    setColor(newColor) {                                                // setter
        console.log("Changing color...");
        this.color = newColor;
    }

    sustainAccident() {
        this.accidentsCount++;
        const message = this.prepareMessage(this.make, this.model);
        const oneOrMany = this.accidentsCount > 1 ? "s" : "";
        console.log(`The car ${message}has had an accident. This car had ${this.accidentsCount} accident${oneOrMany} in total.`);
    }

    prepareMessage(make, model) {                                       // utility method
        make = this.make == "unknown" ? "" : this.make;
        model = this.model == "unknown" ? "" : this.model;
        const spaceMiddle = (this.make == "unknown" || this.model == "unknown") ? "" : " ";
        const spaceEnd = (this.make == "unknown" && this.model == "unknown") ? "" : " ";
        return `${make}${spaceMiddle}${model}${spaceEnd}`;
    }

    static getInstancesCount() {                                        // static method
        return this.instancesCount;
    }

}

Car.instancesCount = 0;                                                 // static property


module.exports = {
    Car,
    C: Car.instancesCount
};