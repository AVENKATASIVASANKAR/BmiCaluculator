/*var tweet=prompt("your tweet here");
var tweetcount=tweet.length;
alert("you have written "+tweetcount+"characters left"+(150-tweetcount));
 
document.write('<br>');

function getMilk(){
    
}
document.write('<br>');*/



function bmi(weight,height){
    var weight=prompt("enter your weight in kgs");
    parseFloat(weight);
    var height=prompt("enter your height in meters");
    parseFloat(height);
var Bmi=(weight/Math.pow(height,2));
document.write(Bmi);
document.write('<br>')
document.write('<br>')
if (Bmi<=18.5){
    document.write("<h1 style='color:red;'>your are under-weight</h1>")
}
else
if(Bmi>=18.6 && Bmi<=24.5){
    document.write("<h1 style='color:green;'>you are Healthy-Weight</h1>")
}
else
if(Bmi>=25.0 && Bmi <= 29.9){
    document.write("<h1 style='color:orange;'>your are over-weight</h1>")
}
else
if(Bmi>=30.0){
    document.write("<h1 stle='color:purple;'>your are suffering with OBESITY</h1>")
}
}
bmi()