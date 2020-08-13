const DefaultColoursHue = [[26000,255],[50000,255],[47000,255],[9000,255],[12500,255]];
const ProtanopiaHue     = [[20000,255],[50000,200],[45500,255],[9000,100],[13500,235]];
const DeuteranopiaHue   = [[10000,235],[40000,225],[45500,255],[8700,255],[39000,255]];
const TritanopiaHue     = [[21000,255],[50500,255],[45000,205],[9100,255],[21500,205]]

const DefaultColoursHex = ["#008000","#9400D3","#0000FF","#FFA500","#FFFF00"];
const ProtanopiaHex     = ["#4CFA00","#E6B4FF","#005CC2","#FFC587","#E5E500"];
const DeuteranopiaHex   = ["#FFCF00","#00d3d3","#0000ff","#FFBD00","#00d3d3"];
const TritanopiaHex     = ["#6A992E","#DB00F5","#99EEFF","#FF8F00","#B3B300"]

var LightColoursHue = DefaultColoursHue;
var LightColoursHEX = DefaultColoursHex;

function SetupLights(){
    for (let LightLocation=1; LightLocation < 7; LightLocation++){
        var lightState = {"on" : false, "bri" : 200};

        $.ajax({
            url: BuildLightURI(LightLocation) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    }
}

function ToggleLight(LightLocation, LightColour) {
    /*Light on*/
    var lightJSON = {"on" : true, "hue" : LightColour[0], "sat" : LightColour[1] };

    $.ajax({
        url: BuildLightURI(LightLocation) + "state/",
        type: "PUT",
        data: JSON.stringify(lightJSON)
    });

    /*Light off*/
    setTimeout(function() {
        var lightState = {"on" : false};

        $.ajax({
            url: BuildLightURI(LightLocation) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        });
        },2000)
}
function ToggleAllLights(Colour){

    for (let LightLocation=1; LightLocation < 7; LightLocation++){
        /*Light on*/
        var lightState = {"on" : true, "hue" : LightColour[0], "sat" : LightColour[1]};

        $.ajax({
            url: BuildLightURI(LightLocation) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        });

        /*Light off*/
        setTimeout(function() {
            var lightState = {"on" : false};

            $.ajax({
                url: BuildLightURI(LightLocation) + "state/",
                type: "PUT",
                data: JSON.stringify(lightState)
            });
        },2000)
    }
}

function BuildLightURI(LightID)
{
    var BaseURI = "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/";
    return BaseURI + LightID+"/";
}

function PlaySequence(){
    for (let i = 0; i < GameInstance.Seqence.length; i++) {
        setTimeout( function () {
            var LightID = GameInstance.Seqence[i];
            ToggleLight(LightID, LightColoursHue[i]);
        },i*2000)

    }
}

