const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 6 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 150, quantity: 100 },
];

const max = 15000;
const filteredStones = stones.filter(
  ({ price, quantity }) => price * quantity < max
);
console.log(filteredStones);
