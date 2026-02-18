    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    function updateUI() {
        const list = document.getElementById('expense-list');
        const totalDisplay = document.getElementById('total-amount');
        list.innerHTML = '';
        let total = 0;

        expenses.forEach((exp, index) => {
            total += parseFloat(exp.amount);
            list.innerHTML += `
                <tr>
                    <td>${exp.desc}</td>
                    <td>${exp.category}</td>
                    <td>$${exp.amount}</td>
                    <td><span class="delete-btn" onclick="deleteExpense(${index})">✕</span></td>
                </tr>
            `;
        });

        totalDisplay.innerText = total.toFixed(2);
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    function addExpense() {
        const desc = document.getElementById('desc').value;
        const amount = document.getElementById('amount').value;
        const category = document.getElementById('category').value;

        if(desc && amount) {
            expenses.push({ desc, amount, category });
            updateUI();
            document.getElementById('desc').value = '';
            document.getElementById('amount').value = '';
        }
    }

    function deleteExpense(index) {
        expenses.splice(index, 1);
        updateUI();
    }

    updateUI(); // Initial load
