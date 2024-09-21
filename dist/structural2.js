"use strict";
// Concrete component
class BasicCoffee {
    cost() {
        return 5;
    }
    description() {
        return 'Basic coffee';
    }
}
// Decorator abstract class
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    cost() {
        return this.coffee.cost();
    }
    description() {
        return this.coffee.description();
    }
}
// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 2;
    }
    description() {
        return this.coffee.description() + ', milk';
    }
}
class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 1;
    }
    description() {
        return this.coffee.description() + ', sugar';
    }
}
class WhipCreamDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 3;
    }
    description() {
        return this.coffee.description() + ', whip cream';
    }
}
// Client code
let coffee = new BasicCoffee();
console.log(`${coffee.description()} - $${coffee.cost()}`);
coffee = new MilkDecorator(coffee);
console.log(`${coffee.description()} - $${coffee.cost()}`);
coffee = new SugarDecorator(coffee);
console.log(`${coffee.description()} - $${coffee.cost()}`);
coffee = new WhipCreamDecorator(coffee);
console.log(`${coffee.description()} - $${coffee.cost()}`);
