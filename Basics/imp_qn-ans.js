// Q1: How do you handle asynchronous operations in JavaScript? Can you demonstrate using async/await?
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const fetchData = async () => {
  try {
    console.log("Fetching data...");
    await delay(1000); 
    console.log("Data fetched successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchData();

// Q2: How do you perform destructuring in JavaScript, and what are default values or aliasing?
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: 10001,
  },
};

const { name, age, address: { city, zip } } = person;
console.log(name, age, city, zip);

// Q3: How do you clone or merge objects/arrays in JavaScript using the spread operator?
const user = { id: 1, username: "Ritik" };
const updatedUser = { ...user, email: "ritik@example.com" };
console.log(updatedUser);

// Q4: How do you collect multiple arguments into an array using rest parameters in JavaScript?
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4, 5));  // Output: 15

// Q5: How would you handle asynchronous operations using callbacks and promises in JavaScript?
const getData = () => {
  return new Promise((resolve, reject) => {
    const data = { id: 1, name: "John Doe" };
    setTimeout(() => resolve(data), 1000);
  });
};

getData()
  .then(data => {
    console.log("Data:", data);
    return data.name;
  })
  .then(name => {
    console.log("User Name:", name);
  })
  .catch(error => console.error("Error:", error));

// Q6: Can you explain how to process data using map, filter, and reduce in JavaScript?
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num ** 2);
console.log("Squared:", squaredNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

const total = numbers.reduce((acc, num) => acc + num, 0);
console.log("Total:", total);

// Q7: How do you iterate over the keys, values, and entries of an object in JavaScript?
const userObject = { name: "Alice", age: 25, job: "Developer" };
const keys = Object.keys(userObject);
const values = Object.values(userObject);
const entries = Object.entries(userObject);

console.log(keys, values, entries);

// Q8: What are Map and Set data structures in JavaScript, and how do you use them?
const userMap = new Map();
userMap.set("name", "John");
userMap.set("age", 30);
userMap.set("city", "New York");

console.log(userMap.has("name")); // true
console.log(userMap.get("age"));  // 30

const userSet = new Set([1, 2, 3, 4, 5, 2, 3]);
console.log(userSet);  // Set {1, 2, 3, 4, 5}

// Q9: How do you create and use a generator function in JavaScript?
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const generator = idGenerator();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2

// Q10: How would you fetch and process multiple async operations in parallel in JavaScript?
const fetchUserData = async () => {
  const userPromise = new Promise(resolve => setTimeout(() => resolve("User Data"), 1000));
  const postsPromise = new Promise(resolve => setTimeout(() => resolve("Posts Data"), 1500));
  const commentsPromise = new Promise(resolve => setTimeout(() => resolve("Comments Data"), 2000));

  const results = await Promise.all([userPromise, postsPromise, commentsPromise]);
  console.log(results);  // ["User Data", "Posts Data", "Comments Data"]
};

fetchUserData();

// Q11: How does inheritance work in JavaScript classes?
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak();  // Buddy barks

// Q12: How would you implement memoization to optimize repeated calculations?
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Cache hit for", key);
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(2, 3));  
console.log(memoizedAdd(2, 3));  

// Q13: How can you use the Proxy object to intercept and customize object interactions?
const personProxy = new Proxy({}, {
  get(target, prop) {
    console.log(`Property ${prop} accessed`);
    return prop in target ? target[prop] : `No such property`;
  },
  set(target, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    target[prop] = value;
    return true;
  }
});

personProxy.name = "Alice";  
console.log(personProxy.name); 

// Q14: Can you process async data in parallel using map with async/await in JavaScript?
const processData = async () => {
  const data = [1, 2, 3, 4, 5];
  const results = await Promise.all(
    data.map(async (num) => {
      const result = await delay(500); 
      return num * 2;
    })
  );
  console.log(results);  // [2, 4, 6, 8, 10]
};

processData();
