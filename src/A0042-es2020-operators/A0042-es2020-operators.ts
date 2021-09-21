// Optional chaining and null coalescing operator

type Document1 = {
  title: string;
  text: string;
  date?: Date;
};

const document1: Document1 = {
  title: 'The Title',
  text: 'The Text',
  // date: new Date(),
};

console.log(document1.date?.toDateString()); //Optional chaining

console.log(document1.date?.toDateString() ?? 'No data 1'); //Optional chaining and null coalescing operator

console.log(undefined ?? 'No data 2');
console.log(null ?? 'No data 3');
console.log(false ?? 'No data 4');
console.log(0 ?? 'No data 5');
console.log('' ?? 'No data 6');
