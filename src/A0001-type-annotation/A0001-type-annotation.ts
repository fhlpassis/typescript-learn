/* eslint-disable */

// Basic Types

let nome = 'Hello World';
let age: number = 30;
let adult: boolean = true;
let symbol: symbol = Symbol('any-symbol');
// let big: bigint = 10n;

// Arrays

let numberArray: Array<number> = [1, 2, 3];
let numberArray2: number[] = [1, 2, 3];
let stringArray: Array<string> = ['a', 'b'];
let stringArray2: string[] = ['a', 'b'];

// Objects

let person: {name: string; age: number, adult?: boolean} = {
  age: 30,
  name: 'Batman'
};

// Functions

function sum(x: number, y: number): number {
  return x + y;
}
const sum2: (x: number, y: number) => number = (x, y) => x + y;

export default 1;
