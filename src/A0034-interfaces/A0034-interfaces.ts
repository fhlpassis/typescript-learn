interface NameType {
  name: string;
}

interface SurnameType {
  surname: string;
}

interface CompletedNameType {
  completeName(): string;
}

type PersonType = NameType & SurnameType & CompletedNameType;
interface PersonType2 extends NameType, SurnameType, CompletedNameType {}

export class Person implements PersonType2 {
  constructor(public name: string, public surname: string) {}

  completeName(): string {
    return this.name + ' ' + this.surname;
  }
}

const objperson: PersonType2 = {
  name: 'Bruce',
  surname: 'Wayne',
  completeName() {
    return this.name + ' ' + this.surname;
  },
};

const person = new Person('Bruce', 'Wayne');
console.log(person.completeName());

console.log(objperson.completeName());
