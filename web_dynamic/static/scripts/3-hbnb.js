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
    $("h4").text(amenities.join(', '));
  });
  $.ajax({
    type: "POST",
    url: " http://0.0.0.0:5001/api/v1/places_search/",
    data: "{}",
    success: function (places_json) {
      let places = JSON.parse(places_json)
      for (var place in places){

      }
      
    }
  });


	$.get("http://0.0.0.0:5001/api/v1/status/", function (data, myStatus) {
		if (myStatus == 'success')
			$("div#api_status").addClass('available');
		else
			$("div#api_status").removeClass('available');
	});
});
