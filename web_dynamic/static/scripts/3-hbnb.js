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
    success: function (places_json) {
        $('SECTION.places').append(places_json.map(place =>{
          return `<ARTICLE>
          <DIV class="title">
            <H2>${place.name}</H2>
            <DIV class="price_by_night">
              ${place.price_by_night}
            </DIV>
          </DIV>
          <DIV class="information">
            <DIV class="max_guest">
              <I class="fa fa-users fa-3x" aria-hidden="true"></I>
              </BR>
              ${place.max_guest} Guests
            </DIV>
            <DIV class="number_rooms">
              <I class="fa fa-bed fa-3x" aria-hidden="true"></I>
              </BR>
              ${place.number_rooms} Bedrooms
            </DIV>
            <DIV class="number_bathrooms">
              <I class="fa fa-bath fa-3x" aria-hidden="true"></I>
              </BR>
              ${place.number_bathrooms} Bathrooms
            </DIV>
          </DIV>
          <DIV class="description">
            ${place.description}
          </DIV>
        </ARTICLE>`;
        }))
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
