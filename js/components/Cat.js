var Cat = (function() {
	'use strict';

	var Cat = function(id, name, image) {
		this.id = id;
		this.name = name;
		this.image = image;
	};

	Cat.prototype.render = function () {
		var catTemplate = document.getElementById('cat');
		var catTemplateCopy = catTemplate.content.cloneNode(
			true
		);

		var catContainer = catTemplateCopy.querySelector('.cat');
		catContainer.dataset.id = this.id;
		var catName = catTemplateCopy.querySelector('.cat__name');
		catName.textContent = this.name;
		var catImage = catTemplateCopy.querySelector('.cat__image');
		catImage.src = 'img/' + this.image;

		return catTemplateCopy;
	};

	return Cat;
})()