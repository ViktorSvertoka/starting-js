//Контекст стрелки

//Контекст внутри стрелки определяется местом ее обьявления, а не вызова,
//и ссылается на контекст родительской функции.

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis(); // this in showThis: window

// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// 💩 Стрелки как методы обьекта

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);

//     const inner = () => {
//       console.log('this in inner: ', this);
//     };

//     inner();
//   },
// };

// user.showName();

// Стрелки не когда не бывают методами обьекта!!!

const user = {
  fullName: 'Mango',
  showName: () => {
    console.log('this: ', this);
    console.log('this.fullName: ', this.fullName);
  },
};

user.showName();

// Стрелочная функция не может быть конструктором!!!

const User = name => {
  this.name = name;
};

console.log(new User('Mango'));

// Еще раз для примера стрелка не может быть методом обькта!!!

const objA = {
  x: 5,
  showX() {
    console.log('this в objA.showX: ', this);
    console.log(this.x);

    const objB = {
      y: 10,
      showThis: () => {
        console.log('this в objB.showThis: ', this);
      },
    };

    objB.showThis();
  },
};

// consol.dir() - смотреть под копот в консоле
