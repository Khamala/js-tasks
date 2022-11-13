const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 6 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 150, quantity: 100 },
];

function total(arr) {
  return arr.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
  //   let summ = 0;
  //   arr.forEach(({ price, quantity }) => {
  //     summ += price * quantity;
  //   });
  //   return summ;
}

console.log("total stones: ", total(stones));
