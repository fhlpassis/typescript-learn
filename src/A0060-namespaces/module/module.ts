/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNamespace {
  export const name = 'Batman';

  export class NamespacePerson {
    constructor(public name: string) {}
  }

  const person = new NamespacePerson('Batman');
  console.log(person);

  export namespace OtherNamespace {
    export const name = 'Batman';
  }
}

const person = new MyNamespace.NamespacePerson('Batman');
console.log(person);
console.log(MyNamespace.name);
console.log(MyNamespace.OtherNamespace.name);

const namespaceConst = 'namespaceConst value';
