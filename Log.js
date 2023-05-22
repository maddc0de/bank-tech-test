class Log {
  constructor(moneyIn, moneyOut, balance, date = new Date()) {
    this.credit = moneyIn,
    this.debit = moneyOut,
    this.balance = balance,
    this.date = date
  }

  formatDate() {
    let formattedDate = this.date.toISOString().slice(0,10);
    const day = formattedDate.slice(8,10);
    const month = formattedDate.slice(5,7);
    const year = formattedDate.slice(0,4);

    return `${day}/${month}/${year}`;
  }
};

module.exports = Log;