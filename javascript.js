var newbutton = document.querySelectorAll(".kbd").length;
for(var i=0;i<newbutton;i++){
 document.querySelectorAll(".kbd")[i].addEventListener("click" ,function() {
  var buttonInnerHTML= this.innerHTML;
  buttonInnerHTML=buttonInnerHTML.toLowerCase();
  console.log(buttonInnerHTML);
  makesound(buttonInnerHTML);
  buttonannimation(buttonInnerHTML);
 });
}
document.addEventListener("keydown",function(event){ makesound(event.key);
;});
function makesound(key){
  switch (key) {

     case "e":
      var tom1 = new Audio("sounds/crash.wav");
      tom1.play();
      buttonannimation(key);
      break;

     case "r":
      var tom2 = new Audio("sounds/ride.wav");
      tom2.play();
      buttonannimation(key);
      break;

      case "f":
       var tom3 = new Audio("sounds/tom-low.wav");
       buttonannimation(key);
       tom3.play();
       break;

      case "g":
       var tom4 = new Audio("sounds/tom-mid.wav");
       tom4.play();
       buttonannimation(key);
       break;

      case "j":
       var snare = new Audio("sounds/snare.wav");
       snare.play();
       buttonannimation(key);
       break;
      case "h":
       var crash = new Audio("sounds/tom-high.wav");
       buttonannimation(key);
       crash.play();
       break;

      case "i":
       var kick = new Audio("sounds/hihat-open.wav");
       kick.play();
       buttonannimation(key);
       break;
      case "k":
       var kick = new Audio("sounds/hihat-close.wav");
       buttonannimation(key);
       kick.play();
       break;
      case "v":
       var kick = new Audio("sounds/kick.wav");
       kick.play();
       buttonannimation(key);
       break;
      case "b":
       var kick = new Audio("sounds/kick.wav");
       kick.play();
       buttonannimation(key);
       break;

    default: console.log();

  }
}
function buttonannimation(currentkey){
  var anim_key=document.querySelector("."+currentkey);
  anim_key.classList.add("pressed");
  setTimeout(function(){
    anim_key.classList.remove("pressed");
  },50);

}
