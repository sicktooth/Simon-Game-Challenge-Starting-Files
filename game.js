var gamePattern = [];

buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

var randomChosenColor = buttonColors[nextSequence()];

gamePattern.push(randomChosenColor);

var selectedId = $("#" + randomChosenColor);

selectedId.fadeOut(100).fadeIn(100);


switch (selectedId) {
    case "#green":
        var green = new Audio('sounds/green.mp3');
        green.play();
    break;

    case "#blue":
        var blue = new Audio('sounds/blue.mp3');
        blue.play();
    break;

    case "#yellow":
        var yellow = new Audio('sounds/yellow.mp3');
        yellow.play();
    break;

    case "#red":
        var red = new Audio('sounds/red.mp3');
        red.play();
    break;

    default:
        var wrong = new Audio('sounds/wrong.mp3');
        wrong.play();
    break;
} 
/*
if (selectedId == "#green") {
    var audio = new Audio('sounds/green.mp3');
} else if (selectedId == "#blue") {
    var audio = new Audio('sounds/blue.mp3');
} else if (selectedId == "#yellow") {
    var audio = new Audio('sounds/yellow.mp3');
} else if (selectedId == "#red") {
    var audio = new Audio('sounds/red.mp3');
} else {
    var audio = new Audio('sounds/wrong.mp3');
}
audio.play(); 
*/

$(".btn").on("click", function(e){
    
    var userChosenColor = e.target;

    console.log(userChosenColor);

});