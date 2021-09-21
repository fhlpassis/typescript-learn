function decorator(classPrototype: any, name: string | symbol): any {
  console.log(classPrototype);
  console.log(name);
  let propertyvalue: any;
  return {
    get: () => propertyvalue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyvalue = value.split('').reverse().join('');
        return;
      }
      propertyvalue = value;
    },
  };
}

export class APerson {
  @decorator
  name: string;
  @decorator
  surname: string;
  @decorator
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

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
