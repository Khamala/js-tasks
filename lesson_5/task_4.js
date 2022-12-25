/*
 * Функція startTimer повинна логувати кожен елемент масиву один раз на секунду.
 * Коли черга дійде до останнього елемента масиву, продовжити логувати у зворотному порядку
 * поки не дійде до першого елемента, потім зупинити процес.
 * 
 */

const startTimer = (arr) => {
   let value = 0;
   let isReverse = false; 
   const inteval = setInterval(() => {
      console.log(arr[value]);
         if (value == arr.length - 1 && !isReverse) {
            isReverse = true;
            value = 0;
            arr.reverse();
         } else if (value == arr.length - 1 && isReverse) {
            clearInterval(inteval);
         }
      value += 1;
   }, 500);
}

startTimer(["a", "b", "c", "d", "e", "f"]);