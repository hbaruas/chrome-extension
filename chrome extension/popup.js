//function calling
myFunction();

function DaySelector(text){
	var e = document.getElementById("text-holder").innerHTML=text;
	
}
function crnt(){
	var cdate= new Date();
	var time=document.getElementById("time");
	time.innerHTML=cdate;
}
setInterval(crnt,1000);

document.addEventListener('DOMContentLoaded',function() {
	var sunday =document.getElementById('sunday');
	sunday.addEventListener('click',function() {
		DaySelector('<h3>SUNDAY</h3><b>Mess Menu:</b> Aalu Puri<b> , </b>Dahi Taahri/Chatni<b> , </b>Special<br /><br />');
	
	});

});
document.addEventListener('DOMContentLoaded',function() {
	var monday =document.getElementById('monday');
	monday.addEventListener('click',function() {
		DaySelector('<h3>MONDAY</h3><b>Mess Menu:</b> Paaw Bhaji<b> , </b>Arhar Daal/Aalu Matar<b> , </b>Mix Daal Chawal<br /><br /><b>');
	
	});

});

document.addEventListener('DOMContentLoaded',function() {
	var tu =document.getElementById('tuesday');
	tuesday.addEventListener('click',function() {
		DaySelector('<h3>TUESDAY</h3><b>Mess Menu:</b> Bread Butter<b> , </b>Kadhi/Jeera Aalu<b> , </b>Rajma/Raita<br /><br /><b>');
	
	});

});
document.addEventListener('DOMContentLoaded',function() {
	var wednesday =document.getElementById('wednesday');
	wednesday.addEventListener('click',function() {
		DaySelector('<h3>WEDNESSDAY</h3><b>Mess Menu:</b> Chole Kulche<b> , </b>Arhar Daal/Aalu Bandgobhi<b> , </b>Special<br /><br /><b>');
	
	});

});
document.addEventListener('DOMContentLoaded',function() {
	var thursday =document.getElementById('thursday');
	thursday.addEventListener('click',function() {
		DaySelector('<h3>THURSDAY</h3><b>Mess Menu:</b> Sabji Puri, Mix Daal/Aalu Matar<b> , </b>Chana Daal/Mix Veg<br /><br /><b>');
	
	});

});
document.addEventListener('DOMContentLoaded',function() {
	var friday =document.getElementById('friday');
	friday.addEventListener('click',function() {
		DaySelector('<h3>FRIDAY</h3><b>Mess Menu:</b> Halwa Chana<b> , </b>Rajma<b> , </b>Daal Makhni/Aalu Shimla<br /><br /><b>');
	
	});

});
document.addEventListener('DOMContentLoaded',function() {
	var saturday =document.getElementById('saturday');
	saturday.addEventListener('click',function() {
		DaySelector('<h3>SATURDAY</h3><b>Mess Menu:</b> Sandwich<b> , </b>Chole<b> , </b>Kadhi/Massor Daal<br /><br /><i>Off day, Enjoy!!!</i>');
	
	});

});

function myFunction(text){
		var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()]; 

var a = n;
document.write("<h3>TODAY ("+a+")</h3>");
switch(a){
	case "Sunday":
		document.write('<b>Mess Menu:</b> Aalu Puri<b> , </b>Dahi Taahri/Chatni<b> , </b>Special<br /><br /><i>Off day. Enjoy!!!</i>');
		break;
	case "Monday":
		document.write('<b>Mess Menu:</b> Paaw Bhaaji<b> , </b>Arhar Daal/Aalu Matar<b> , </b>Mix Daal Chawal<br /><br /><b>');
		break;
	case "Tuesday":
		document.write('<b>Mess Menu:</b> Bread Butter<b> , </b>Kadhi/Jeera Aalu<b> , </b>Rajma/Raita<br /><br /><b>');
		break;
	case "Wednesday":
		document.write('<b>Mess Menu:</b> Chole Kulche<b> , </b>Arhar Daal/Aalu Bandgobhi<b> , </b>Special<br /><br />');
		break;		
	case "Thursday":
		document.write('<b>Mess Menu:</b> Sabji Puri, Mix Daal/Aalu Matar<b> , </b>Chana Daal/Mix Veg<br /><br /><b>');
		break;
	case "Friday":
		document.write('<b>Mess Menu:</b> Halwa Chana<b> , </b>Rajma<b> , </b>Daal Makhni/Aalu Shimla<br /><br /><b>');
		break;
	case "Saturday":
		document.write('<b>Mess Menu:</b> Sandwich<b> , </b>Chole<b> , </b>Kadhi/Massor Daal<br /><br /><i>Off day, Enjoy!!!</i>');
		break;
	default :
		document.write('ERROR !!!');
	}		
}