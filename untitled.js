// Problem one
// I'm guessing that i need to write a counting function that takes the input number and counts it. and with every count adds a 1 or 0 to the string.
// So what i am thinking is that i need to create an array with 1 and 0 and have it count through that and each one it counts to the string.
 

// function stringy(size) {
// 	this.size = ['1', '0'];
// 	for (var i = 0; i < this.size.length; i++) {
// 		this.size[i]  
// 	}
// }

// console.log(this.size)

// Problem two
// I am thinking that i need to write a function that takes the integer, turns it into an array and then writes it out backwars.
// so that would mean making an array out of what was put in then taking that array and looping through it backwards

function backwards(int) {
	let numsAsString = int.toString();
	let newArr = [];
	for (var i = numsAsString.length - 1; i >= 0; i--) {
		newArr.push(parseInt(numsAsString[i]));
	}
	return newArr;
}

console.log(backwards(389274927));

// Problem three
// I know that i need to take the first number and add it with one then take the answer and add it to the provious number. then continue taking the answer and adding the previous answer.

class Adder {
	constructor(n) {
		this.n = n;
		this.currentValue = 1;
	}

	add () {
		this.currentValue = this.currentValue + this.n;
	}

	getCurrentValue() {
		return this.currentValue;
	}
}

var addthis = new Adder(1);
addthis.add();
console.log(addthis.getCurrentValue());
addthis.add();
console.log(addthis.getCurrentValue());
addthis.add();
console.log(addthis.getCurrentValue());
addthis.add();
console.log(addthis.getCurrentValue());