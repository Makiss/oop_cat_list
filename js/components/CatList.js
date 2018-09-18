var CatList = (function() {
	'use strict';

	function CatList() {
		fetchData('GET', GET_CATS_URL, CatList.prototype.render);
	}

	CatList.prototype.render = function(cats) {
		var catsContainer = document.querySelector('.cat-list');
		var addCatFormModal = document.querySelector('.modal');
		var addCatForm = addCatFormModal.querySelector('form');
		var imageUpload = addCatForm.querySelector('.image-upload');
		var addCatBtn = document.getElementById('add-cat');
		var closeCatFormBtn = document.getElementById('close-form-btn');
		var fragment = document.createDocumentFragment();

		addCatBtn.addEventListener('click', function(evt) {
			evt.preventDefault();

			addCatFormModal.classList.add('modal--open');
			imageUpload.addEventListener('change', handleImages);
			addCatForm.addEventListener('submit', CatList.prototype.createCat);
		});

		closeCatFormBtn.addEventListener('click', function(evt) {
			evt.preventDefault();

			addCatFormModal.classList.remove('modal--open');
			imageUpload.removeEventListener('change', handleImages);
			addCatForm.removeEventListener('submit', CatList.prototype.createCat);
		});

		cats.forEach(function(cat) {
			var catInstance = new Cat(cat.id, cat.name, cat.image);
			var catHtml = catInstance.render();

			fragment.appendChild(catHtml);
		});

		catsContainer.appendChild(fragment);
	}

	CatList.prototype.createCat = function(evt) {
		evt.preventDefault();

		console.log(evt);
	};

	function handleImages() {
		var form = this.parentNode;
		var imageFile = this.files[0];
		var imagePreview;

		if (imageFile.type.startsWith('image/')){
			imagePreview = document.createElement('img');
			imagePreview.width = 200;
			imagePreview.height = 200;
			form.insertBefore(imagePreview, this);

			var reader = new FileReader();
			reader.onloadend = function(evt) {
				imagePreview.src = reader.result;
				CatList.prototype.image = reader.result;
			};
			reader.readAsDataURL(imageFile);
		}
	}

	return CatList;
})();