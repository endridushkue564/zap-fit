// Filename: sophisticated_code.js
// Content: Elaborate and complex code

// Custom class for creating objects
class MyObject {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }

  updateAge() {
    this.age++;
    console.log(`Updated age: ${this.age}`);
  }
}

// Function to generate prime numbers using Sieve of Eratosthenes algorithm
const generatePrimes = (limit) => {
  const primes = [];
  const sieve = Array(limit + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (sieve[i] === true) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  for (let i = 2; i <= limit; i++) {
    if (sieve[i] === true) {
      primes.push(i);
    }
  }

  return primes;
};

// Sample usage of the custom class
const obj1 = new MyObject("John", 25);
const obj2 = new MyObject("Jane", 30);

obj1.greet(); // Output: Hello, my name is John and I'm 25 years old.
obj2.updateAge(); // Output: Updated age: 31

// Generate prime numbers up to 100
const primes = generatePrimes(100);
console.log("Prime numbers up to 100:", primes);