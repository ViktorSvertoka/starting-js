// Стрелочные функции
// - Обьявление
// - Явный и неявный возврат
// - Аргументы
// - Неявный возврат обьекта

// вариант №1
const addArrow = function (a, b, c) {
  return a + b + c;
};

// вариант №2
const addArrow = (a, b, c) => {
  return a + b + c;
};

// вариант №3
const addArrow = (a, b, c) => a + b + c;

console.log(addArrow(5, 10, 15));
