class Log {
  constructor(moneyIn, moneyOut = 0, date = new Date()) {
    this.credit = this.formatNumber(moneyIn),
    this.debit = this.formatNumber(moneyOut),
    this.date = date
  }

  getCredit() {
    return this.credit;
  }

  getDebit() {
    return this.debit;
  }

  formatDate() {
    const formattedDate = this.date.toISOString().slice(0,10);
    const day = formattedDate.slice(8,10);
    const month = formattedDate.slice(5,7);
    const year = formattedDate.slice(0,4);

    return `${day}/${month}/${year}`;
  }

  formatNumber(amount) {
    return amount !== 0 ? amount.toFixed(2) : "";
  }

  formatLog(balance) {
    if (this.credit != "") {
      return `${this.formatDate()} || ${this.credit} || || ${balance}`
    }  else if (this.debit != "") {
      return `${this.formatDate()} || || ${this.debit} || ${balance}`
    }
  }
};

module.exports = Log;