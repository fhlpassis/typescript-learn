export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

const person = new Person('Batman', 30);
const person2 = new Person(['Batman'], 30);
const person3 = new Person(['Batman'], { age: 30 });
const person4 = new Person<string, number>('Batman', 30);

export class Stack<T> {
  private cont = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.cont] = element;
    this.cont++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.cont--;
    const element = this.elements[this.cont];
    delete this.elements[this.cont];
    return element;
  }

  isEmpty(): boolean {
    return this.cont === 0;
  }

  length(): number {
    return this.cont;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<number | string>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push('string');

const element1 = stack.pop();

stack.showStack();

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
