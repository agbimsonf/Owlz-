$("#city").keypress(function(event) {
    if (event.which == 13 ) {
        event.preventDefault();
    
       var search = $("#city").val().trim();
       var city = search.split(",",1)
       console.log(city)
    // Send the GET request.
    $.ajax("/listPromoter/"+ city , {
        type: "GET",
    }).then(
        function(data) {
        console.log(data);
        window.location.href = `listPromoter/${city}`
        }
    ); 
    }
});

