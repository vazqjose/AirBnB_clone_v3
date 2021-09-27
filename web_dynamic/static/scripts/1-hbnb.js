$(function () {
	const dictamenities = {};
	const checkboxes = $('input');
	for (const box of checkboxes) {
		box.addEventListener('change', function () {
			if (box.checked) {
				dictamenities[$(box).data('id')] = $(box).data('name');
			} else {
				delete dictamenities[$(box).data('id')];
			}
			let listamenities = Object.values(dictamenities);
			$('DIV.amenities h4').text(listamenities.join(', '));
		});
	}
});