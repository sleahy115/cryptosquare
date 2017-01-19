var answer = ""
var inputValue

function encode(letters){
  var splt = letters.split("");
  var lngth = splt.length;
  var sqrd = Math.pow(Math.round(Math.sqrt(lngth)),2);
  console.log("Length of the string is: " + lngth);
  console.log("Area of the grid is: " + sqrd);

  if (sqrd > lngth){
    answer = "yay";
  } else{
    answer = "booo"
  }
}




$(document).ready(function(){
 $("form#crypto-form").submit(function(event){
   event.preventDefault();
   $("#output").empty();
   inputValue = $("input#tbox").val()
   encode(inputValue);
   $("#output").append("<p>" + answer + "</p>");
   answer = ""

 });
});
