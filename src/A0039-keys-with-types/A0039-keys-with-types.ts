type Vehicle = {
  mark: string;
  anno: string;
};

type Car = {
  brand: Vehicle['mark'];
  year: Vehicle['anno'];
  name: string;
};

const car: Car = {
  brand: 'Ford',
  year: '2021',
  name: 'Name',
};

console.log(car);
