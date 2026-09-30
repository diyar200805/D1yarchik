const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expensesList = document.getElementById("expenses");
const total = document.getElementById("total");

let expenses = [];

function updateTotal() {
    let sum = 0;

    for (let i = 0; i < expenses.length; i++) {
        sum += expenses[i].amount;
    }

    total.textContent = "Общая сумма: " + sum + " тг";
}

function showExpenses() {
    expensesList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        const item = document.createElement("li");

        item.textContent =
            expenses[i].name + " — " + expenses[i].amount + " тг ";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";

        deleteButton.addEventListener("click", function () {
            expenses.splice(i, 1);
            showExpenses();
            updateTotal();
        });

        item.appendChild(deleteButton);
        expensesList.appendChild(item);
    }
}

document.getElementById("add").addEventListener("click", function () {
    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);

    if (name === "" || amount <= 0) {
        alert("Введите название и положительную сумму");
        return;
    }

    expenses.push({
        name: name,
        amount: amount
    });

    expenseName.value = "";
    expenseAmount.value = "";

    showExpenses();
    updateTotal();
});

document.getElementById("clear").addEventListener("click", function () {
    expenses = [];

    showExpenses();
    updateTotal();
});