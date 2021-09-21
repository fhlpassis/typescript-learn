export class Car {
  private readonly engine = new Engine();

  turnOn(): void {
    this.engine.turnOn();
  }

  speedUp(): void {
    this.engine.speedUp();
  }

  stop(): void {
    this.engine.stop();
  }

  turnOff(): void {
    this.engine.turnOff();
  }
}

export class Engine {
  turnOn(): void {
    console.log('Engine is on...');
  }

  speedUp(): void {
    console.log('Engine is accelerating...');
  }

  stop(): void {
    console.log('Engine is stopped...');
  }

  turnOff(): void {
    console.log('Engine is off...');
  }
}

const car = new Car();

car.turnOn();
car.speedUp();
car.stop();
car.turnOff();
