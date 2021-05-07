let string = "radar";

function polindromString(string) {
  for (let i = 0, j = string.length - 1; i < string.length, j >= 0; i++, j--) {
    if (string[i] !== string[j]) {
      return string + ": This String Is Not Polindrom";
      break;
    }
  }
  return string + ": This Sting Is Polindrom";
}
console.log(polindromString(string));
