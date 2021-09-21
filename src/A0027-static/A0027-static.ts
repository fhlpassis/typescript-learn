export class Person {
  static defaultAge = 0;
  static defaultCod = '000.000.000-00';

  constructor(public name: string, public surname: string, public age: number, public cod: string) {}

  normalMethod(): void {
    console.log(Person.defaultAge, Person.defaultCod);
  }

  static createPerson(name: string, surname: string): Person {
    return new Person(name, surname, Person.defaultAge, Person.defaultCod);
  }
}

const person1 = new Person('Bruce', 'Wayne', 30, '123.456.789-00');
const person2 = Person.createPerson('Clark', 'Kent');

console.log(person1);
console.log(person2);

person1.normalMethod();
console.log(Person.defaultAge, Person.defaultCod);
