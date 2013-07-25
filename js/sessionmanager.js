// SessionManager
( function(MYSAP, $, undefined) {

	MYSAP.SessionManager = function() {};

	MYSAP.SessionManager.getPerson = function(key) {

		var person;
		
		// Get item over SessionStorage API
		var person_storage = sessionStorage.getItem(key);
		
		if (person_storage) {
			// Parse JSON to object
			person_storage = JSON.parse(person_storage);
			// Create new object
			person = new MYSAP.Person(person_storage.firstName, person_storage.lastName, person_storage.age);
		}

		return person;
	};

	MYSAP.SessionManager.setPerson = function(key, person) {

		if (person) {
			// Serialize Object to JSON
			var person_storage = JSON.stringify(person);
			// Set item over SessionStorage API
			sessionStorage.setItem(key, person_storage);
		}
	};

	MYSAP.SessionManager.clearPerson = function() {
		sessionStorage.removeItem('person');
	}
}(window.MYSAP = window.MYSAP || {}, jQuery));