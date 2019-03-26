// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#CreatePromoter").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newPromoter = {
            first_name: $("#firstName").val().trim(),
            last_name: $("#lastName").val().trim(),
            handle: $("#handle").val().trim(),
            about:$("#about").val().trim(),
            city:$("#city").val().trim(),
            language:$("#language").val().trim(),
            phone_number: $("#phone").val().trim(),
            email: $("#email").val().trim(),
            instagram:$("#insta").val().trim(),
        };
        console.log(newPromoter);
        // Send the POST request.
        $.ajax("/api/promoters", {
            type: "POST",
            data: newPromoter
        }).then(
            function(dbPromoter) {
            console.log("added new Promoter");  
            window.location.href = `/api/promoters/${dbPromoter.id}`;
            }
        );
    });
    $(".updatePromoter").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var id = $(this).data("id");
        var first_name =  $("#firstName").val().trim();
        var last_name = $("#lastName").val().trim();
        var phone_number= $("#phone").val().trim();
        var email= $("#email").val().trim();

        if (first_name === ""){
          first_name = $(this).data("first_name");
          console.log(first_name);
        } 
        if (last_name === ""){
          last_name = $(this).data("last_name");
        } 

        if (phone_number === ""){
          phone_number = $(this).data("phone");
        } 

        if (email === ""){
          email = $(this).data("email");
        }
        
        var updatedPromoter = {
          id: id,
          first_name: first_name,
          last_name: last_name,
          phone_number: phone_number,
          email: email
        };

        console.log(updatedPromoter);
        // Send the PUT request.
        $.ajax("/api/promoters/", {
          type: "PUT",
          data: updatedPromoter
        }).then(
          function(dbPromoter) {
            console.log("updated", dbPromoter);
            location.reload();
          }
        );

    });
});
