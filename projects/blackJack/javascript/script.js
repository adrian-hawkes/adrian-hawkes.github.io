var cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
var cardSuit = ["♠︎", "♥︎", "♣︎", "♦︎"];

var dealtCards = [];
var aces = 0;


function dealCards(){
    $(".playingCard").css("visibility", "hidden");
    $("#cardDisplay").html("");
    dealtCards = [];
    aces = 0;
    deal(2);
}

function countCards(){
    var sum = 0;
    for(var i=0; i<dealtCards.length; i++){
        if(cardNumber.indexOf(dealtCards[i][0]) == 0 && sum < 11){
            sum += 11;
            aces +=1;
        }
        else if(cardNumber.indexOf(dealtCards[i][0])<10){
            sum += cardNumber.indexOf(dealtCards[i][0]) + 1;
            }
         else {
             sum += 10;
         }
    }
    if(sum>21 && aces > 0){
        sum -=10;
        aces -=1;
    }
    // else if(sum>21){
    //     alert("Bust");
    // }
    // else if(sum==21){
    //     alert("21!");
    // }
    // else if(sum<21){
    //     alert("hit or stay?")
    // }

    $("#tally").html(sum) 
}

function deal(x){
  for(var i=0; i<x; i++){
     var card = Math.floor(Math.random()*13);
  var suit = Math.floor(Math.random()*4);
    dealtCards.push([cardNumber[card], cardSuit[suit]]);
  }
  countCards();
  for(var i=0; i<dealtCards.length; i++){
      $("#card"+(i+1)).html(dealtCards[i][0] + " " + dealtCards[i][1]);
      $("#card"+(i+1)).css("visibility", "visible");
      if(dealtCards[i][1]=="♥︎" || dealtCards[i][1]=="♦︎"){
        $("#card"+(i+1)).css("color", "red");
      }
      else {
        $("#card"+(i+1)).css("color", "black");
      }

    }
  }





