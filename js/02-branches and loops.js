/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

// const stars = 1;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого кол-ва звезд нет');
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

// const stars = 1;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

//  1. сделать переменные
// const option = 1526;
// let message = '';

// // 2. сделать switch 1 2 3
// // 3. в каждом кейсе записать в message строку
// switch (option) {
//   case 1:
//     message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//     break;

//   case 2:
//     message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//     break;

//   case 3:
//     message = 'Посылка будет отправлена сегодня';
//     break;

//   default:
//     message = 'Вам перезвонит менеджер';
// }

// // 4. сделать лог message
// console.log(message);

//?========================================================================

/*
 * Цикл for
 */

for (let i = 0; i < 100; i += 1) {
  console.log(i);
}

for (let i = 1; i <= 100; i += 1) {
  console.log(i);
}

for (let i = 80; i <= 100; i += 1) {
  console.log(i);
}

for (let i = 10; i >= 0; i -= 1) {
  console.log(i);
}

for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}
console.log('Цикл выполнен');

/*
 * Pre-increment и Post-increment
 */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

//  1 сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// // 2 перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   // 3 сгенерить случайную зп
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );

//   console.log(`ЗП работника номер ${i} - ${salary}`);

//   // 4  прибавить к тоталу
//   totalSalary += salary;
// }

// // 5 лог
// console.log('totalSalary: ', totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// //  1 вары
// const min = 0;
// const max = 5;
// let total = 0;

// // фор от min до max с шагом в 1
// for (let i = min; i <= max; i += 1) {
//   // проверяем остаток от деления
//   if (i % 2 !== 0) {
//     // console.log('Не чётное: ', i);
//     continue;
//   }

//   // пишем в сумму
//   console.log('чётное: ', i);
//   total += i;

//   // аналог +=
//   // total = total + i;
// }

// console.log('total: ', total);
