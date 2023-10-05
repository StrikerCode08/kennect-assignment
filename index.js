const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};
const addResultRow = (number, isPrimeResult, executionTime) => {
  const resultTableBody = document.getElementById("table");
  const newRow = document.createElement("tr");
  const numberCell = document.createElement("td");
  numberCell.textContent = number;
  newRow.appendChild(numberCell);
  const isPrimeCell = document.createElement("td");
  isPrimeCell.textContent = isPrimeResult ? "Prime" : "Not Prime";
  newRow.appendChild(isPrimeCell);
  const executionTimeCell = document.createElement("td");
  executionTimeCell.textContent = executionTime.toFixed(4);
  newRow.appendChild(executionTimeCell);
  resultTableBody.appendChild(newRow);
};
const numbersInRange = (start, end) => {
  const resultTableBody = document.getElementById("table");
  resultTableBody.innerHTML = "";
  if (start >= end) {
    alert("Start Should be lesser than end");
  } else {
    for (let number = start; number <= end; number++) {
      const startTime = performance.now();
      const isPrimeResult = isPrime(number);
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      addResultRow(number, isPrimeResult, executionTime);
    }
  }
};
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const endrange = document.getElementById("endrange").value;
  const startrange = document.getElementById("startrange").value;
  numbersInRange(parseInt(startrange), parseInt(endrange));
});
