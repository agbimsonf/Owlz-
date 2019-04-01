// Make sure we wait to attach our handlers until the DOM is fully loaded.
var profile_pic = "";

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
            profile_pic: profile_pic,
        };
        console.log(newPromoter);
        // Send the POST request.
        $.ajax("/api/promoters", {
            type: "POST",
            data: newPromoter
        }).then(
            function(dbPromoter) {
            console.log("added new Promoter");  
            window.location.href = `/promoters/${dbPromoter.id}`;
            }
        );
    });
    $(".updatePromoter").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var id = $(this).data("id");
        var first_name =  $("#firstName").val().trim();
        var last_name = $("#lastName").val().trim();
        var handle = $("#handle").val().trim();
        var about = $("#about").val().trim();
        var city = $("#city").val().trim();
        var language = $("#language").val().trim();
        var phone_number= $("#phone").val().trim();
        var email= $("#email").val().trim();
        var insta = $("#insta").val().trim();

        
        var updatedPromoter = {
          id: id,
          first_name: first_name,
          last_name: last_name,
          handle:handle,
          about:about,
          city:city,
          language:language,
          phone_number: phone_number,
          email: email,
          instagram:insta
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

  $('#upload_widget').cloudinary_upload_widget({ cloudName: "gsafl", uploadPreset: "m48qyart", sources: [ 'local', 'url', 'instagram']},(error, result) => {
    if (result.event === "success") { //if (result && result.event === "success")
    console.log(result)
    profile_pic = result.info.url
    };
    console.log(`pic url ${profile_pic}`)
    }
  );
