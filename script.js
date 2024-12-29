function getBalance() {
    return document.getElementById("balance").innerText;
  }
  
  function printBalance(num) {
    document.getElementById("balance").innerText = num;
  }
  
  function getIncome() {
    return document.getElementById("income").innerText;
  }
  
  function printIncome(num) {
    document.getElementById("income").innerText = num;
  }
  
  function getExpense() {
    return document.getElementById("expense").innerText;
  }
  
  function printExpense(num) {
    document.getElementById("expense").innerText = num;
  }
  
  function addTransactionToList(description, amount) {
    const transactionList = document.getElementById("transaction-list");
    const li = document.createElement("li");
    
    // Add classes for styling
    li.className = amount > 0 ? "transaction-income" : "transaction-expense";
  
    li.innerHTML = `
      <span class="transaction-description">${description}</span>
      <span class="transaction-amount">${amount > 0 ? "+" : "-"}$${Math.abs(amount).toFixed(2)}</span>
    `;
  
    transactionList.appendChild(li);
  }
  
  function updateTotals(amount) {
    let balance = parseFloat(getBalance());
    let income = parseFloat(getIncome());
    let expense = parseFloat(getExpense());
  
    if (amount > 0) {
      income += amount;
      printIncome(income.toFixed(2));
    } else {
      expense += Math.abs(amount);
      printExpense(expense.toFixed(2));
    }
  
    balance += amount;
    printBalance(balance.toFixed(2));
  }
  
  // Event listener for the form
  document.getElementById("transaction-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const description = document.getElementById("description").value.trim();
    const amount = parseFloat(document.getElementById("amount").value);
  
    if (description === "" || isNaN(amount)) {
      alert("Please enter a valid description and amount.");
      return;
    }
  
    // Add transaction to the list and update totals
    addTransactionToList(description, amount);
    updateTotals(amount);
  
    // Clear input fields
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
  });