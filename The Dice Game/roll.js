document.querySelector(".container button").addEventListener("click",function(){
var s=getRandom();
var btn=document.querySelector(".container button").innerHTML;
var addr="images/dice"+s+".png";
if(btn=="Play Again")
{
  location.reload();
}
if(btn=="Player 1")
{
  $("#img1").fadeOut();
  $("#img1").fadeIn();
  document.getElementById("img1").setAttribute("src",addr);

document.querySelector(".container button").innerHTML="Player 2";
}
else{
  $("#img2").fadeOut();
  $("#img2").fadeIn(); 
document.getElementById("img2").setAttribute("src",addr);

setTimeout(function(){
  var btn=document.querySelector("button").innerHTML;
if(btn=="Player 2")
{
  var d1=document.getElementById("img1").getAttribute("src");
  d1=d1.slice(11,12);
  var d2=document.getElementById("img2").getAttribute("src");
  d2=d2.slice(11,12);
 if(d1>d2)
 {
   document.querySelector("h1").innerHTML="Player 1 wins !";
 }
else if (d1<d2) {
   document.querySelector("h1").innerHTML="Player 2 wins !";
}
else{
    document.querySelector("h1").innerHTML="Its a  draw !";
}
document.querySelector("button").innerHTML="Play Again";
}
},500);
}
});


function getRandom(){
  var x=Math.random();
  x=Math.floor(x*6+1);
  return x;
}
