// Автоперевірка

// // Task 6;
// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// // Task 24
// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;

//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else {
//         discount = BASE_DISCOUNT;
//     }

//     return discount;
// }

// Практична таска
// Потрібно реалізувати перевірку
// 1 Email містить "@" та "."
// 2 Кількість символів в паролі більш ніж 7 елементів

const form = document.querySelector('.register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { name, email, password } = event.target.elements;

  const userName = name.value;
  const userEmail = email.value;
  const userPassword = password.value;

  if (!userEmail.includes('@') || !userEmail.includes('.')) {
    alert('Email wrong');
    return;
  }

  console.log(userPassword.length);
  if (userPassword.length < 7) {
    alert('Password not valid');
    return;
  }

  magic(userName);
}

function magic(name) {
  document.body.textContent = '';
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<h1 class="title"> Hi ${name}, JS it\`s MAGIC !!!</h1>`,
  );
}
