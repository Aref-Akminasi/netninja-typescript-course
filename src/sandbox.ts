let greet: Function;

greet = () => {
  console.log('hello');
};

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add(3, 4, '20');

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(10, 7);
