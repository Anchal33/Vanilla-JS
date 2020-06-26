var container=document.querySelector('.container');
var seats=document.querySelectorAll('.row .seat:not(.occupied)');

var count=document.getElementById('count');
var total=document.getElementById('total');

var movie=document.getElementById('movie');
var ticketPrice=+movie.value;

populateUI();
//update count and total
function updateSelectedCount(){
  var selectedSeats=document.querySelectorAll('.row .seat.selected');
  var selectedSeatsIndex=[...selectedSeats].map(function(seat){
    return [...seats].indexOf(seat);
  });
localStorage.setItem('selectedSeats',JSON.stringify(selectedSeatsIndex));

  count.innerText=selectedSeats.length;
  total.innerText=selectedSeats.length * ticketPrice;

}
// populate UI from local Storage
function populateUI(){

var selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'));
if(selectedSeats!==null && selectedSeats.length>0){
  seats.forEach(function(seat,index){
    if(selectedSeats.indexOf(index) > -1)
    {
      seat.classList.add('selected');
    }
  })
}

var movieIndex=localStorage.getItem('movieIndex');
var price=localStorage.getItem('moviePrice');
if(movieIndex!==null)
{
  movie.selectedIndex=movieIndex;
}

}
//movie change
movie.addEventListener('change',function(e){
  ticketPrice=+e.target.value;
  console.log(e.target);
  console.log(e.target.selectedIndex);
  localStorage.setItem('movieIndex',e.target.selectedIndex);
  localStorage.setItem('moviePrice',e.target.value);
  updateSelectedCount();
})

// seats select event
container.addEventListener('click',function(e){
if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
  {
    e.target.classList.toggle('selected');
  updateSelectedCount();
  }
});
// updateSelectedCount

updateSelectedCount();
