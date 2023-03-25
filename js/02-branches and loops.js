// фильтрация
// 1) надо передать фунцию
// 2) функция получает элемент массива
// 3) если элемент массива удовлетворяет условию то функция вернет true
// 4) если элемент массива  НЕ удовлетворяет условию то функция вернет false

const filter = function (array, callback) {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = callback(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
  return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);
