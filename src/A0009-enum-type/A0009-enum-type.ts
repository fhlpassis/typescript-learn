enum Colors {
  RED = 10, // 10
  BLUE = 100, // 100
  YELLOW = 200, // 200
}

enum Colors {
  PURPLE = 'PURPLE',
  GREEN = 201,
  PINK,
}

// console.log(Colors);
// console.log(Colors.RED);
// console.log(Colors[10]);
// console.log(Colors.PURPLE);

export function chooseColor(color: Colors): void {
  console.log(Colors[color]);
}

chooseColor(Colors.PURPLE);
chooseColor(123456);
