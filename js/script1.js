// отложенный вызов: интервалы

const callback = function () {
  console.log('Через 3 секунды внутри колбека в таймауте');
};

console.log('В коде перед таймаутом');

setTimeout(callback, 2000);

console.log('В коде после таймаута');
