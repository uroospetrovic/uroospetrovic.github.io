// Hamburger meni za male ekrane
document.addEventListener('DOMContentLoaded', function () {
	var btn = document.getElementById('menu-toggle');
	var header = document.getElementById('header-content');
	if (!btn || !header) return;

	btn.addEventListener('click', function () {
		var open = header.classList.toggle('menu-open');
		btn.setAttribute('aria-expanded', open ? 'true' : 'false');
	});

	// zatvori meni kad se klikne na link
	var links = document.querySelectorAll('#meni a');
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function () {
			header.classList.remove('menu-open');
			btn.setAttribute('aria-expanded', 'false');
		});
	}
});
