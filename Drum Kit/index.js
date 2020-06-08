var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);

}

  document.addEventListener("keydown",handleclick);

function handleclick() {
  var key=event.key;
  var value = this.innerHTML;
  console.log(key);
  console.log(value);
  switch (value||key) {
    case "w":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
      default:console.log(value);
  }
  if(value)
  {
    document.querySelector("."+value).classList.add("pressed");
  }
  else if(key)
  document.querySelector("."+key).classList.add("pressed");

  setTimeout(function(){
    if(value)
    {
      document.querySelector("."+value).classList.remove("pressed");
    }
    else if(key)
    document.querySelector("."+key).classList.remove("pressed");
  },100);
}
