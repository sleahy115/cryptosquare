var answer = [];
var inputValue;

function encode(letters){
  var noSpace = letters.replace(/\s/g,"");
  var splt = noSpace.split("");
  var lngth = splt.length;
  var sqroot = Math.round(Math.sqrt(lngth))
  var sqrd = Math.pow(sqroot,2);
  var width;
  var height;

  if (sqrd >= lngth){
    width = sqroot;
    height = sqroot;
  } else{
    width = sqroot + 1;
    height = sqroot;
  }
  console.log("Area of the grid is: " + sqrd);
  console.log("number of values in array " + lngth);
  console.log("height of the array is " + height);
  console.log("the split returns " + splt);
  console.log("the width if the array is " + width);
  console.log("Width times height is: " + width*height);

  for(i=0;i<width;i++){
    for (j=i; j<lngth; j+=width){
      answer.push(splt[j]);
      console.log("The letter in this loop is: " + splt[j]);
    }
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
