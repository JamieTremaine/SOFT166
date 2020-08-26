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

$(document).ready(function () {
    $(".flippable").click(function(){
        $(this).toggleClass("flip");
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