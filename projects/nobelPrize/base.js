var requestURL = "http://api.nobelprize.org/v1/prize.json";

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {

}


window.onload = function () {
  //Reference the DropDownList.
  var ddlYears = document.getElementById("ddlYears");

  //Determine the Current Year.
  var currentYear = (new Date()).getFullYear();

  //Loop and add the Year values to DropDownList.
  for (var i = 1901; i <= currentYear; i++) {
      var option = document.createElement("OPTION");
      option.innerHTML = i;
      option.value = i;
      ddlYears.appendChild(option);
  }
};


function fullList(){
  $("#info").html("");
  for(let i=0; i<request.response.prizes.length; i++){
    for(let j=0; j<request.response.prizes[i].laureates.length; j++){
      if(request.response.prizes[i].laureates.length!=0){
  $("#info").append(`<h4> ${request.response.prizes[i].year} </h4><p> ${request.response.prizes[i].category} - ${request.response.prizes[i].laureates[j].firstname} ${request.response.prizes[i].laureates[j].surname}: ${request.response.prizes[i].laureates[j].motivation}</p>`);
}
else{
  $("#info").append(`There was no ${request.response.prizes[i]} issued in ${request.response.prizes[i].year}`)
}
}
}
}

function listByYear(){
  $("#info").html("");
  let chosenYear = document.getElementById("yearChoice");
  $("#info").append(`<h4> ${chosenYear.value} </h4>`);
  for(let i=0; i<request.response.prizes.length; i++){
    for(let j=0; j<request.response.prizes[i].laureates.length; j++){
      if(request.response.prizes[i].year==chosenYear.value){
  $("#info").append(`<p> ${request.response.prizes[i].category} - ${request.response.prizes[i].laureates[j].firstname} ${request.response.prizes[i].laureates[j].surname}: ${request.response.prizes[i].laureates[j].motivation}</p>`);
}
}
}
}

function listByCategory(chosenCategory){
  $("#info").html("");
  for(let i=0; i<request.response.prizes.length; i++){
    for(let j=0; j<request.response.prizes[i].laureates.length; j++){
      if(request.response.prizes[i].category==chosenCategory){
  $("#info").append(`<h4> ${request.response.prizes[i].year} </h4><p> ${request.response.prizes[i].category} - ${request.response.prizes[i].laureates[j].firstname} ${request.response.prizes[i].laureates[j].surname}: ${request.response.prizes[i].laureates[j].motivation}</p>`);
}
}
}
}


// function listSpecific(chosenCategory){
//   $("#info").html("");
//   let chosenYear = document.getElementById("yearChoice");
//   $("#info").append(`<h4> ${chosenYear.value} </h4>`);
//   for(let i=0; i<request.response.prizes.length; i++){
//     if(request.response.prizes[i].year==chosenYear && request.response.prizes[i].category==chosenCategory){
//       console.log(`<p> ${request.response.prizes[i].category} - ${request.response.prizes[i].laureates[j].firstname} ${request.response.prizes[i].laureates[j].surname}: ${request.response.prizes[i].laureates[j].motivation}</p>`);
//     }
//   } 
// }

function listSpecific(chosenCategory){
  $("info").html("");
  let chosenYear = document.getElementById("yearChoice");
  $("#info").append(`<h4> ${chosenYear.value} </h4>`);
  for(let i=0; i<request.response.prizes.length; i++){
    if(request.response.prizes[i].year==chosenYear){
      for(let j=0; j<request.response.prizes[i].length; j++){
        if(request.response.prizes[i].category[j]==chosenYear){
          $("#info").append(`${request.response.prizes[i].laureates.firstname}`)
        }
      }
    }
  }
}



function displayInfo(){
  $("#info").html("");
  let chosenYear=document.getElementById("ddlYears");
  let chosenCategory=document.getElementById("category");
  for(let i=0; i<request.response.prizes.length; i++){
    if(request.response.prizes[i].year==chosenYear.value && request.response.prizes[i].category==chosenCategory.value){
      $("#info").html(`The nobel prize for ${request.response.prizes[i].category} in ${request.response.prizes[i].year} was awarded to:<br>`)
      for(let j=0; j<request.response.prizes[i].laureates.length; j++){
        $("#info").append(`<a href="https://www.nobelprize.org/prizes/${request.response.prizes[i].category}/${request.response.prizes[i].year}/${request.response.prizes[i].laureates[j].surname}/facts/" target="_blank"> ${request.response.prizes[i].laureates[j].firstname} ${request.response.prizes[i].laureates[j].surname}</a>: ${request.response.prizes[i].laureates[j].motivation}<br>`)
      }
    } 
  }
}

