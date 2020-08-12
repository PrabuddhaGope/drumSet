var buttons = document.querySelectorAll("button");

var numberOfButtons = buttons.length;
var audio = new Audio('sounds/tom-1.mp3');

//Adds event listener to each button and also plays sound according to which button is pressed
for (var i = 0; i < numberOfButtons; i++)
{
    buttons[i].addEventListener("click", function(){
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

//To bind sounds to keyboard keys
document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})

//Decided which sound to play on the basis of key pressed or button clicked
function playSound(input)
{
    switch (input)
    {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(input);
    }
}

function buttonAnimation(key)
{
    var buttonPressed = document.querySelector("." + key);

    buttonPressed.classList.add("pressed");

    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    }, 100)
}