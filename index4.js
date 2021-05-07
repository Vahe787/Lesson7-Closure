const printAfter = () => {
  let string = "Hello World";
  return string;
};

printAfter();

const print = () => {
  let string1 = "Elon Musk";
  return [printAfter(), string1].join(", ");
};

console.log(print(printAfter));
