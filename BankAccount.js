const Log = require("./Log");

class BankAccount {
  constructor() {
    this.logs = [];
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(logInstance) {
    if (logInstance.getCredit() != "") {
      const credit = parseFloat(logInstance.getCredit());
      this.balance += credit;
      return this.balance.toFixed(2);
    }
  }

  withdraw(logInstance) {
    if (logInstance.getDebit() !== "" && logInstance.getDebit() <= this.balance) {
      const debit = parseFloat(logInstance.getDebit());
      this.balance -= debit;
      return this.balance.toFixed(2);
    } else {
      console.log("Insufficient funds");
    }
  }

  addLog(logInstance) {
    const newLog = logInstance.formatLog(this.balance);
    this.logs.push(newLog);
  }

  printStatement() {
    console.log("date || credit || debit || balance");
    this.logs.reverse().forEach( log => console.log(log));
  }


}

// const log = new Log(0, 0);
// const acc = new BankAccount();
// console.log(acc.withdraw(log));



module.exports = BankAccount;
