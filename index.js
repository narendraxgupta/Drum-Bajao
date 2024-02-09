

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

//this is for mouse click to generate sound// detecting mouse press
function handleClick() {
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

//this is for keyboard press to generate sound// detecting keyboard press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


//common function for both "click" and "keydown"
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}



function buttonAnimation(currentKey){
 var activeButton=document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
setTimeout(function(){activeButton.classList.remove("pressed");},100);
}












// document.querySelectorAll(".drum")[0].addEventListener("click",tom1);
// document.querySelectorAll(".drum")[1].addEventListener("click",tom2);
// document.querySelectorAll(".drum")[2].addEventListener("click",tom3);
// document.querySelectorAll(".drum")[3].addEventListener("click",tom4);
// document.querySelectorAll(".drum")[4].addEventListener("click",snare);
// document.querySelectorAll(".drum")[5].addEventListener("click",crash);
// document.querySelectorAll(".drum")[6].addEventListener("click",kick);

// function tom1(){
//     var audio=new Audio("./sounds/tom-1.mp3");
//     audio.play();
// }

// function tom2(){
//     var audio=new Audio("./sounds/tom-2.mp3");
//     audio.play();
// }

// function tom3(){
//     var audio=new Audio("./sounds/tom-3.mp3");
//     audio.play();
// }

// function tom4(){
//     var audio=new Audio("./sounds/tom-4.mp3");
//     audio.play();
// }

// function snare(){
//     var audio=new Audio("./sounds/snare.mp3");
//     audio.play();
// }

// function crash(){
//     var audio=new Audio("./sounds/crash.mp3");
//     audio.play();
// }

// function kick(){
//     var audio=new Audio("./sounds/kick-bass.mp3");
//     audio.play();
// }
