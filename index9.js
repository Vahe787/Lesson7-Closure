let arr = [4, 3, 3];
let x;
let sumNum = 0;
let c;

function evenQuadraticNumbersSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    x = Math.pow(arr[i], 2);
    sumNum += x;
  }
  if (sumNum % 2 === 0) {
    return sumNum + ":  Even Number";
  }
  return sumNum + ":  Error 404 Odd Number";
}
console.log(evenQuadraticNumbersSum(arr));
