var fetchData = (function() {
	'use strict';

	function fetchData (url, method, callback) {
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if(xhr.readyState === 4 && xhr.status === 200) {
				callback(JSON.parse(xhr.responseText));
			}
		};

		xhr.onerror = function(error) {
			console.log('Something went wrong');
		}

		xhr.open(url, method, true);
		xhr.send();
	}

	return fetchData;
})()