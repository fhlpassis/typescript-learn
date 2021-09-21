export function joinObjects<T, U>(obj1: T, obj2: U): T & U {
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { key1: 'key1' };
const obj2 = { key2: 'key2' };

const joinobj = joinObjects(obj1, obj2);

console.log(joinobj);
