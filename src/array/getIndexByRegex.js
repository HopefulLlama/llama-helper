module.exports = (array, regex) => {
  let index = -1;
  array.forEach((element, i) => {
    if(element.match(regex)) {
      index = i;
    }
  });
  return index;
};