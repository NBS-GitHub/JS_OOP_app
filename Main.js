const Car = require('./Car').Car;


console.log("Instances count: " + Car.getInstancesCount());

const car1 = new Car("Toyota", "Corolla", 2019, "black", 21000, true);
const car2 = new Car();

console.log("Instances count: " + Car.getInstancesCount());

console.log('');
car1.performSuperclassOnlyMethod();

console.log('');
car1.start();

console.log('');
console.log(`Make: ${car1.getMake()}`);
console.log(`Model: ${car1.getModel()}`);
console.log(`Color: ${car1.getColor()}`);
car1.setColor("silver");
console.log('Color: ' + car1.getColor());

console.log('');
console.log("Production year: "+ car1.getProductionYear());
console.log("Distance record: " + car1.getDistanceRecord());

console.log('');
console.log("Has winter tires: " + car1.hasWinterTires());
car1.changeTires();
console.log("Has winter tires: " + car1.hasWinterTires());

console.log('');
console.log("Accidents count: " + car1.accidentsCount);
car1.sustainAccident();
car1.sustainAccident();
console.log("Accidents count: " + car1.accidentsCount);
console.log('');
car2.sustainAccident();