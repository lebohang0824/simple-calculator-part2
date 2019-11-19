const { Calculator } = require('../src/main.js');

describe('Calculator calculator_instance.add function', function () {

	let calculator_instance = new Calculator();
	
	it('Should return 0', function () {
		expect(calculator_instance.add(0, 0)).toBe(0);
	});

	it('Should return -2', function () {
		expect(calculator_instance.add(-1, -1)).toBe(-2);
	});

	it('Should return 9', function () {
		expect(calculator_instance.add(4, 5)).toBe(9);
	});

	it('Should return 10', function () {
		expect(calculator_instance.add(1, 2, 3, 4)).toBe(10);
	});

});

describe('Calculator multiply function', function () {

	let calculator_instance = new Calculator();

	it('Should return 2', function () {
		expect(calculator_instance.multiply(1, 2)).toBe(2);
	});

	it('Should return 24', function () {
		expect(calculator_instance.multiply(1,2,3,4)).toBe(24);
	});

});