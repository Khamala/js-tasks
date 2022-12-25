//1 Promise Construtor
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// console.log('end');

//2 then()
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

//3 resolve()
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

//4 resolve() isn’t called
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// promise1.then(res => {
//   console.log(2)
// })

// console.log('end');

//5 Microtasks vs Macrotasks
// console.log('start')

// setTimeout(() => {
//   console.log('setTimeout')
// })

// Promise.resolve().then(() => {
//   console.log('resolve')
// })

// console.log('end')
