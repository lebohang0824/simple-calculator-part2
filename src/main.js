class Calculator {

	constructor () {
		this.last_value = 0;
		this.values = [];
	}

	add (...nums) {
		let total = 0;

		nums.forEach(num => {
			if (isNaN(num)) {
				num = this.string_slot(num);
			}
			total += num;
		});

		this.values.push(total);
		this.last_value = total;
		
		return total;
	}

	// This function check if the string provided has certain keywords 
	string_slot (str) {
		if (str == 'LAST') {
			return this.last();
		} 

		if (str.includes('SLOT_')) {
			// Return the last value of the string because it's a number that will point to the slot
			let slot_number = str[str.length -1];
			return this.values[slot_number -1];
		}

		return 0;
	}

	multiply (...nums) {
		let total = 1;

		nums.forEach(num => {
			if (num == 'LAST') {
				num = this.last();
			}
			total *= num;
		});

		this.values.push(total);
		this.last_value = total;

		return total;
	}

	set_slot (slot_number) {
		this.last_value = this.values[slot_number -1];
	}

	get_slot (slot_number) {
		return this.values[slot_number -1];
	}

	last () {
		return this.last_value;
	}

}

module.exports = { Calculator }