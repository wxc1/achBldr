const Validation = require('../src/Validation');
const FileHeader = require('../src/file/FileHeader')

describe("ensures FileHeader validators return true for valid field values", () => {

  var goodFileHeader;

  beforeEach(() => {
    const goodStarter = {
      immediateDestination: "092905249",
      immediateOrigin: "092905249"
    };
    goodFileHeader = new FileHeader(goodStarter);
  })

  test("ensures validation returns true for good immediate destination", () => {
    expect(Validation.validateImmediateDestinationOrOrigin(goodFileHeader.fields.immediateDestination)).toBe(true);
  });

  test("ensures validation returns true for good immediate origin", () => {
    expect(Validation.validateImmediateDestinationOrOrigin(goodFileHeader.fields.immediateOrigin)).toBe(true);
  });

});

describe("ensures FileHeader validators return false for invalid field values", () => {

  var shortFileHeader;
  var textFileHeader;

  beforeEach(() => {
    const shortStarter = {
      immediateDestination: "92905249",
      immediateOrigin: "92905249"
    };

    const textStarter = {
      immediateDestination: " a!01J-30 ",
      immediateOrigin: " a!01J-30 "
    };

    shortFileHeader = new FileHeader(shortStarter);
    textFileHeader = new FileHeader(textStarter);
  })

  test("ensures validation returns false for short immediate destination", () => {
    expect(Validation.validateImmediateDestinationOrOrigin(shortFileHeader.fields.immediateDestination)).toBe(false);
  });

  test("ensures validation returns false for short immediate origin", () => {
    expect(Validation.validateImmediateDestinationOrOrigin(shortFileHeader.fields.immediateOrigin)).toBe(false);
  });

  test("ensures validation returns false for text in immediate destination", () => {
    expect(Validation.validateImmediateDestinationOrOrigin(textFileHeader.fields.immediateDestination)).toBe(false);
  });

  test("ensures validation returns false for text in immediate origin", () => {
    expect(Validation.validateImmediateDestinationOrOrigin(textFileHeader.fields.immediateOrigin)).toBe(false);
  });

});