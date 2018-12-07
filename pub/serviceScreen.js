function screen(){
    $("#haircutScreen").show();
    $("#stylingScreen").hide();
    $("#waxingScreen").hide();
    $("#otherScreen").hide();


    $("#haircutButton").click(function(){
        $("#haircutScreen").show();
        $("#stylingScreen").hide();
        $("#waxingScreen").hide();
        $("#otherScreen").hide();
    });

    $("#stylingButton").click(function(){
        $("#haircutScreen").hide();
        $("#stylingScreen").show();
        $("#waxingScreen").hide();
        $("#otherScreen").hide();
    });

    $("#waxingButton").click(function(){
        $("#haircutScreen").hide();
        $("#stylingScreen").hide();
        $("#waxingScreen").show();
        $("#otherScreen").hide();
    });

    $("#otherButton").click(function(){
        $("#haircutScreen").hide();
        $("#stylingScreen").hide();
        $("#waxingScreen").hide();
        $("#otherScreen").show();
    });
}



$(screen);