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
  constructor(name: string, surname: string, age: number, cod: string, public subject: string) {
    super(name, surname, age, cod);
  }

  getCompleteName(): string {
    console.log('doing something before');
    const result = super.getCompleteName();
    return result + 'Hello';
  }
}

export class Client extends Person {
  getCompleteName(): string {
    return 'Client: ' + this.name + ' ' + this.surname;
  }
}

const person = new Person('Bruce', 'Wayne', 30, '000.000.000-00');
const student = new Student('Bruce', 'Wayne', 30, '000.000.000-00', 'Math');
const client = new Client('Bruce', 'Wayne', 30, '000.000.000-00');

//console.log(person.getCompleteName());
console.log(student.getCompleteName());
//console.log(client.getCompleteName());

console.log(student);
