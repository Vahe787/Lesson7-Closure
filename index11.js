let arr = [5, 7, 8, 9, 3];
let newArr = [];
let multiplicateNum;
function maxMultiplicateNum(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    multiplicateNum = arr[i] * arr[i + 1];
    newArr.push(multiplicateNum);
  }
  let maxMultNum = 0;
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] > newArr[j + 1]) {
      maxMultNum = newArr[j];
      newArr[j] = newArr[j + 1];
      newArr[j + 1] = maxMultNum;
    }
  }
  return maxMultNum + ": This Number is MaxMultiplicate";
}
console.log(maxMultiplicateNum(arr));
