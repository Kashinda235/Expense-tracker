export class User {
  constructor(name) {
    this.name = name;
    this.expenses = [];
  }

  addExpense() {
    const desc = document.getElementById("desc").value;
    const amount = ocument.getElementById("amount").value;

    if (desc && amount) {
      this.expenses.push({ desc, amount });
      this.updateUI();
      document.getElementById("desc").value = "";
      document.getElementById("amount").value = "";
    }
  }
}
