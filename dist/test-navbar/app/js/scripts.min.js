document.addEventListener('DOMContentLoaded', () => {
	const navbarOpen = document.querySelector('.js-open-nav');
	const navbar = document.querySelector('.js-navbar');
	const navbarClose = document.querySelector('.js-close-nav');
	const navbarOverlay = document.querySelector('.js-overlay');

	if (navbarOpen) {
		navbarOpen.addEventListener('click', () => {
			navbar.classList.add('navbar--show');
			navbarOverlay.classList.add('page-overlay--show');
		});
	}

	if (navbarClose) {
		navbarClose.addEventListener('click', () => {
			navbar.classList.remove('navbar--show');
			navbarOverlay.classList.remove('page-overlay--show');
		});
	}

	if (navbarOverlay) {
		navbarOverlay.addEventListener('click', () => {
			navbar.classList.remove('navbar--show');
			navbarOverlay.classList.remove('page-overlay--show');
		});
	}
});