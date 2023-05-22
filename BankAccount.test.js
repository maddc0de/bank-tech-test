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
})