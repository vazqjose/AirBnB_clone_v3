$(document).ready(function () {

let amenities = [];

$(':checkbox').change(function() {

	let name = $(this).attr("data-name");

	if (this.checked)
	{
		if (amenities.length > 0)
			amenities.push(', ' + name);
		else
			amenities.push(name);
	}
	else 
	{
		amenities.splice( $.inArray(name, amenities), 1 );
	}
	$("h4").html(amenities);
	console.log(amenities);
	});
});
