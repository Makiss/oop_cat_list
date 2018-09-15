(function() {
	'use strict';

	function createCats(cats) {
		var catsContainer = document.querySelector('.cat-list');
		var fragment = document.createDocumentFragment();

		cats.forEach(function(cat) {
			var catInstance = new Cat(cat.name, cat.image);
			var catHtml = catInstance.render();

			fragment.appendChild(catHtml);
		});

		catsContainer.appendChild(fragment);
	}

	function init() {
		fetchData('GET', GET_CATS_URL, createCats);
	}

	init();
})()