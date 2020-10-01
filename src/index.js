
exports.min = function min(array) {
  if (array === undefined || array.length === 0) return 0;
  let length = array.length, min = Infinity;
  while (length--) {
    if (array[length] < min) {
      min = array[length]
    }
  }
  return min;
}

exports.max = function max(array) {
  if (array === undefined || array.length === 0) return 0;
  let length = array.length, max = -Infinity;
  while (length--) {
    if (array[length] > max) {
      max = array[length]
    }
  }
  return max;
}

exports.avg = function avg(array) {
  if (array === undefined || array.length === 0) return 0;

  return array.reduce((a, item) => {
    return a + item;
  }, 0) / array.length;
}
