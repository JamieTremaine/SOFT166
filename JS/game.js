var GameInstance = {Round: 1, Seqence: undefined, PosInSequence: 0};

function CreateSequence(){
    var Sequence = new Array(0);

    for (let i = 0; i < GameInstance.Round + 2; i++) {
        var GeneratedLightID = Math.floor((Math.random() * 6) + 1);
        Sequence.push(GeneratedLightID);
    }
    window.alert(Sequence);
    return Sequence;
}

function StartGame(){
    GameInstance.Seqence = CreateSequence();
    PlaySequence();
}

function CheckGuess(ID){
    var CorrectID = GameInstance.Seqence[GameInstance.PosInSequence];
    if(ID == CorrectID){
        return true;
    }
    else{
        return false;
    }
}

function StartNextRound(){
    GameInstance.Round++;
    GameInstance.Seqence = CreateSequence();
    GameInstance.PosInSequence = 0;
    /*PlaySequence();*/
}

function EndOfSequence(){
    if(GameInstance.Round + 2 > GameInstance.PosInSequence){
        return false;
    }
    else{
        return true;
    }
}

function WinRoundEffects(){
    ToggleAllLights(LightColoursHue[0]);
    ToggleAllPageGrids(LightColoursHEX[0]); /*index 0 is always green or the equivelent match */
}


function PlayEndEffects(){
    ToggleAllPageGrids(LightColoursHEX[0]);

    for(let LightLocation=1; LightLocation<14; i++){
        setTimeout(function() {
            ToggleLight(LightLocation % 6, LightColoursHue[LightLocation % 5])
        }, LightLocation * 2000);
    };
}