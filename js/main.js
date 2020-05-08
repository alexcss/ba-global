;(function() {
	"use strict";
	
	const menuToggle = document.querySelectorAll('.ba-menu-toggle');
	const mainContent = document.querySelector('.ba-main-content');

	menuToggle.forEach(element => {

		element.addEventListener('click', () => {
			mainContent.classList.toggle('shifted');
		})

	});


})();

