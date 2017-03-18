$(document).ready(function() {
  console.log("jQuery sourced.");

  $.ajax({
    type: "GET",
    url: "/products",
    success: function(response) {
      console.log(response);
      for(var i = 0; i < response.length; i++) {
        $('#productList').append("<span>Make: " + response[i].make +
                                 ", Model: " + response[i].model + "</span><br>");
      }
    }
  })

});
