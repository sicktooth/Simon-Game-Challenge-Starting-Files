var buttonColors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var gamePattern = [];

var level = 0;

$(".btn").on("click", function(){
    
    var userChosenColor = $(this).attr('id');

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);
    
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() { 
                nextSequence();
            }, 1000);
        }

    }
    else {
        startOver();
    }
}

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

function nextSequence() {

    userClickedPattern = [];

    level++;

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
    
    var selectedId = $("#" + randomChosenColor);
    
    selectedId.fadeOut(100).fadeIn(100);    

    playSound(randomChosenColor);

    $("#level-title").text("Level " + level);
}



var firstKeyDown = true;

   
$(document).keydown(function () {
        if (firstKeyDown) {
            $("#level-title").text("Level " + level);
            nextSequence();
            firstKeyDown = false;
        }
    
    
});

function startOver() {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    gamePattern = [];
    firstKeyDown = true;
    level = 0;
}


