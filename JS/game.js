class Game{
    constructor() {
        this.Round = 1;
        this.seqence = undefined;
        this.NextInSequence = 0;
    }
}

var GameInstance = new Game();

function CreateSequence(){
    var Sequence = new Array(0);

    for (var i = 0; i < GameInstance.Round + 2; i++) {
        var GeneratedLightID = Math.floor((Math.random() * 9) + 1);
        Sequence.push(GeneratedLightID);
    }
    window.alert(Sequence);
    return Sequence;
}

function StartGame(){
    GameInstance.seqence = CreateSequence();
    PlaySequence();
}

function CheckGuess(ID){
    var CorrectID = GameInstance.seqence[GameInstance.NextInSequence];
    if(ID == CorrectID){
        return true;
    }
    else{
        return false;
    }
}


function StartNextRound(){
    GameInstance.Round++;
    ResetGrid();
    GameInstance.seqence = CreateSequence();
    GameInstance.NextInSequence = 0;
    /*PlaySequence();*/
}

function ResetRound(){
    GameInstance.seqence = CreateSequence();
    GameInstance.NextInSequence = 0;
    /*PlaySequence();*/
}

function EndOfSequence(){
    if(GameInstance.Round + 2 > GameInstance.NextInSequence){
        return false;
    }
    else{
        return true;
    }
}





function WasLastRound(){
    if(GameInstance.Round == 3){
        return true;
    }
    else { return false; }
}
function PlayEndEffects(){

}