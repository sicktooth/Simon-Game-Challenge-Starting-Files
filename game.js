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

    // $("#level-title").text("Level " + level);

    // for (var i = 0; i < 10; i++) {
    //     // var level = i;
    //     $("#level-title").text("Level " + i);
    // }

}



var firstKeyDown = true;

$(document).keydown(function (e) {
    if (firstKeyDown) {
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

    nextSequence();

});