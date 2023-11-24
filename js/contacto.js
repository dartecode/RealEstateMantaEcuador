$( function() {
    $("#opciones").change( function() {
        
            if ($(this).val() === "compra") {
                $("#codigo").prop("disabled", false);
                $("#opcionesA").prop("disabled", false);
            } else {
                $("#codigo").prop("disabled", true);
                $("#opcionesA").prop("disabled", true);
            }
        
    });
});