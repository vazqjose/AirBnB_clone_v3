$(document).ready(function() {

  let amenities = [];

  $(':checkbox').change(function() {

    let name = $(this).attr("data-name");

    if (this.checked) {
      amenities.push(name);
    } else {
      amenities.splice($.inArray(name, amenities), 1);
    }
    $("h4").text(amenities.join(', '));
  });

});
