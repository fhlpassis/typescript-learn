function decorator(classPrototype: any, methodName: string, index: number): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
  return 'anything';
}

export class APerson {
  name: string;
  surname: string;
  age: number;

  constructor(@decorator name: string, @decorator surname: string, @decorator age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  method(@decorator msg: string): string {
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
