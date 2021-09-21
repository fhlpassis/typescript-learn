let x = 10; //eslint-disable-line
x = 0b1010;
const y = 10;
let a = 100 as const; //eslint-disable-line

const person = {
  name: 'Bruce' as const,
  surname: 'Wayne',
};

function chooseColor(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color;
}

console.log(chooseColor('Red'));

// Module mode
export default 1;
