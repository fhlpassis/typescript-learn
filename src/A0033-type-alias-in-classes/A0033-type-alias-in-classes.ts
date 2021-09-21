type NameType = {
  name: string;
};

type SurnameType = {
  surname: string;
};

type CompletedNameType = {
  completeName: () => string;
};

export class Person implements NameType, SurnameType, CompletedNameType {
  constructor(public name: string, public surname: string) {}

  completeName(): string {
    return this.name + ' ' + this.surname;
  }
}

const person = new Person('Bruce', 'Wayne');
console.log(person.completeName());
