/* * Функція countWithDelay приймає 3 аргумента: * 
1) кількість секунд перед тим, як працює ф-ція logCount * 
2) скільки разів повинна відпрацювати logCount * 
3) затримка між викликами ф-ції * 
logCount повинна логувати к-сть викликів */

const countWithDelay = (delay = 0, times = 0, interval = 0) => {
  let count = 0;
  function logCount() {
    const intervalId = setInterval(() => {
      count += 1;
      console.log(count);
      if (count === times) {
        clearInterval(intervalId);
      }
    }, interval);
  }
  setTimeout(logCount, delay);
};
countWithDelay(3000, 6, 1000);
