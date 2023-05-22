const Log = require("./Log");

describe("Log class", () => {
  let mockDate;
  beforeEach(() => {
    mockDate = new Date(
      "Mon May 22 2023 13:48:20 GMT+0100 (British Summer Time)"
    );
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);
  });

  it("should construct a log instance", () => {
    const logInstance = new Log(0, 0, mockDate);
    expect(logInstance).toBeDefined();
  });

  it("should return credit value", () => {
    const logInstance = new Log(100, 0, mockDate);
    expect(logInstance.getCredit()).toEqual("100.00");
  });

  it("should return debit value", () => {
    const logInstance = new Log(0, 100, mockDate);
    expect(logInstance.getDebit()).toEqual("100.00");
  });

  it("should format date to dd/mm/yyyy", () => {
    const logInstance = new Log(0, 0, mockDate);
    expect(logInstance.formatDate()).toBe("22/05/2023");
  });

  it("should format number with 2 decimal places", () => {
    const logInstance = new Log(1000, 0, mockDate);
    expect(logInstance.credit).toEqual("1000.00");
  });

  it("should format log with credit value", () => {
    const logInstance = new Log(1000, 0, mockDate);
    const mockBankAccount = {
      balance: 0,
      getBalance: function () {
        return this.balance.toFixed(2);
      },
      withdraw: function (logInstance) {
        this.balance += parseFloat(logInstance.getCredit());
      },
    };
    console.log(logInstance.getCredit());
    mockBankAccount.withdraw(logInstance);

    expect(logInstance.formatLog(mockBankAccount.getBalance())).toEqual(
      "22/05/2023 || 1000.00 || || 1000.00"
    );
  });
});
