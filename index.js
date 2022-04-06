/*var tweet=prompt("your tweet here");
var tweetcount=tweet.length;
alert("you have written "+tweetcount+"characters left"+(150-tweetcount));
 
document.write('<br>');

function getMilk(){
    
}
document.write('<br>');*/



function bmi(Weight,Height){
    var Weight=document.getElementById("inp1").value;
    parseFloat(Weight);
    var Height=document.getElementById('inp2').value;
    Height=Height/3.2808;
    var BMI=Weight/(Height*Height);
    document.write(BMI);
    document.write('<br>')
document.write('<br>')
if (BMI<=18.5){
    document.write("<h1 style='color:red;'>your are under-weight</h1>")
}
else
if(BMI>=18.6 && BMI<=24.5){
   document.write("<h1 style='color:green;'>you are Healthy-Weight</h1>")
}
else
if(BMI >=25.0 && BMI <= 29.9){
    //document.write("<h1 style='color:orange;'>your are over-weight</h1>")
}
else
if(BMI >=30.0){
   document.write("<h1 stle='color:purple;'>your are suffering with OBESITY</h1>")
}

}
bmi()
document.write("<br>");

   //var weight=prompt("enter your weight in kgs");
   //parseFloat(weight);
   // var height=prompt("Enter your height in Meters");
   // parseFloat(height);
//var Bmi=(weight/Math.pow(height,2));
//document.write(Bmi);
/*document.write('<br>')
document.write('<br>')
if (BMI<=18.5){
    document.write("<h1 style='color:red;'>your are under-weight</h1>")
}
else
if(BMI>=18.6 && BMI<=24.5){
   document.write("<h1 style='color:green;'>you are Healthy-Weight</h1>")
}
else
if(BMI>=25.0 && BMI <= 29.9){
    //document.write("<h1 style='color:orange;'>your are over-weight</h1>")
}
else
if(BMI>=30.0){
   document.write("<h1 stle='color:purple;'>your are suffering with OBESITY</h1>")
}

bmi()*/