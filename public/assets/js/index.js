$("#where").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

       var city = $("#city").val().trim();
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