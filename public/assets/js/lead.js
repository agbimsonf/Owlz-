$(".contactPromoter").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var PromoterId = $(this).data("id");
    var start_date =  $("#start_date"+PromoterId).val().trim();
    var end_date = $("#end_date"+PromoterId).val().trim();
    var guests= $("#guests"+PromoterId).val().trim();
    var occasion= $("#occasion"+PromoterId).val().trim();
    var message = $("#message"+PromoterId).val().trim();
    var email_client = $("#email_client"+PromoterId).val().trim();

    var leads = {
      start_date: start_date,
      end_date: end_date,
      guests: guests,
      occasion: occasion,
      message: message,
      email_client: email_client,
      PromoterId: PromoterId
    };
    $("#start_date,#end_date,#guests,#occasion,#message,#email_client").val("")
    console.log(leads);

    // Send the PUT request.
    $.ajax("/api/leads",{
      type: "POST",
      data: leads
    }).then(
      function(dbleads) {
        console.log("updated", dbleads);
        //window.location.href = `/`;
        alert("Your message has been sent")
        //location.reload();
      }
    );

});
