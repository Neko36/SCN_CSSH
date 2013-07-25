// All HTML-Files only call functions from this file
(function(MYSAP, $, undefined) {
	
	MYSAP.submitPerson = function(){
		
		// Read data from DOM
		var firstName = $('#input_firstname').val();
		var lastName  = $('#input_lastname').val();
		var age	      = $('#input_age').val();
				
		// Create new object
		var person = new MYSAP.Person(firstName, lastName, age);
		
		// Call instance method
		person.log();
				
		// Write to SessionStorage
		MYSAP.SessionManager.setPerson('person', person);
	};
	
	MYSAP.readPerson = function(){
		
		// Read person from SessionStorage
		var person = MYSAP.SessionManager.getPerson('person');
		
		// If person is not null...
		if(person){
			
			// Call instance method
			person.log();
		
			// Write data to DOM
			$('#input_firstname').html(person.firstName);
			$('#input_lastname').html(person.lastName);
			$('#input_age').html(person.age);	
			
		}else{
			// Show warning
			$('.alert-block').show();
		}
	}		
	
	MYSAP.clearPerson = function(){
		// Clear person from SessionStorage
		MYSAP.SessionManager.clearPerson();
		// Reload current location
		location.reload();
	}	

}(window.MYSAP = window.MYSAP || {}, jQuery));