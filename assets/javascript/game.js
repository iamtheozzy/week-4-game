$(document).ready(function(){

// Creates random number for app
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#randomNum").text(targetNumber);

// Crystal random
var numberOptions = [];

function newNumberOptions(){
  var i = 0;
  while(i < 4){
    var randomNumber = (Math.floor(Math.random() * 11) + 1);
    if(numberOptions.indexOf(randomNumber) == -1){
      numberOptions.push(randomNumber);
      i++;}
  }
}

newNumberOptions();
console.log(numberOptions);




// End of document ready function
});
