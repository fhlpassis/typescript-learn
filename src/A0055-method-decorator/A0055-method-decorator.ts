function decorator(classPrototype: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
}

export class APerson {
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  @decorator
  method(msg: string): string {
    return `${this.name} ${this.surname}: ${msg}`;
  }

  get completeName(): string {
    return this.name + ' ' + this.surname;
  }

  set completeName(valor: string) {
    const word = valor.split(/\s+/g);
    const firstName = word.shift();
    if (!firstName) return;
    this.name = firstName;
    this.surname = word.join(' ');
  }
}

const person = new APerson('Bruce', 'Wayne', 30);
const method = person.method('Hello World');
console.log(method);
