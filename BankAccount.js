const Log = require("./Log");

class BankAccount {
  constructor() {
    this.logs = [];
    this.balance = 0;
  }

  deposit(logInstance) {
    if (logInstance.credit != "") {
      const credit = parseFloat(logInstance.credit);
      this.balance += credit;
      return this.balance.toFixed(2);
    }
  }

  getBalance() {
    return this.balance;
  }

  addLog(logInstance) {
    const newLog = logInstance.formatLog(this.balance);
    this.logs.push(newLog);
  }

  printStatement() {
    console.log("date || credit || debit || balance");
    this.logs.forEach( log => console.log(log));
  }


}

// const log = new Log(1000, 0);
// console.log(log);
// const acc = new BankAccount();
// console.log(acc.deposit(log));
// console.log(acc.getBalance());


module.exports = BankAccount;
