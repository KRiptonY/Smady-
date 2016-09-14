
var rate = document.getElementById("rate");
var ask= document.getElementById("ask");
var choose=document.getElementById("choose");
var txt= document.getElementById("text-inf");
rate.className="rac-active";
rate.addEventListener("click",function(){
	rate.className="rac-active";
	ask.className="rac";
	choose.className="rac";
	txt.innerHTML="RATE Service: Select the thing that is most important for you in a phone<br> and let SMADY adjust its whole rating system to comply with your choice";
});

ask.addEventListener("click",function(){
	rate.className="rac";
	ask.className="rac-active";
	choose.className="rac";
	txt.innerHTML="ASK Service: You have selected up to 5 suitable phones or have carrier limitations<br> and would like SMADY to help you make final choice based upon your actual needs and impartial evalution";
});

choose.addEventListener("click",function(){
	rate.className="rac";
	ask.className="rac";
	choose.className="rac-active";
	txt.innerHTML="CHOOSE Service: You know, what you want from a phone and you have a long list of<br>requirements, but technical specs bore you stiff.<br>Let SMADY crunch its whole data base to pick the best phone for you";
});


//Отвечает за показ меню
var b= document.getElementById("r-menu-container");
var btn = document.getElementById("btn-vis-menu");
var close= document.getElementById("close-menu");
btn.addEventListener("click",function(){
b.className="";
document.getElementsByClassName("panel")[0].id="panel";

});

close.addEventListener("click",function(){
	document.getElementsByClassName("panel")[0].id="";
	b.className="name";

});
