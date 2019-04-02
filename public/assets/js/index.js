$("#where").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
       var search = $("#city").val().trim();
       var city = '';
       if (search==="miami fl"){
        city = search.split(" ",1)
       }
       else{
        city = search.split(",",1)
       }
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
});

