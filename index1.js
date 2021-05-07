const sum = (num1) => {
  const sumNum = (num2) => {
    return num1 + num2;
  };
  return sumNum;
};

console.log(sum(1)(2));
const addTen = sum(10);
console.log(addTen(2));
