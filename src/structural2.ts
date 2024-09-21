// Component interface
interface Coffee {
  cost(): number;
  description(): string;
}

// Concrete component
class BasicCoffee implements Coffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return 'Basic coffee';
  }
}

// Decorator abstract class
class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}

// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2;
  }

  description(): string {
    return this.coffee.description() + ', milk';
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1;
  }

  description(): string {
    return this.coffee.description() + ', sugar';
  }
}

class WhipCreamDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 3;
  }

  description(): string {
    return this.coffee.description() + ', whip cream';
  }
}

// Client code
let coffee: Coffee = new BasicCoffee();
console.log(`${coffee.description()} - $${coffee.cost()}`);

coffee = new MilkDecorator(coffee);
console.log(`${coffee.description()} - $${coffee.cost()}`);

coffee = new SugarDecorator(coffee);
console.log(`${coffee.description()} - $${coffee.cost()}`);

coffee = new WhipCreamDecorator(coffee);
console.log(`${coffee.description()} - $${coffee.cost()}`);
