type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  favColor?: string;
};
type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';

type FavColor = ColorRGB | ColorCMYK;

const person: Person = {
  age: 30,
  name: 'Bruce',
  salary: 200_000, //200000
};

export function setFavColor(person: Person, color: FavColor): Person {
  return { ...person, favColor: color };
}

console.log(setFavColor(person, 'Blue'));
console.log(person);
