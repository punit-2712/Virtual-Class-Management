// Strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete strategy classes
class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal.`);
  }
}

class BitcoinPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Bitcoin.`);
  }
}

// Context class
class PaymentContext {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  pay(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

// Client code
const paymentContext = new PaymentContext(new CreditCardPayment());
paymentContext.pay(100);  // Paid 100 using Credit Card.

paymentContext.setStrategy(new PayPalPayment());
paymentContext.pay(200);  // Paid 200 using PayPal.

paymentContext.setStrategy(new BitcoinPayment());
paymentContext.pay(300);  // Paid 300 using Bitcoin.
