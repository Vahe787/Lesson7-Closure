const redundant = (a) => {
  const str = (str) => {
    a.push(str);
    return a.join();
  };
  return str;
};

console.log(redundant([])("orange"));
