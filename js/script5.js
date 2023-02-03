// округлятор

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(2));

function rounder(places) {
  return function (num) {
    return Number(num.toFixed(places));
  };
}

const rounder2 = rounder(2);
const rounder3 = rounder(3);

rounder2(floatingPoint);
rounder3(floatingPoint);

console.log(rounder2(floatingPoint));
console.log(rounder3(floatingPoint));

// более короткая запись

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.787899676));
console.log(rounder3(67.0989765555555554322));
