// Observer interface
interface Observer {
  update(temperature: number, humidity: number): void;
}

// Subject interface
interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

// Concrete subject class
class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;
  private humidity: number = 0;

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity);
    }
  }

  setWeather(temperature: number, humidity: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.notifyObservers();
  }
}

// Concrete observer classes
class PhoneDisplay implements Observer {
  update(temperature: number, humidity: number): void {
    console.log(`Phone Display - Temperature: ${temperature}, Humidity: ${humidity}`);
  }
}

class DesktopDisplay implements Observer {
  update(temperature: number, humidity: number): void {
    console.log(`Desktop Display - Temperature: ${temperature}, Humidity: ${humidity}`);
  }
}

// Client code
const weatherStation = new WeatherStation();
const phoneDisplay = new PhoneDisplay();
const desktopDisplay = new DesktopDisplay();

weatherStation.addObserver(phoneDisplay);
weatherStation.addObserver(desktopDisplay);

weatherStation.setWeather(30, 65);
