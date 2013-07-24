// Model Person
(function(MYSAP, $, undefined) {

	// Constructor
	MYSAP.Person = function(firstName, lastName, age){
		
		this.firstName = firstName;
		this.lastName  = lastName;
		this.age	   = age;
	};
		
	MYSAP.Person.constructor = MYSAP.Person;
	
	// Sample instance method
	MYSAP.Person.prototype.log = function(){
	
		console.log(this.firstName + ' ' + this.lastName + ', ' + this.age + ' years');
	};			

}(window.MYSAP = window.MYSAP || {}, jQuery));

