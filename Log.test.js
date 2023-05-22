const Log = require("./Log");

describe("Log class", () => {
  it("should construct a log instance", () => {
    const mockDate = new Date('Mon May 22 2023 13:48:20 GMT+0100 (British Summer Time)');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    const logInstance = new Log(0, 0, 0, mockDate);
    expect(logInstance).toBeDefined();
  })
});