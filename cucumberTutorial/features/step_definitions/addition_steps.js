const {Before, Given, When, Then} = require('cucumber')
const Calculator = require('../../lib/calculator');

let calculator;

Given('the numbers {int} and {int}',function(x, y) {
	// Write code there that turns the phrase above into concrete actions
	calculator = new Calculator(x,y);
	//callback();
});

When('they are added together', function() {
	// Write code here that turns the phrase above into concrete actions
	//callback(null,'pending');
});

Then('should the result be {int}',function (int) {
	// Write code here that turns the phrase above into concrete actions
	//callback(null,'pending');
});

