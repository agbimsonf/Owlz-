$("#contactPromoter").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var id = $(this).data("id");
    var start_date =  $("#start_date").val().trim();
    var end_date = $("#end_date").val().trim();
    var guests= $("#guests").val().trim();
    var occasion= $("#occasion").val().trim();
    var message = $("#message").val().trim();
    var email_client = $("#email_client").val().trim();

    var leads = {
      PromoterId: id,
      start_date: start_date,
      end_date: end_date,
      guests: guests,
      occasion: occasion,
      message: message,
      email_client: email_client
    };

    console.log(updatedClient);
    // Send the PUT request.
    $.ajax("/api/leads/"+ id, {
      type: "POST",
      data: leads
    }).then(
      function(dbleads) {
        console.log("updated", dbleads);
        window.location.href = `index`;
      }
    );

});