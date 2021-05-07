let arr = "String";
let c;

function stringIsogramOrNot(arr) {
  c = arr.split("");
  for (let i = 0; i < c.length; i++) {
    for (let j = 0; j < c.length; j++) {
      if (i !== j && c[i] === c[j]) {
        return "String Is Isogram";
      }
    }
  }
  return "String Is Not Isogram";
}
console.log(stringIsogramOrNot(arr));
