// Function to determine if number is prime

function factors(x) {
    $("#demo").html("");
var x = document.getElementById("answer").value;
  var list = [];
  var y = x-1;
  while(y>1){
    if(Number.isInteger(x/y))
    list.push(y);
    y--
  }
  if(x<2){
    $("#determination").css("visibility", "visible");
    $("#determination").html(x + " is not a prime number.")
  }
  else if(list.length>0) {
    list.reverse();
    $("#determination").css("visibility", "visible");
    $("#determination").html(x + " is not a prime number. It's factors (other than one and itself) are: ")
   $.each(list, function(index, value){
     $("#demo").append(value + "<br>");
   })
  }
  else {
    $("#determination").css("visibility", "visible");
    $("#determination").html(x + " is a prime number");
  }
}

// Function for listing primes up to number n

var primeList = [];

function checkPrime(p) {
  var y=p-1;
  tempList = [];
  while(y>1){
    if(Number.isInteger(p/y))
    tempList.push(y);
    y--
  }

  if(tempList.length==0) {
    primeList.push(p);
  }
}

function listPrimes(p){
    var p = document.getElementById("answer2").value;
  primeList=[];
  $("#determination2").html("");
  $("#demo2").html("");
  for(i=2; i<=p; i++){
    checkPrime(i);
  }
  $("#determination2").css("visibility", "visible");
  $("#determination2").append("There are " + primeList.length + " prime numbers up to " + p + "!");
  $.each(primeList, function(index, value){
      $("#demo2").append(value + "<br>");
  })

}

// function to generate Pythagorean triples

function pythag(x){
    var x = document.getElementById("answer3").value;
    $("#determination3").html("");
    $("#demo3").html("");
    var z = 1;
    for(i=1; i<x; i++){
      for(j=1; j<x; j++){
        var a = Math.pow(i, 2);
        var b = Math.pow(j, 2);
        var c = Math.sqrt(a+b); 
        if(Number.isInteger(c) && a<b){
          $("#demo3").append(z + ": " + i + " - " + j + " - " + c + "<br>");
          z++;         
        }
     }       
    }
  }