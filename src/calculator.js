class Calculator {

	constructor () {
		this.last_value = 0;
		this.arr_slots  = [];
		this.values 	= [];
	}

	add (...nums) {
		let sum = 0;

		nums.forEach(num => {
			if (isNaN(num)) {
				num = this.string_slot(num);
			}
			sum += num;
		});

		this.values.push(sum);
		this.last_value = sum;
		
		return sum;
	}

	// This function check if the string provided has certain keywords 
	string_slot (str) {
		if (str == 'LAST') {
			return this.last();
		} 

		if (str.includes('SLOT_') && !isNaN(str[str.length -1])) {
			// Return the last value of the string because it's a number that will point to the slot
			let slot_number = str[str.length -1];
			return this.arr_slots[slot_number];
		}

		return 0;
	}

	multiply (...nums) {
		let total = 1;

		nums.forEach(num => {
			if (isNaN(num)) {
				num = this.string_slot(num);
			}
			total *= num;
		});

		this.values.push(total);
		this.last_value = total;
		
		return total;
	}

	set_slot (slot_number) {
		this.arr_slots[slot_number] = this.last_value;
	}

	get_slot (slot_number) {
		return this.arr_slots[slot_number];
	}

	last () {
		return this.last_value;
	}

}

module.exports = { Calculator }