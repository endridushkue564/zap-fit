// Filename: complexCode.js
// Description: Complex JavaScript code with advanced concepts and functionality

// Global variables
let count = 0;
const MAX_COUNT = 10;

// Classes
class MyComplexClass {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

// Functions
function performCalculation(num1, num2) {
  return num1 * num2 + Math.pow(num1, num2);
}

function recursiveFunction(n) {
  if (n <= 0) {
    return 1;
  } else {
    return n * recursiveFunction(n - 1);
  }
}

// Objects
const complexObject = {
  prop1: "value1",
  prop2: 42,
  nestedObject: {
    nestedProp: "nestedValue"
  },
  method() {
    console.log("Complex object method");
  }
};

// Arrays
const complexArray = [1, 2, 3, "four", { prop: "value" }];

// Promises
const complexPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 3000);
});

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
});

// Loops
for (let i = 0; i < 5; i++) {
  console.log(`Loop iteration: ${i}`);
}

// Async/Await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Callbacks
function complexCallback(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

// Execution
const complexInstance = new MyComplexClass("John");
complexInstance.sayHello();

console.log(performCalculation(5, 3));

console.log(recursiveFunction(5));

console.log(complexObject.nestedObject.nestedProp);

console.log(complexArray.length);

complexPromise.then((result) => {
  console.log(result);
});

complexCallback(() => {
  console.log("Callback executed");
});

fetchData();