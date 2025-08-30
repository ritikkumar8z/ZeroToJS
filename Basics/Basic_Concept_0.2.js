/**
 * 📘 JavaScript - Complete Guide with Examples Day one - 
 * Author: Ritik Kumar
 * Date: 2 Jan 2025
 *
 * Yeh file JavaScript ka complete Basic explanation hai
 * code ke through.
 */

 
// 🧠 Coercion in template literals
console.log(`[] + 1 = ${[] + 1}`); // "1"

// 🚨 Unexpected coercion in loose equality
console.log('false == [] =', false == []); // false
console.log('false == ![] =', false == ![]); // true
console.log('true == [1] =', true == [1]); // true

// ⛔ Weird coercion in object wrappers
console.log('new Boolean(false) == false =', new Boolean(false) == false); // true
console.log('new Boolean(false) === false =', new Boolean(false) === false); // false

// 💥 Complex object coercion
const weirdObj = {
  valueOf() {
    return 1;
  },
  toString() {
    return "2";
  },
};
console.log('weirdObj + 1 =', weirdObj + 1); // 2

// 👻 Symbol coercion — throws error
try {
  console.log('Symbol + "a" =', Symbol("a") + "a");
} catch (e) {
  console.log('Symbol + "a" throws =', e.message); // Cannot convert a Symbol value to a string
}

// 🧪 Object equality by reference
const arr1 = [1];
const arr2 = [1];
console.log('arr1 == arr2 =', arr1 == arr2); // false
console.log('arr1.toString() == arr2.toString() =', arr1.toString() == arr2.toString()); // true

// 🧩 Nested coercion
console.log('[null] == false =', [null] == false); // true (weird)
console.log('["0"] == false =', ["0"] == false); // true

// 👀 Edge case coercion inside arrays
console.log('[] == ![] =', [] == ![]); // true
console.log('[] == [] =', [] == []); // false

// 🚀 BigInt and Number comparison
console.log('1n == 1 =', 1n == 1); // true
console.log('1n === 1 =', 1n === 1); // false

// 🌀 Boolean coercion of function
console.log('!!function(){} =', !!function(){}); // true

// 🤯 Array with objects inside
const nestedArr = [{}];
console.log('nestedArr == true =', nestedArr == true); // false
console.log('nestedArr.toString() =', nestedArr.toString()); // [object Object]

// 🧬 Custom coercion logic
const tricky = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return 10;
    if (hint === "string") return "I’m a string";
    return true;
  }
};
console.log('tricky + 5 =', tricky + 5); // 15
console.log('`${tricky}` =', `${tricky}`); // I’m a string
console.log('tricky == true =', tricky == true); // true

// ⚖️ NaN comparisons via Object.is
console.log('Object.is(NaN, NaN) =', Object.is(NaN, NaN)); // true
console.log('Object.is(+0, -0) =', Object.is(+0, -0)); // false
console.log('+0 === -0 =', +0 === -0); // true

// 🧩 Coercion with functions inside arrays
console.log('[function(){}] == false =', [function(){}] == false); // false
console.log('[function(){}] == true =', [function(){}] == true); // false

// 🛠 Real-world weird bug example
console.log('[] + null + 1 =', [] + null + 1); // "null1"
