$(document).ready(function () {
  const app = 'http://' + window.location.hostname;
  let amenities = [];
  let idArr = [];
  $(':checkbox').change(function () {
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
    dataType: 'json',
    success: postPlaces
  });

  $('button').click(function () {
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      type: 'POST',
      data: JSON.stringify({ 'amenities': Object.amenities }),
      contentType: 'application/json',
      dataType: 'json',
      success: postPlaces

    });
  });


    $.get("http://0.0.0.0:5001/api/v1/status/", function (data, myStatus) {
      if (myStatus == 'success')
        $("div#api_status").addClass('available');
      else
        $("div#api_status").removeClass('available');
    });

  function postPlaces (places_json) {
    $('SECTION.places').empty();
    $('SECTION.places').append(places_json.map(place => {
      return `<article>
    <div class="title_box">
      <h2>${place.name}</h2>
      <div class="price_by_night">${place.price_by_night}</div>
    </div>
    <div class="information">
      <div class="max_guest">${place.max_guest} Guests</div>
            <div class="number_rooms">${place.number_rooms} Bedrooms</div>
            <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
    </div>
          <div class="description">
      ${place.description}
          </div>
  </article>`;
    }))
  }
});