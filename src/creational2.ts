// Singleton Logger class
class Logger {
  private static instance: Logger;

  private constructor() {}  // private constructor prevents instantiation from outside

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    console.log(`Log entry: ${message}`);
  }
}

// Client code
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log('First message');  // Log entry: First message
logger2.log('Second message'); // Log entry: Second message

console.log(logger1 === logger2); // true
