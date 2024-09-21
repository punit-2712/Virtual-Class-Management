// Product interface
interface Vehicle {
  drive(): void;
}

// Concrete Product classes
class Car implements Vehicle {
  drive(): void {
    console.log('Driving a car.');
  }
}

class Bike implements Vehicle {
  drive(): void {
    console.log('Riding a bike.');
  }
}

// Creator class
abstract class VehicleFactory {
  abstract createVehicle(): Vehicle;

  someOperation(): void {
    const vehicle = this.createVehicle();
    vehicle.drive();
  }
}

// Concrete Creator classes
class CarFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Car();
  }
}

class BikeFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Bike();
  }
}

// Client code
const carFactory = new CarFactory();
carFactory.someOperation();  // Driving a car.

const bikeFactory = new BikeFactory();
bikeFactory.someOperation();  // Riding a bike.
