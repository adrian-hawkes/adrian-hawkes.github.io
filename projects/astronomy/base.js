
// HipHL7NMd3CgMbAIGcMmTREM4nhD4KiVUw8WlCp9 is my NASA API key

var month = Math.ceil(Math.random()*9);
var day = Math.ceil(Math.random()*30);
console.log(month, day);


var requestURL = "https://api.nasa.gov/planetary/apod?date=2018-"+month+"-"+day+"&api_key=HipHL7NMd3CgMbAIGcMmTREM4nhD4KiVUw8WlCp9";

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  console.log(request.response);
  $("#astroPic").html("<img src = '" + request.response.hdurl + "'>");
  $("#info").html("<h4>" + request.response.title + "</h4><p>" + request.response.explanation + "</p>")
  // console.log(request.response);
  // $("#demo").text("The " + request.response.name + " is currently at the following position: Lat: " + request.response.latitude + ", Lng: " + request.response.longitude + ".");
}

// var secondRequestURL = "https://api.nasa.gov/planetary/apod?&api_key=HipHL7NMd3CgMbAIGcMmTREM4nhD4KiVUw8WlCp9"

// var secondRequest = new XMLHttpRequest();

// secondRequest.open('GET', secondRequestURL);

// secondRequest.responseType = 'json';
// secondRequest.send();

// secondRequest.onload = function() {
//   console.log(secondRequest.response);
//   $("#todaysPic").html("<img src = '" + secondRequest.response.hdurl + "'>")
// }



