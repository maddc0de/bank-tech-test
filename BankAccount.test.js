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
    it("prints logs that has credit with balance from latest to oldest", () => {
      const logDouble = {
        credit: 1000.00,
        debit: '',
        date: '2023-01-10T15:34:45.558Z',
        formatLog: () => '10/01/2023 || 1000.00 || || 1000.00'
      };

      const logDouble2 = {
        credit: 2000.00,
        debit: '',
        date: '2023-01-13T15:34:45.558Z',
        formatLog: () => '13/01/2023 || 2000.00 || || 3000.00'
      };
            
      account.deposit(logDouble);
      account.addLog(logDouble);

      account.deposit(logDouble2);
      account.addLog(logDouble2);

      const consoleLogMock = jest.fn()
      console.log = consoleLogMock

      account.printStatement()

      expect(consoleLogMock.mock.calls[0][0]).toEqual("date || credit || debit || balance");
      expect(consoleLogMock.mock.calls[1][0]).toEqual("13/01/2023 || 2000.00 || || 3000.00");
      expect(consoleLogMock.mock.calls[2][0]).toEqual("10/01/2023 || 1000.00 || || 1000.00");
    })
  })


})