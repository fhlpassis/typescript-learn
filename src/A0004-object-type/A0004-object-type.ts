const objectA: {
  readonly keyA: string;
  keyB: string;
} = {
  keyA: 'A value',
  keyB: 'B value',
};

objectA.keyB = 'Another Value';

console.log(objectA);
