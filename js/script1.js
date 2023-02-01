// Change code below this line
function addOverNum(num, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > num) {
      total += arg;
    }
  }
  return total;
  // Change code above this line
}
