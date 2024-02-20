var buttonColors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var gamePattern = [];

var level = 0;

var started = true;

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    // return randomNumber;

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
    
    var selectedId = $("#" + randomChosenColor);
    
    selectedId.fadeOut(100).fadeIn(100);    

    playSound(randomChosenColor);

    $("#level-title").text("Level " + level);
    

}



var firstKeyDown = true;

   
$(document).keydown(function (e) {
        if (firstKeyDown) {
            nextSequence();
            console.log(e);
            level++;
            firstKeyDown = false;
        }
    
    
});


function playSound(name) {
    var audio = new Audio ('sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(currentColor) {
    $('#' + currentColor).addClass('pressed');
    setTimeout(function() {
        $('#' + currentColor).removeClass('pressed');
    }, 100);
}

$(".btn").on("click", function(){
    
    var userChosenColor = $(this).attr('id');

    userClickedPattern.push(userChosenColor);

    console.log(userClickedPattern);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    nextSequence();
    
    level++;
    

});