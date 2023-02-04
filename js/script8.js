//Стрелочные функции

const price = function (a, b) {
  return a - b;
};

console.log(price(7, 3));

//Синтаксис стрелочной функции
// - с параметрами
// - с одним параметром
// - без параметров

const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3));

//Если один параметр функции, то пишем без скобок

const logMessage = message => {
  console.log(message);
};

console.log(logMessage('Привет!'));

//Если параметров фунцкии нет, то ставим пустые скобки

const book = () => {
  console.log('Остров сокровищ');
};

book();

//Явный возврат - скобки есть

const box = (a, b) => {
  return a + b;
};

console.log(box(6, 6));

//Не явный возврат - скобок нет

const car = (a, b) => a + b;

console.log(car(10, 6));

//Псевдомасив arguments

const fruit = (...args) => {
  console.log(args);
};

fruit(1, 2, 3, 4, 5, 6, 7);
