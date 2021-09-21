export class Person {
  constructor(public name: string, public surname: string, private age: number, protected cod: string) {}

  getAge(): number {
    return this.age;
  }

  getCod(): string {
    return this.cod;
  }

  getCompleteName(): string {
    return this.name + ' ' + this.surname;
  }
}

export class Student extends Person {
  getCompleteName(): string {
    return 'Student: ' + this.name + ' ' + this.surname;
  }
}

export class Client extends Person {
  getCompleteName(): string {
    return 'Client: ' + this.name + ' ' + this.surname;
  }
}

const person = new Person('Bruce', 'Wayne', 30, '000.000.000-00');
const student = new Student('Bruce', 'Wayne', 30, '000.000.000-00');
const client = new Client('Bruce', 'Wayne', 30, '000.000.000-00');

console.log(person.getCompleteName());
console.log(student.getCompleteName());
console.log(client.getCompleteName());
