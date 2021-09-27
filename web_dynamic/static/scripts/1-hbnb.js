
$(document).ready(function() {
  let amenities = [];
  let idArr = [];
  $(':checkbox').change(function() {
    let name = $(this).attr("data-name");
    let id = $(this).attr("data-id");
    if (this.checked) {
      amenities.push(name);
      idArr.push(id);
    } else {
      amenities.splice($.inArray(name, amenities), 1);
      idArr.splice($.inArray(id, idArr), 1);
    }
    $(".amenities > h4").text(amenities.join(', '));
  });
});
/*
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
*/
