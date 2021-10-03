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
    $(".amenities h4").text(amenities.join(', '));
  });
  $.ajax({
    type: "POST",
    url: " http://0.0.0.0:5001/api/v1/places_search/",
    data: "{}",
    contentType: 'application/json',
    dataType:'json',
    success: function (places_json) {
        $('SECTION.places').append(places_json.map(place =>{
          return `<article>
          <div class="title_box">
            <h2>${place.name}</h2>
            <div class="price_by_night">${ place.price_by_night }</div>
          </div>
          <div class="information">
            <div class="max_guest">${ place.max_guest } Guest{% if place.max_guest != 1 %}s{% endif %}</div>
                  <div class="number_rooms">${ place.number_rooms } Bedroom{% if place.number_rooms != 1 %}s{% endif %}</div>
                  <div class="number_bathrooms">${ place.number_bathrooms } Bathroom{% if place.number_bathrooms != 1 %}s{% endif %}</div>
          </div>
          <div class="user">
                  <b>Owner:</b> ${ place.user} ${ place.user}
                </div>
                <div class="description">
            {{ place.description | safe }}
                </div>
        </article>`;
        }))
    }
  });

	$.get("http://0.0.0.0:5001/api/v1/status/", function (data, myStatus) {
		if (myStatus == 'success')
			$("div#api_status").addClass('available');
		else
			$("div#api_status").removeClass('available');
	});
});
