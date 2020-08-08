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
    CreateSequence();
    PlaySequence();
}

function ResetRound(){
    CreateSequence();
    PlaySequence();
}


function WasLastRound(){
    if(GameInstance.Round = 5){
        return true;
    }
    else { return false; }
}
function PlayEndEffects(){

}