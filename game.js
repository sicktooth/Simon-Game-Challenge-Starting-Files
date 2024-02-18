var buttonColors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var gamePattern = [];

var level = 0;

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
var started = true;
   
$(document).keydown(function (e) {
        if (firstKeyDown == started) {
            nextSequence();
            console.log(e);
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

    if (started) {
        for (var i = 1; i > level; i++) {
            // var level = i;
            $("#level-title").text("Level " + i);
            
        }
        nextSequence();
    }
    

});