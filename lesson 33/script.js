 // 1. Initial State
let balance = 0;

// 2. Select HTML elements
const balanceDisplay = document.getElementById('balance');
const amountInput = document.getElementById('amount');
const list = document.getElementById('transaction-list');

// 3. The Core Function
function updateTransaction(type) {
    const value = parseFloat(amountInput.value);

    // Validation: Don't process empty or negative numbers
    if (isNaN(value) || value <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    if (type === 'credit') {
        balance += value;
        logTransaction("Credit", value, "green");
    } else {
        // Check if Heera actually has enough money to spend
        if (value > balance) {
            alert("Insufficient Funds!");
            return;
        }
        balance -= value;
        logTransaction("Debit", value, "red");
    }

    // Update the screen
    balanceDisplay.innerText = `$${balance.toFixed(2)}`;
    amountInput.value = ''; // Clear the input field
}

// 4. Helper to record history
function logTransaction(name, amt, color) {
    const item = document.createElement('div');
    item.className = 'transaction-item';
    item.innerHTML = `<span>${name}</span> <span style="color:${color}">$${amt}</span>`;
    list.prepend(item);
}