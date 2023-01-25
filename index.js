// Selecting the cubes
const blueCube = $("#blue");
const yellowCube = $("#yellow");
const greenCube = $("#green");
const redCube = $("#red");
const startButton = $(".start-btn");


//Game Audios
const blueCubeAudio = new Audio("./sounds/You.mp3");
const redCubeAudio = new Audio("./sounds/Never.mp3");
const yellowCubeAudio = new Audio("./sounds/See.mp3");
const greenCubeAudio = new Audio("./sounds/Anything.mp3");
const gameOverAudio = new Audio("./sounds/wrong.mp3");
const startGameAudio = new Audio("./sounds/Full.mp3");


const originalColors = ["red", "blue", "yellow", "green"];
let randomNumber;
let newPattern = [];
let userSelectedColors = [];
let level = 0;







// Starting the Game based on Any key that is pressed.
$(document).keypress(function () {

    $("h1").text("Level " + level);
    newSequence();
});

$("#level-title2").on("click", function () {
   
    $("h1").text("Level " + level);
    startGameAudio.play();
    startButton.addClass("display");
    startButton.removeClass("no-display");
    
});



$(".start-btn").on("click", function () {
    startButton.addClass("no-display");
    newSequence();
})



$(".btn").on("click", function (event) {
    let clickedColor = $(this).attr("id");
    userSelectedColors.push(clickedColor);
    playSound(clickedColor);
    checkAnswer(userSelectedColors.length - 1);

})






function checkAnswer(currentlevel) {

    if (newPattern[currentlevel] === userSelectedColors[currentlevel]) {
        console.log("success");



        if (userSelectedColors.length === newPattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                newSequence();

            }, 1000);

        }

    }

    else {
        console.log("wrong");
        gameOver();
    }

}









function newSequence() {



    // if (userSelectedColors.length === 0) {
    //     startGameAudio.play();
    // }





    userSelectedColors = [];

    randomNumber = Math.floor(Math.random() * 4);

    let randomColor = originalColors[randomNumber];

    $("#" + randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    
   
        playSound(randomColor);

        //Storing the new pattern 
        newPattern.push(randomColor);  
    



    //Increase level by 1 each time 
    level++;
    $("h1").text("Level " + level);


}







function playSound(activeButton) {

    switch (activeButton) {
        case "red":
            redCubeAudio.play();
            console.log("red active")
            break;
        case "blue":
            blueCubeAudio.play();
            console.log("blue active");
            break;
        case "yellow":
            yellowCubeAudio.play();
            console.log("yellow active")
            break;
        case "green":
            greenCubeAudio.play();
            console.log("green active")
            break;

        default:
            break;
    }
    $("#" + activeButton).addClass("pressed");
    setTimeout(function removeClicedAnimation() {
        $("#" + activeButton).removeClass("pressed");
    }, 100);
}








function gameOver() {

    $("body").addClass("red");
    gameOverAudio.play();
    $("h1").text("Game Over, Press Any Key to Restart")
    $("#level-title2").text("   Game Over!!!!  Level Reached:" + level + "  Tap to Restart")

    setTimeout(function () {
        $("body").removeClass("red");
    }, 100);


    level = 0;
    newPattern = [];
    userSelectedColors = [];


}



if (window.innerWidth < 400) {
    $('#level-title').text("Tap Background to start");
}


// Final site

