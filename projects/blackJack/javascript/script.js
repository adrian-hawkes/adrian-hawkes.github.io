// Various variables

let cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let cardSuit = ["♠︎", "♥︎", "♣︎", "♦︎"];

let playerCards = [];
let dealerCards = [];
let aces = 0;

let playerTotal = 0;
let dealerTotal = 0;

let playerName = "";

let cash = 500;
let pot = 0;

$("#currentCash").html(cash);


// function to load page after initial introduction

window.onload = getName();

function getName(){
  playerName = prompt("What's your name?");
  $("#playerName").html(playerName);
}


// function to select which card should be dealt and push these cards into a particular hand/deck

function getRandomCard(x, deck){
  for(var i=0; i<x; i++){
    var card = Math.floor(Math.random()*13);
 var suit = Math.floor(Math.random()*4);
   deck.push([cardNumber[card], cardSuit[suit]]);
 }
}

// function to distribute card to player/dealer

function dealCards(x, y){

    $("#dealCards").css("display", "none");
    $(".playerButtons").css("display", "inline")

  getRandomCard(x, playerCards);
  getRandomCard(y, dealerCards);
   
  countCardsPlayer();
  countCardsDealer();

  displayCards("playerCards", playerCards);
  displayCards("dealerCards", dealerCards);

}

// function to distribute cards automatically to dealer until it reaches 18

function dealersTurn(){
  while(dealerTotal<19){
    setTimeout(dealCards(0,1), 100);
  }
  if(dealerTotal>18 && dealerTotal<22){
  setTimeout(checkScore(), 100);
}
}


  function countCardsPlayer() {
    let playerSum = 0;
    
    for(var i=0; i<playerCards.length; i++){
        if(cardNumber.indexOf(playerCards[i][0]) == 0 && playerSum < 11){
          playerSum += 11;
            aces +=1;
        }
        else if(cardNumber.indexOf(playerCards[i][0])<9){
          playerSum += cardNumber.indexOf(playerCards[i][0]) + 1;
            }
         else {
          playerSum += 10;
         }
    }
    if(playerSum>21 && aces > 0){
      playerSum -=10;
        aces -=1;
    }

    $("#playerCards").html(playerSum); 
    playerTotal = playerSum;
    if(playerSum>21){
      setTimeout(function () { alert("Bust! Dealer wins!"); gameOver(); }, 10);
    }
}

function countCardsDealer() {
  var dealerSum = 0;
  for(var i=0; i<dealerCards.length; i++){
      if(cardNumber.indexOf(dealerCards[i][0]) == 0 && dealerSum < 11){
        dealerSum += 11;
          aces +=1;
      }
      else if(cardNumber.indexOf(dealerCards[i][0])<9){
        dealerSum += cardNumber.indexOf(dealerCards[i][0]) + 1;
          }
       else {
        dealerSum += 10;
       }
  }
  if(dealerSum>21 && aces > 0){
    dealerSum -=10;
      aces -=1;
  }

  $("#dealerCards").html(dealerSum) 
  dealerTotal = dealerSum;
  if(dealerSum>21){
    setTimeout(function () { alert(`Bust! ${playerName} wins!`); gameOver(); }, 100);
    win();
  }
}


function displayCards(deck1, deck){
  for(var i=0; i<deck.length; i++){
    $(`#${deck1}`+(i+1)).html(deck[i][0] + " " + deck[i][1]);
    $(`#${deck1}`+(i+1)).css("visibility", "visible");
    if(deck[i][1]=="♥︎" || deck[i][1]=="♦︎"){
      $(`#${deck1}`+(i+1)).css("color", "red");
    }
    else {
      $(`#${deck1}`+(i+1)).css("color", "black");
    }
  }
  console.log(playerCards);
  console.log(dealerCards);
}

function checkScore(){
  if(playerTotal>dealerTotal){
    setTimeout(function() {alert(`${playerName} wins`); gameOver(); }, 10);
    win();
  }
  else if(playerTotal<dealerTotal){
    if(cash>0){
    setTimeout(function() {alert("Dealer wins"); gameOver(); }, 10);
    lose();
    }
    else if(cash<1){
      gameOver();
      alert("Game over - goodbye");
    }
  }
  else {
    setTimeout(function() {alert("Draw"); gameOver(); }, 10);
    draw();
  }
}


// function gameOver(){
//   let gameOver = confirm("Would you like to play again?")
//   if(gameOver){
//     location.reload();
//   }
//   else {
//     alert("Okay, thanks for playing");
//   }
// }

function gameOver(){
  let gameOver = confirm("Would you like to play again?")
  if(gameOver){
 playerCards = [];
 dealerCards = [];
 aces = 0; playerTotal = 0;
 dealerTotal = 0;
$("#playerCards").html(0);
$("#dealerCards").html(0);
$(".playingCard").css("visibility", "hidden");
$("#dealCards").css("display", "inline");
$(".playerButtons").css("display", "none");
  }
  else {
    alert("Okay, thanks for playing");
  }
}



function bet(){
  let stake = document.getElementById("betAmount");
  pot = stake.value;
  if(stake.value>cash){
    alert("Error - you don't have enough money");
    document.getElementById("betAmount").value = "";
  }
  else {
  $("#currentCash").html(cash-=stake.value)
  $("#pot").html(stake.value);
}
  document.getElementById("betAmount").value = "";
}


function win(){
  cash +=2*pot;
  $("#currentCash").html(cash);
  $("#pot").html("");
}

function lose(){
  $("#pot").html("");
}

function draw(){
  cash +=pot;
  $("#pot").html("");
  $("#currentCash").html(cash);
}