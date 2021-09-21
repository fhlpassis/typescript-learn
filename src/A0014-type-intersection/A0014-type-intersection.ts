type HasName = { name: string };
type HasSurname = { surname: string };
type HasAge = { age: number };

type Person = HasName & HasSurname & HasAge; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;

const person: Person = {
  age: 30,
  name: 'Bruce',
  surname: 'Wayne',
};

// Module mode
export { person };
