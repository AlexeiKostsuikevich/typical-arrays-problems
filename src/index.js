
exports.min = function min (array) {
    if (array === undefined){
  return 0;
    }
    if (array.length === 0){
        return 0;
    }
    return Math.min.apply(Math,array);
}

exports.max = function max (array) {
    if (array === undefined){
  return 0;}
  if (array.length === 0){
      return 0;
  }
  return Math.max.apply(Math, array);
}

exports.avg = function avg (array) {
    if (array === undefined){
        return 0;
    }
  if (array.length === 0){
      return 0;
  }
  let divident = 0;
  for (let i = 0; i < array.length; i++){
      divident += array[i];
  }
  return divident/array.length;
  }

