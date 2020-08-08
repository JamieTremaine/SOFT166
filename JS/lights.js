const DefaultColours = [0,0,0,0,0];
const Protanopia     = [1,0,0,0,0];
const Deuteranopia   = [2,0,0,0,0];
const Tritanopia     = [3,0,0,0,0]

var LightColours = DefaultColours;


function PickCombo(){
    /* Will pick which tiles will change colour and in what order */

}

/* changed light to on and after x time off */
function ToggleLight(LightLocation) {
    var getState = $.getJSON(BuildLightURI(element), function (data)
    {
        var lightState = {"on" : true};

        $.ajax({
            url: BuildLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}

function ToggleAllLights(Colour){

}

function BuildLightURI(element)
{
    var BaseURI = "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/";
    return BaseURI + element.attr("id")+"/";
}

function PlaySequence(){
    for (var i = 0; i < GameInstance.seqence.length; i++) {
        var LightID = GameInstance.seqence[i];
        ToggleLight(LightID, LightColours[i]);
    }
}


function EndOfSequence(){


    return true;
}

function WinRoundEffects(){

}

