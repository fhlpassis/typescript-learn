function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Bruce',
  surname: 'Wayne',

  showName(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

noReturn('Hello', 'World');
person.showName();

export { person };
