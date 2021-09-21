type ColorsObj = typeof colorsObj;
type ColorsKeys = keyof ColorsObj;

const colorsObj = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
};

function colorTranslate(color: ColorsKeys, colors: typeof colorsObj) {
  return colors[color];
}

console.log(colorTranslate('red', colorsObj));
console.log(colorTranslate('green', colorsObj));
console.log(colorTranslate('blue', colorsObj));
