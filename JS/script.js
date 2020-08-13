function PlayButtonClick() {
    FadeEffects();
    StartGame();
}

function FadeEffects(){
    $('#play-btn').fadeOut('slow', function() {
        $(".logo").animate({marginTop: "0%"});
        $('.grid-col').fadeIn("slow");
    });
}

function UncheckOtherSettings(ID){
    switch(ID){
        case "none":
            document.getElementById("protanopia").checked = false;
            document.getElementById("deuteranopia").checked = false;
            document.getElementById("tritanopia").checked = false;

            LightColoursHue.Colours = DefaultColoursHue;
            LightColoursHEX = DefaultColoursHex;

            break;

        case "protanopia":
            document.getElementById("deuteranopia").checked = false;
            document.getElementById("tritanopia").checked = false;

            LightColoursHue.Colours = ProtanopiaHue;
            LightColoursHEX = ProtanopiaHex;
            break;

        case "deuteranopia":
            document.getElementById("protanopia").checked = false;
            document.getElementById("tritanopia").checked = false;

            LightColoursHue = DeuteranopiaHue;
            LightColoursHEX = DeuteranopiaHex;
            break;

        case "tritanopia":
            document.getElementById("protanopia").checked = false;
            document.getElementById("deuteranopia").checked = false;

            LightColoursHue = TritanopiaHue;
            LightColoursHEX = TritanopiaHex;
            break;
    }
}
function ToggleGrid(ID, type) {
    ID = "#"+ID;

    if(type == "correct"){
        var Colour =  LightColoursHEX[GameInstance.PosInSequence];
        $( ID ).animate( {backgroundColor: Colour}, "slow" ); /* Background colour animations provided by JQuery colour/ Full reference in file*/
        $( ID ).animate( {backgroundColor: "white"}, "slow" );
    }
    else{
        ToggleAllPageGrids("red")
    }

}
function ToggleAllPageGrids(Colour){
    $( ".grid-item" ).animate( {backgroundColor: Colour}, "slow" );
    $( ".grid-item" ).animate( {backgroundColor: "white"}, "slow" );

}

function DisableGrid(){
    $(".grid-item").unbind("click");
}

function ProcessUserGuess(element){
    var GuessID = element.getAttribute("id");
    var CorrectGuess = CheckGuess(GuessID);

    if (CorrectGuess)
    {
        ToggleGrid(GuessID, "correct");
        ToggleLight(GuessID, LightColoursHue[GameInstance.PosInSequence]);
        GameInstance.PosInSequence++;
    }
    else{
        ToggleGrid(GuessID, "wrong");
        /*ToggleAllLight(GuessID, "insertredhuecolour")*/
    }

    if(EndOfSequence() == true) {
        WinRoundEffects();
    }
    else{return;}

    if(GameInstance.Round === 3) /*if is last round*/
    {
        DisableGrid();
        PlayEndEffects();
    }
    else { StartNextRound(); }
}

$(document).ready(function () {

    $(".flippable").click(function(){
        $(this).toggleClass("flip");
    });

    $("#play-btn").click(function(){
        PlayButtonClick();
    });

    $(".grid-item").click(function() {
        ProcessUserGuess(this);
    });

    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            UncheckOtherSettings(this.id);
            /*SetLightColours(ID);*/
        }
        else if($(this).prop("checked") == false){
            UncheckOtherSettings("none");
        }
    });
});
