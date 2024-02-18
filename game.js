var buttonColors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    // return randomNumber;

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
    
    var selectedId = $("#" + randomChosenColor);
    
    selectedId.fadeOut(100).fadeIn(100);    

    playSound(randomChosenColor);

}

nextSequence();


function playSound(name) {
    var audio = new Audio ('sounds/' + name + '.mp3');
    audio.play();
}

$(".btn").on("click", function(){
    
    var userChosenColor = $(this).attr('id');

    userClickedPattern.push(userChosenColor);

    console.log(userClickedPattern);

    playSound(userChosenColor);

});