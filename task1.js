//За допомогою циклу for напишіть цикл,
// який буде виводити в консоль всі парні числа від min до max


const numMin = 1;
const numMax = 9;

for (let i = numMin; i <= numMax; i += 1){

    if (i % 2 === 0) console.log(i);
};