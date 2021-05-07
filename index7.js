let arr = [2, 4, 6, 2];

function numberUniqueOrNot(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        return "Array Number Is Not Unique";
      }
    }
  }
  return "Array Number Is Unique";
}
console.log(numberUniqueOrNot(arr));
