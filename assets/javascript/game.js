$(document).ready(function(){

// Creates random number for app
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#randomNum").text(targetNumber);

// Crystal random numbers array
var numberOptions = [];

// function to create random numbers
function newNumberOptions(){
  var i = 0;
  while(i < 4){
    var randomNumber = (Math.floor(Math.random() * 11) + 1);
    if(numberOptions.indexOf(randomNumber) == -1){
      numberOptions.push(randomNumber);
      i++;}
  }
}
// creates new set of random numbers for arrays.
newNumberOptions();
console.log(numberOptions);

// Global game variables
var score = 0;
$("#playerScore").text(score)
var win = 0;
var losses = 0;

// Array containing images for HTML
var imageArray =[ "assets/images/blue.png", "assets/images/green.png" , "assets/images/black.png" , "assets/images/red.png" ]

// For each iteration of number we create and image
for (var i = 0; i < numberOptions.length; i++) {

  // each crystal image will be added into a crystal-row div
  $("#crystal-row").append("<img src=" + imageArray[i] + " value= " + numberOptions[i] + ">");

};

// Function to reset crystal values, targetNumber, and playerScore
function reset() {
  newNumberOptions();

  targetNumber = Math.floor(Math.random() * 101) + 19;
  $("#randomNum").text(targetNumber);

  score = 0;
  $("#playerScore").text(counter);
};

// on click function that grabs value of each crystal and adds it to the score.
// This on.click function also holds win and loss if statements.

// End of document ready function
});
