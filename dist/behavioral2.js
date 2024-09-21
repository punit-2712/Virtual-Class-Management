"use strict";
// Concrete strategy classes
class CreditCardPayment {
    pay(amount) {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}
class PayPalPayment {
    pay(amount) {
        console.log(`Paid ${amount} using PayPal.`);
    }
}
class BitcoinPayment {
    pay(amount) {
        console.log(`Paid ${amount} using Bitcoin.`);
    }
}
// Context class
class PaymentContext {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    setStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    pay(amount) {
        this.paymentStrategy.pay(amount);
    }
}
// Client code
const paymentContext = new PaymentContext(new CreditCardPayment());
paymentContext.pay(100); // Paid 100 using Credit Card.
paymentContext.setStrategy(new PayPalPayment());
paymentContext.pay(200); // Paid 200 using PayPal.
paymentContext.setStrategy(new BitcoinPayment());
paymentContext.pay(300); // Paid 300 using Bitcoin.
