// Write a function that accepts a multi dimensional array and returns
//  a flattened version.


let flattenedArray = function (array) {
  //Use flat method + parameter how "deep" to go
  let flat = array.flat(Infinity);

  return flat;
};

console.log(flattenedArray([1, 2, [3, [4], 5, 6], 7])); //[1, 2, 3, 4, 5, 6, 7]
console.log(flattenedArray([1, [3, [4, [9, [0]]]], 7])); //[1, 3, 4, 9, 0, 7]
