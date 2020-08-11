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
            LightColoursCIE = DefaultColoursCIE;
            LightColoursHEX = DefaultColoursHex;
            break;

        case "protanopia":
            document.getElementById("deuteranopia").checked = false;
            document.getElementById("tritanopia").checked = false;
            LightColoursCIE = ProtanopiaCIE;
            LightColoursHEX = ProtanopiaHex;
            break;

        case "deuteranopia":
            document.getElementById("protanopia").checked = false;
            document.getElementById("tritanopia").checked = false;
            LightColoursCIE = DeuteranopiaCIE;
            LightColoursHEX = DeuteranopiaHex;
            break;

        case "tritanopia":
            document.getElementById("protanopia").checked = false;
            document.getElementById("deuteranopia").checked = false;
            LightColoursCIE = TritanopiaCIE;
            LightColoursHEX = TritanopiaHex;
            break;
    }
}
function ToggleGrid(ID, type) {
    ID = "#"+ID;

    if(type == "correct"){
        var Colour =  LightColoursHEX[GameInstance.NextInSequence];
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
function ResetGrid(){
    for(var i=1; i <10; i++){
        document.getElementById(i).style.backgroundColor = "white";
    }
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
        ToggleLight(GuessID, LightColoursCIE[GameInstance.NextInSequence]);
        GameInstance.NextInSequence++;
    }
    else{
        ToggleGrid(GuessID, "wrong");
        ToggleLight(GuessID, "red")
    }

    if(EndOfSequence() == true) {
        /*WinRoundEffects();*/
    }
    else{
        return;
    }

    if(WasLastRound())
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
        if($(this).prop("checked") === true){
            UncheckOtherSettings(this.id);
            /*SetLightColours(ID);*/
        }
        else if($(this).prop("checked") == false){
            UncheckOtherSettings("none");
        }
    });
});
