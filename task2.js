// У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

let min = 47;

if (min <= 15) {
    console.log(`${min} у першій чверті`);
} else if (min > 15 && min <= 30) {
    console.log(`${min} у другій чверті`);
} else if (min > 30 && min <= 45) {
    console.log(`${min} у третій чверті`);
} else if (min > 45 && min < 60) {
    console.log(`${min} у четвертій чверті`);
} 

console.log('Hello');