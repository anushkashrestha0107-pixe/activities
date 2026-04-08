 /* JS: Logic for Calculations */
    let currentBalance = 0;

    function processTransaction(type) {
        const input = document.getElementById('amountInput');
        const amount = parseFloat(input.value);

        // Validation: Check if input is a valid number
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        if (type === 'credit') {
            currentBalance += amount;
            addToList("Credit", amount, "text-credit");
        } else if (type === 'debit') {
            if (amount > currentBalance) {
                alert("Insufficient funds!");
                return;
            }
            currentBalance -= amount;
            addToList("Debit", amount, "text-debit");
        }

        // Update UI
        document.getElementById('balance').innerText = `$${currentBalance.toFixed(2)}`;
        input.value = ""; // Clear input
    }

    function addToList(label, amount, colorClass) {
        const list = document.getElementById('transactionList');
        const item = document.createElement('div');
        item.className = 'transaction';
        item.innerHTML = `
            <span>${label}</span>
            <span class="${colorClass}">${type === 'credit' ? '+' : '-'}$${amount.toFixed(2)}</span>
        `;
        list.prepend(item); // Add newest transaction to the top
    }