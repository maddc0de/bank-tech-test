class Log {
  constructor(moneyIn, moneyOut, balance, date = new Date()) {
    this.credit = moneyIn,
    this.debit = moneyOut,
    this.balance = balance,
    this.date = date
  }
};

module.exports = Log;