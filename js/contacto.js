$( function() {
    $("#opciones").change( function() {
        if ($(this).val() === "compra") {
            $("#codigo").prop("disabled", false);
            $("#opcionesA").prop("disabled", false);
        } else {
            $("#").prop("disabled", true);
            
        }
    });
});