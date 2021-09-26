$(document).ready(function() {

  let amenities = [];
	let prettyArr = [];
 
  $(':checkbox').change(function() {

    let name = $(this).attr("data-name");

    if (this.checked) {
      amenities.push(name);
      prettyArr.push(' ' + name);
    } else {
      indexToDel = $.inArray(name, amenities);
      amenities.splice(indexToDel, 1);
      prettyArr.splice(indexToDel, 1);
    }

    $("h4").text(prettyArr);
  });

});

