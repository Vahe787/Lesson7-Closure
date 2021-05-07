let arr = [null, true, {}, { name: "Elon" }, "", NaN, 0];
let newArr = [];
function filterFalsyValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filterFalsyValues(arr));
