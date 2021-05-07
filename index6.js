let arr = ["kia", "tesla", "bmw", "mercedes"];
let newArr = [];
function filterByLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filterByLength(arr));
