// Use any only as a last resort

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Hello'));
console.log(showMessage(1));
