
function OnPlayButtonClick() {
    FadeEffects();
    StartGame();
}

function FadeEffects(){
    $('#play-btn').fadeOut('slow', function() {
        $(".logo").animate({marginTop: "0%"});
        $('.grid-col').fadeIn("slow");
    });


}


function StartGame(){

}




$(document).ready(function () {

    $("#play-btn").click(function(){
        OnPlayButtonClick();

    });
});
