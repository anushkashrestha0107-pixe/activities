let currentInput = "";
let total = 0;
let operation = null;

function updateDisplay(value) {
  document.getElementById("display").innerText = "₹ " + value;
}

function pressNumber(num) {
  currentInput += num;
  updateDisplay(currentInput);
}

function setOperation(op) {
  if (currentInput === "") return;

  total += parseFloat(currentInput);
  currentInput = "";
  operation = op;

  updateDisplay(total);
}

function calculate() {
  if (currentInput === "") return;

  if (operation === "+") {
    total += parseFloat(currentInput);
  } else if (operation === "-") {
    total -= parseFloat(currentInput);
  }

  updateDisplay(total);
  currentInput = "";
  operation = null;
}

function clearAll() {
  currentInput = "";
  total = 0;
  operation = null;
  updateDisplay(0);
}

function addExpense() {
  if (currentInput === "") return;

  let amount = parseFloat(currentInput);
  alert("Expense Added: ₹ " + amount);

  currentInput = "";
  updateDisplay(total);
}