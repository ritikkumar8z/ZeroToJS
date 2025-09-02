/**
 * 📘 JavaScript Generators & Async Iterators
 * Author: Ritik Kumar
 * Date: 4 Feb 2025
 */

// ------------------------------
// 1. Basic Generator function
// ------------------------------
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log("Generator next ->", gen.next()); // { value: 1, done: false }
console.log("Generator next ->", gen.next()); // { value: 2, done: false }
console.log("Generator next ->", gen.next()); // { value: 3, done: false }
console.log("Generator next ->", gen.next()); // { value: undefined, done: true }

// ------------------------------
// 2. Infinite Generator (lazy sequence)
// ------------------------------
function* infiniteCounter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const counter = infiniteCounter();
console.log("Infinite ->", counter.next().value); // 0
console.log("Infinite ->", counter.next().value); // 1
console.log("Infinite ->", counter.next().value); // 2

// ------------------------------
// 3. Generators with for...of
// ------------------------------
function* fruits() {
  yield "🍎";
  yield "🍌";
  yield "🍇";
}
for (let fruit of fruits()) {
  console.log("Fruit:", fruit);
}

// ------------------------------
// 4. Passing values into generators
// ------------------------------
function* adder() {
  let x = yield "Send me a number";
  let y = yield "Send me another number";
  return x + y;
}
const addGen = adder();
console.log(addGen.next().value);  // "Send me a number"
console.log(addGen.next(5).value); // "Send me another number"
console.log(addGen.next(10).value); // 15

// ------------------------------
// 5. Async Generators (with await)
// ------------------------------
async function* asyncNumbers() {
  for (let i = 1; i <= 3; i++) {
    await new Promise((res) => setTimeout(res, 500)); // simulate delay
    yield i;
  }
}

(async () => {
  for await (let num of asyncNumbers()) {
    console.log("Async number:", num); // prints 1, 2, 3 with delay
  }
})();

// ------------------------------
// 6. Async Iterators (manual use)
// ------------------------------
const asyncIter = {
  data: ["A", "B", "C"],
  async *[Symbol.asyncIterator]() {
    for (let item of this.data) {
      await new Promise((res) => setTimeout(res, 300));
      yield item;
    }
  },
};

(async () => {
  for await (let letter of asyncIter) {
    console.log("Async iterator:", letter);
  }
})();
