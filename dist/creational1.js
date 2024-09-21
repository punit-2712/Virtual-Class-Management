"use strict";
// Concrete Product classes
class Car {
    drive() {
        console.log('Driving a car.');
    }
}
class Bike {
    drive() {
        console.log('Riding a bike.');
    }
}
// Creator class
class VehicleFactory {
    someOperation() {
        const vehicle = this.createVehicle();
        vehicle.drive();
    }
}
// Concrete Creator classes
class CarFactory extends VehicleFactory {
    createVehicle() {
        return new Car();
    }
}
class BikeFactory extends VehicleFactory {
    createVehicle() {
        return new Bike();
    }
}
// Client code
const carFactory = new CarFactory();
carFactory.someOperation(); // Driving a car.
const bikeFactory = new BikeFactory();
bikeFactory.someOperation(); // Riding a bike.
