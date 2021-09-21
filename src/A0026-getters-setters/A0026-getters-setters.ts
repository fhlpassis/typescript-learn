export class Person {
  constructor(private name: string, private surname: string, private age: number, private _cod: string) {
    this.cod = _cod;
  }

  set cod(cod: string) {
    console.log('SETTER CALLED');
    this._cod = cod;
  }

  get cod(): string {
    console.log('GETTER CALLED');
    return this._cod.replace(/\D/g, '');
  }
}

const person = new Person('Bruce', 'Wayne', 30, '123.456.789-00');
person.cod = '123.456.789-99';
console.log(person.cod);
