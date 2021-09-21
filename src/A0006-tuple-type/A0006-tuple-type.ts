// Tuple
const clientData1: readonly [number, string] = [1, 'Bruce'];
const clientData2: [number, string, string] = [1, 'Bruce', 'Wayne'];
const clientData3: [number, string, string?] = [1, 'Bruce'];
const clientData4: [number, string, ...string[]] = [1, 'Bruce', 'Other Value'];

// clientData1[0] = 2;
// clientData1.pop();
// clientData1[1] = 'Wayne';

console.log(clientData1);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);

// readonly
const array1: readonly string[] = ['Bruce', 'Wayne'];
const array2: ReadonlyArray<string> = ['Bruce', 'Wayne'];

console.log(array1);
console.log(array2);
