const Log = require("./Log");

class BankAccount {
  constructor() {
    this.logs = [];
    this.balance = 0;
  }

  addLog(logInstance) {

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

}

// const log = new Log(0, 0);
// const acc = new BankAccount();
// console.log(acc.deposit(log));
// console.log(acc.getBalance());


module.exports = BankAccount;
