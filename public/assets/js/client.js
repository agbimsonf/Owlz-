// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#CreateClient").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newClient = {
            first_name: $("#firstName").val().trim(),
            last_name: $("#lastName").val().trim(),
            phone_number: $("#phone").val().trim(),
            email: $("#email").val().trim()
        };
        console.log(newClient);
        // Send the POST request.
        $.ajax("/api/clients", {
            type: "POST",
            data: newClient
        }).then(
            function(dbClient) {
            console.log("added new client");  
            window.location.href = `/api/clients/${dbClient.id}`;
            }
        );
    });
    $(".updateClient").on("click", function(event) {
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
        
        var updatedClient = {
          id: id,
          first_name: first_name,
          last_name: last_name,
          phone_number: phone_number,
          email: email
        };

        console.log(updatedClient);
        // Send the PUT request.
        $.ajax("/api/clients/", {
          type: "PUT",
          data: updatedClient
        }).then(
          function(dbClient) {
            console.log("updated", dbClient);
            location.reload();
          }
        );

    });
});
