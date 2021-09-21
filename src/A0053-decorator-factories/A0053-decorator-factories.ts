function reverseNameAndColor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('Decorator: ', target);

    return class extends target {
      name: string;
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverse(args[0]);
        this.color = this.reverse(args[1]);
      }

      reverse(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

@reverseNameAndColor('Other value', 'Value 2')
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Class');
  }
}

const animal = new Animal('Tiger', 'White');
console.log(animal);
