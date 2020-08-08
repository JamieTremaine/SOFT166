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
            LightColours = DefaultColours;
            break;

        case "protanopia":
            document.getElementById("deuteranopia").checked = false;
            document.getElementById("tritanopia").checked = false;
            LightColours = Protanopia;
            break;

        case "deuteranopia":
            document.getElementById("protanopia").checked = false;
            document.getElementById("tritanopia").checked = false;
            LightColours = Deuteranopia;
            break;

        case "tritanopia":
            document.getElementById("protanopia").checked = false;
            document.getElementById("deuteranopia").checked = false;
            LightColours = Tritanopia;
            break;
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
        ToggleLight(GuessID, LightColours[GameInstance.NextInSequence])
        GameInstance.NextInSequence++;

        if(EndOfSequence()) {
            WinRoundEffects();
        }
    }
    else{
        ToggleLight(GuessID, "red")
        ResetRound();
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
            SetLightColours(ID);
        }
        else if($(this).prop("checked") == false){
            UncheckOtherSettings("none");
        }
    });
});
