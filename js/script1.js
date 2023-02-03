const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

doMath(2, 3, function (x, y) {
  return x + y;
});

doMath(10, 8, function (x, y) {
  return x - y;
});
