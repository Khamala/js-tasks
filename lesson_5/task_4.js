/*
 * Функція startTimer повинна логувати кожен елемент масиву один раз на секунду.
 * Коли черга дійде до останнього елемента масиву, продовжити логувати у зворотному порядку
 * поки не дійде до першого елемента, потім зупинити процес.
 * 
 */

const startTimer = (arr) => {
   let value = 0;
   let flag = 0; 
   const inteval = setInterval(() => {
      if (value < arr.length && !flag) {
         console.log(arr[value]);
         value += 1;
         if (value == arr.length) {
            flag = 1;
            value -= 1;
         }
      } else  if (value <= arr.length && flag) {
         value -= 1;
         console.log(arr[value]);
         if (value == 0) {
            clearInterval(inteval);
         }
      }

   }, 2000);
}

startTimer(["a", "b", "c", "d", "e", "f"]);