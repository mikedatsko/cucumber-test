
function aTest() {
	this.World = require("../support/bdd.js").World;

	this.givenNumber = 0;

	this.Given(/^a variable set to (\d+)$/, function(number, next) {
		this.givenNumber = parseInt(number);
		next();
	});

	this.When(/^I increment the variable by (\d+)$/, function (number, next) {
		this.givenNumber = this.givenNumber + parseInt(number);
		next();
	});

	this.Then(/^the variable should contain (\d+)$/, function (number, next) {
		if (this.givenNumber != number)
			throw(new Error("This test didn't pass, givenNumber is " + this.givenNumber + " expected 0"));
		next();
	});
}

module.exports = aTest;