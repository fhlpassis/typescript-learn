// Declaration merging
interface Person {
  name: string;
}

interface Person {
  readonly surname: string;
  readonly address: readonly string[];
  age?: number;
}

const person: Person = {
  name: 'Bruce',
  surname: 'Wayne',
  address: ['Gotham'],
  age: 30,
};

console.log(person);

export default 1;
