interface ProtocolPerson<T = string, U = number> {
  name: T;
  surname: T;
  age: U;
}

type ProtocolPerson2<T = string, U = number> = {
  name: T;
  surname: T;
  age: U;
};

const student1: ProtocolPerson<string, number> = {
  name: 'Student',
  surname: 'Student',
  age: 30,
};

const student2: ProtocolPerson2<number, number> = {
  name: 123,
  surname: 456,
  age: 30,
};

const student3: ProtocolPerson = {
  name: '123',
  surname: '456',
  age: 30,
};

console.log(student1, student2, student3);
