var botScore=0, playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
    var botsWeapon= getRandomWeapon();
    checkWhoWon(botsWeapon,"rock");
}
document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsScissors(){
    var botsWeapon= getRandomWeapon();
    checkWhoWon(botsWeapon,"scissors");
}
document.getElementById("paper").onclick=playerThrowsPaper;
function playerThrowsPaper(){
    var botsWeapon= getRandomWeapon();
    checkWhoWon(botsWeapon,"paper");
}
function getRandomWeapon(){
    var randomNumber=Math.random();
    botsWeapon="rock";
    if(randomNumber<.3333){
        botsWeapon="scissors";
    }
    else if(randomNumber<.6666){
        botsWeapon="paper";
    }
    return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
    if(botsWeapon==playersWeapon){
        displayCompleteMessage("Tie. Try again.");
    }
    else if(
        (botsWeapon=="scissors" && playersWeapon=="paper") ||
        (botsWeapon=="paper" && playersWeapon=="rock") ||
        (botsWeapon=="rock" && playersWeapon=="scissors")
        ){
        increaseBotScore();
    }
    else{
        increasePlayerScore();
    }
}
function increaseBotScore(){
    botScore+=1;
    document.getElementById("computerScore").innerHTML=botScore;
    displayCompleteMessage("Yikes.. you reek of loser.");
}
function increasePlayerScore(){
    playerScore+=1;
    document.getElementById("humanScore").innerHTML=playerScore;
    displayCompleteMessage("Maybe you're not so bad, after all.")
}
function displayCompleteMessage(msg){
    document.getElementById("status").innerHTML=msg;
}
