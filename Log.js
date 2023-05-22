class Log {
  constructor(moneyIn, moneyOut, date = new Date()) {
    this.credit = this.formatNumber(moneyIn),
    this.debit = this.formatNumber(moneyOut),
    this.date = date
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

};

module.exports = Log;