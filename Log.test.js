const Log = require("./Log");

describe("Log class", () => {
  let mockDate;
  beforeEach(() => {
    mockDate = new Date('Mon May 22 2023 13:48:20 GMT+0100 (British Summer Time)');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
  })

  it("should construct a log instance", () => {
    const logInstance = new Log(0, 0, mockDate);
    expect(logInstance).toBeDefined();
  })

  it("should format date to dd/mm/yyyy", () => {
    const logInstance = new Log(0, 0, mockDate);
    expect(logInstance.formatDate()).toBe('22/05/2023');
  })

  it("should format number with 2 decimal places", () => {
    const logInstance = new Log(1000, 0, mockDate);
    expect(logInstance.credit).toEqual('1000.00');
  })

});