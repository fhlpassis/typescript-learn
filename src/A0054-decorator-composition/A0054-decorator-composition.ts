interface Constructor {
  new (...args: any[]): any;
}

function reverseNameAndColor(param1: string, param2: string) {
  // Closure
  return function (target: Constructor) {
    console.log(`Decorator`, target);
    return class extends target {
      name: string;
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverse(args[0]);
        this.color = this.reverse(args[1]);
      }

      reverse(value: string): string {
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function otherDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('Other decorator' + param1);
    return target;
  };
}

@otherDecorator('Other decorator param') // 2
@reverseNameAndColor('Other Value', 'Value2') // 1
export class Animal {
  constructor(public name: string, public color: string) {
    console.log(`Class`);
  }
}

/* const AnimalDecorated = decorator(Animal);
const animal = new AnimalDecorated('Tiger', 'White');
console.log(animal); */

const animal = new Animal('Tiger', 'White');
console.log(animal);
