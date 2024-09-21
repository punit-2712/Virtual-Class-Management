"use strict";
// Concrete subject class
class WeatherStation {
    constructor() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity);
        }
    }
    setWeather(temperature, humidity) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.notifyObservers();
    }
}
// Concrete observer classes
class PhoneDisplay {
    update(temperature, humidity) {
        console.log(`Phone Display - Temperature: ${temperature}, Humidity: ${humidity}`);
    }
}
class DesktopDisplay {
    update(temperature, humidity) {
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
