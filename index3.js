const str = (string) => {
  return function (suffix) {
    let result = string + suffix;
    return result;
  };
};
console.log(str("hopeless")("ly"));
