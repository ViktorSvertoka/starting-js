// замыкание
// функция результатом своей работы может возвращать другую функцию
// возвращаямая функция во время вызова будет иметь доступ
// ко всем локальным переменным (области видимости)
// родительской функции (той из которой ее вернули),
// это называеться "замыкание"

const fnA = function (parameter) {
  const innerVariable = 'значение внутренней переменной функции fnA';

  const innerFunction = function () {
    console.log(parameter);
    console.log(innerVariable);
    console.log('это вызов innerFunction');
  };

  return innerFunction;
};

const fnB = fnA(555);

fnB();

console.log(fnB);
