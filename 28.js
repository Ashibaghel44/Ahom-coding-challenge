// Calculate the sum of first 100 prime numbers and return them in an array

function Prime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
function findFirst100Primes() {
  const primes = [];
  let num = 2;

  while (primes.length < 100) {
    if (Prime(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes;
}
const first100Primes = findFirst100Primes();
const sum = first100Primes.reduce((acc, curr) => acc + curr, 0);

console.log(first100Primes);
console.log("Total sum " + sum);