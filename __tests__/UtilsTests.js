const Utils = require('../src/utils');

describe("test stringFill()", () => {
    // 9 chars is desired length
    var tooLongString = "toooooooLong";
    var sameLengthString = "justRight";
    var shortString = "short";
    var expectedOutputLeft = "    short";
    var expectedOutputRight = "short    ";

    describe("ensure errors are thrown/not thrown properly", () => {

        test("throws error when inputString longer than outputLength", () => {
            expect(()  => {Utils.stringFill(tooLongString, " ", "fromLeft", 9)}).toThrow();
        });

        test("throws error when outputLength less than 0", () => {
            expect(()  => {Utils.stringFill(tooLongString, " ", "fromLeft", -1)}).toThrow();
        });

        test("throws error when fillChar is empty string", () => {
            expect(()  => {Utils.stringFill(sameLengthString, "", "fromLeft", 9)}).toThrow();
        });

        test("throws error when fillChar is longer than one character", () => {
            expect(()  => {Utils.stringFill(sameLengthString, "12", "fromLeft", 9)}).toThrow();
        });
    });

    describe("ensure filled strings are returned properly", () => {
        
        test("returns inputString because inputString.length == outputLength", () => {
            expect(Utils.stringFill(sameLengthString, " ", "fromLeft", 9)).toBe(sameLengthString);
        });

        test("returns left-filled string", () => {
            expect(Utils.stringFill(shortString, " ", "fromLeft", 9)).toBe(expectedOutputLeft);
        });

        test("returns right-filled string", () => {
            expect(Utils.stringFill(shortString, " ", "fromRight", 9)).toBe(expectedOutputRight);
        });
    });
    
});

describe("ensure checkRequiredFields() throws errors properly", () => {

    var fields = {
        testField: {
            required: true,
            position: 1, // arbitrary
            length: 1, // arbitrary
            patterm: "/[0-9\w]/", // arbitrary
            value: ""
        }
    }

    beforeEach(() => {
        fields.testField.value = "not empty";
    });

    test("does not throw error when required field value provided", () => {
        expect(() => {Utils.checkRequiredFields(fields)}).not.toThrow();
    });

    test("does not throw error when required field value is empty string", () => {
        fields.testField.value = "";
        expect(() => {Utils.checkRequiredFields(fields)}).not.toThrow();
    });

    test("does not throw error when required field value is 0", () => {
        fields.testField.value = 0;
        expect(() => {Utils.checkRequiredFields(fields)}).not.toThrow();
    });

    test("throws error when required field value is null", () => {
        fields.testField.value = null;
        expect(() => {Utils.checkRequiredFields(fields)}).toThrow();
    });

    test("throws error when required field value is undefined", () => {
        fields.testField.value = undefined;
        expect(() => {Utils.checkRequiredFields(fields)}).toThrow();
    });
});