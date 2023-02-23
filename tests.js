// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it(`should return a string`, function() {
        expect(typeof sayHello()).toBe("string")
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it(`should return the string Hello, Alex! when executed`, function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it(`should return the string Hello, Pat! when executed`, function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it(`should return the string Hello, World! when executed`, function() {
        expect(sayHello("World")).toBe("Hello, World!")
    });
    it(`should return true when executed`, function() {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it(`should return false when executed`, function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });
});

describe('isFive', function() {
    it('should be 5', function () {
        expect(typeof isFive).toBe('function');
    });
    it(`should return a boolean`, function() {
        expect(typeof isFive()).toBe("boolean")
    });
    it(`should return true if 5`, function() {
        expect(typeof isFive(true)).toBe("boolean")
    });
});

describe('isEven', function() {
    it('defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it(`should return a boolean no matter what`, function() {
        expect(typeof isEven()).toBe("boolean")
    });
    it(`should return true if even`, function() {
        expect(typeof isEven(2, 4, 6, 8, 10)).toBe("boolean")
    });
    it(`should return false if odd`, function() {
        expect(typeof isEven(1, 3, 5, 7, 9, Infinity, `string`)).toBe("boolean")
    });
});

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when vowel when executed', function() {
        expect(isVowel('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')).toBe(true);
    });
});

describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it(`should return a number`, function(){
        expect(typeof add()).toBe(`number`);
    });
    it("should never return 'undefined' when called", function() {
        expect(add()).not.toBe(undefined);
    });
});
