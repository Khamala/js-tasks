//Напишіть функцію, яка виводитиме числа від min до max із затримкою в 1 секунду між кожним значенням

function counter(min, max) {
   // for (let i = min; i <= max; i++){
   //    setTimeout(() => {
   //       console.log(i);
   //    }, 1000*i);
   // }
   let number = min;
   const interval = setInterval(() => {
      if (number <= max) {
         console.log(number);
         number += 1;
      } else {
         clearInterval(interval);
      }
   }, 1000)

}
counter(1,10)