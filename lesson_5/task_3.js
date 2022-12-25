/*
 * Використовуй prompt та повертай значення звідти.
 * Створи функцію, усередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс та повертай "error".
 * Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.
 */
const value = prompt("введіть що-небудь");

function checkValue(value) {
  //   return new Promise((resolve, reject) => {
  //     if (isNaN(value)) {
  //       reject("its not a number");
  //     }
  //     if (value % 2 === 0) {
  //       resolve(setTimeout(() => console.log("even"), 1000));
  //     } else resolve(setTimeout(() => console.log("odd"), 2000));
  //   });
  return new Promise((resolve, reject) => {
    if (isNaN(value)) {
      reject("its not a number");
    }
    if (value % 2 === 0) {
      setTimeout(() => {
        resolve("even");
      }, 1000);
    } else
      setTimeout(() => {
        resolve("odd");
      }, 2000);
  });
}

checkValue(value).then(alert).catch(alert);
