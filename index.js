const table = document.getElementById("table");
const result = [];
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};
const numbersInRange = (start, end) => {
  if (start >= end) {
    alert("Start Should be lesser than end");
  } else {
    for (let number = start; number <= end; number++) {
      const startTime = performance.now();
      const isPrimeResult = isPrime(number);
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      result.push({
        number: number,
        isPrimeResult: isPrimeResult,
        executionTime: executionTime,
      });
    }
    console.log(result);
  }
};
document
  .getElementById("form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const endrange = document.getElementById("endrange").value;
    const startrange = document.getElementById("startrange").value;
    numbersInRange(startrange, endrange);
  });
