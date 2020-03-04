
var sum = 0;

function reset() {
    $("#tally").html(sum);
}

function test(box){
   var x = box;
   sum += x;
   if(sum>=21){
       $("#tally").html(21);
       alert("bad luck, you said 21!");
   }
   else {
   $("#tally").html(sum);
   computerTurn();
}
}


function computerTurn(){
    $("#thinking").html("Now it is my turn to choose a number - click here to see what I've chosen!")
    $("#thinking").css("visibility", "visible");
    // $(".playerBox").css("background-color", "grey");
}

function random(){
    var x = Math.floor(Math.random() * 3 + 2);
    test(x);
    $("#thinking").html("I have chosen the number: " + x);
    $("#change").css("visibility", "visible");
}

function change(){
    $("#thinking").css("visibility", "hidden");
    $("#change").css("visibility", "hidden");
}