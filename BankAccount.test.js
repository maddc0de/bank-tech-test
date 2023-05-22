const BankAccount = require("./BankAccount");

describe("BankAccount class", () => {
  let account;
  beforeEach(() => {
    account = new BankAccount()
  })

  describe("deposit method", () => {
    it("does not change balance amount when credit is zero", () => {
      const logDouble = {
        credit: ""
      };
            
      account.deposit(logDouble);
      expect(account.getBalance()).toEqual(0);
    })

    it("changes balance amount to 1000.00 when credit is 1000.00", () => {
      const logDouble = {
        credit: 1000.00
      };
            
      account.deposit(logDouble);
      expect(account.getBalance()).toEqual(1000.00);
    })
  })

  describe("printStatement method", () => {
    it("prints logs that has credit with balance", () => {
      const logDouble = {
        credit: 1000.00,
        debit: '',
        date: '2023-01-10T15:34:45.558Z',
        formatLog: () => '10/01/2023 || 1000.00 || || 1000.00'
      };
            
      account.deposit(logDouble);
      account.addLog(logDouble);

      const consoleLogMock = jest.fn()
      console.log = consoleLogMock

      account.printStatement()

      expect(consoleLogMock).toHaveBeenCalledWith("date || credit || debit || balance");
      expect(consoleLogMock).toHaveBeenCalledWith("10/01/2023 || 1000.00 || || 1000.00");
    })

  })
})