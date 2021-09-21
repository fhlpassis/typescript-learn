export function function1(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

function1.call(new Date(), 'Batman', 30);
function1.apply(new Date(), ['Batman', 30]);
