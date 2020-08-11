const DefaultColoursCIE = [0,0,0,0,0];
const ProtanopiaCIE     = [1,0,0,0,0];
const DeuteranopiaCIE   = [2,0,0,0,0];
const TritanopiaCIE     = [3,0,0,0,0]

const DefaultColoursHex = ["#008000","#9400D3","#0000FF","#FFA500","#FFFF00"];
const ProtanopiaHex     = [1,0,0,0,0];
const DeuteranopiaHex   = ["#FFFF00","#00d3d3","#0000FF","#FFFF00","#00d3d3"];
const TritanopiaHex     = [3,0,0,0,0]

const RedDefaultHex = "red";
const RedProtanopiaHex = "#b37400";
const RedDeuteranopiaHex = "red";
const RedTritanopiaHex = "red";

var LightColoursCIE = DefaultColoursCIE;
var LightColoursHEX = DefaultColoursHex;

/* changed light to on and after x time off */
function ToggleLight(LightLocation, LightColour) {

    var getState = $.getJSON(BuildLightURI(LightLocation), function (data)
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

function BuildLightURI(LightID)
{
    var BaseURI = "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/";
    return BaseURI + LightID+"/";
}

function PlaySequence(){
    for (var i = 0; i < GameInstance.seqence.length; i++) {
        var LightID = GameInstance.seqence[i];
        ToggleLight(LightID, LightColours[i]);
    }
}

function WinRoundEffects(){
    ToggleAllLights("green");
    ToggleAllPageGrids("green");
}

