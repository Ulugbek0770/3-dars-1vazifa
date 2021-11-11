
var son = +prompt("Siz  son kriting biz toq yoki juftligini aniqlab beramiz ")
while (isNaN(son)  || son == 0){
    son = +prompt("Siz son kritmadingiz");}

    if( son % 2 == 0)  {
    alert("Siz " + son +" kritdingiz.   Bu juft son  ")}
  else if(  son % 2 == 1) { 
    alert("Siz " + son + " kritdingiz.  Bu toq son ") }

