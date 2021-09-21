/* function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} ${b}`;
} */

function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 1));
console.log(add('a', 'b'));

type Person = { type: 'person'; name: string };
type Animal = { type: 'animal'; color: string };

type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  constructor(public name: string) {}
  type: 'person' = 'person';
}

function showName(obj: PersonOrAnimal): void {
  // if ('name' in obj) console.log(obj.name);
  // if (obj instanceof Student) console.log(obj.name);
  switch (obj.type) {
    case 'person':
      console.log(obj.name);
      return;
    case 'animal':
      console.log('Animal', obj.color);
      return;
  }
}

showName(new Student('Batman'));
showName({ type: 'animal', color: 'green' });
