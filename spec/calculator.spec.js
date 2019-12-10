const { Calculator } = require('../src/calculator.js');

describe('Calculator calculator instance.add function', function () {

	let calculatorInstance = new Calculator();
	
	it('Should return 0', function () {
		expect(calculatorInstance.add(0, 0)).toBe(0);
	});

	it('Should return -2', function () {
		expect(calculatorInstance.add(-1, -1)).toBe(-2);
	});

	it('Should return 9', function () {
		expect(calculatorInstance.add(4, 5)).toBe(9);
	});

	it('Should return 10', function () {
		expect(calculatorInstance.add(1, 2, 3, 4)).toBe(10);
	});

	it('Get last value', function () {
		expect(calculatorInstance.add(3, 3)).toBe(6);
		expect(calculatorInstance.last()).toBe(6);
	});

	it('Get slot at position 1', function () {
		expect(calculatorInstance.add(3, 3)).toBe(6);
		calculatorInstance.set_slot(1)
		expect(calculatorInstance.get_slot(1)).toBe(6);
	});

	it('Get last from string', function () {
		expect(calculatorInstance.add(3, 3)).toBe(6);
		expect(calculatorInstance.add("LAST", 4)).toBe(10);	
	});

	it('Get slot string at position 1', function () {
		expect(calculatorInstance.add(3, 3)).toBe(6);
		calculatorInstance.set_slot(1)
		expect(calculatorInstance.add('SLOT_1', 4)).toBe(10);
	});

});

describe('Calculator multiply function', function () {

	let calculatorInstance = new Calculator();

	it('Should return 2', function () {
		expect(calculatorInstance.multiply(1, 2)).toBe(2);
	});

	it('Should return 24', function () {
		expect(calculatorInstance.multiply(1,2,3,4)).toBe(24);
	});

	it('Get last value', function () {
		expect(calculatorInstance.multiply(2, 3)).toBe(6);
		expect(calculatorInstance.last()).toBe(6);
	});

	it('Get slot at position 1', function () {
		expect(calculatorInstance.multiply(2, 3)).toBe(6);
		calculatorInstance.set_slot(1)
		expect(calculatorInstance.get_slot(1)).toBe(6);
	});

	it('Get last from string', function () {
		expect(calculatorInstance.multiply(2, 3)).toBe(6);
		expect(calculatorInstance.multiply("LAST", 2)).toBe(12);	
	});

	it('Get slot string at position 1', function () {
		expect(calculatorInstance.multiply(2, 3)).toBe(6);
		calculatorInstance.set_slot(1)
		expect(calculatorInstance.multiply('SLOT_1', 2)).toBe(12);
	});

});