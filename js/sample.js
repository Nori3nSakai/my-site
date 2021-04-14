//function changeBoxColor(newColor){
//	var obj=document.getElementsById();
//	obj.style.backgroundColor='#ff0000';
//}

//function btn2(){
//	document.getElementsById("btn1").click();
//}


function btn1(){
	var elm1=document.getElementById('box1');
	var side1=document.getElementById("left_side");
	var side3=document.getElementById("right_side");
	elm1.style.background='#ffcccc';
	side1.style.background="#ffcccc";
	side3.style.background="#99FF99";
}
function btn2(){
	var elm2=document.getElementById('box1');
	var side2=document.getElementById("left_side");
	var side4=document.getElementById("right_side");
	elm2.style.background='#99FF99';
	side2.style.background="#99FF99";
	side4.style.background="#ffcccc";
}

//
/*
var $box1=$(".box1");
var $button=$(".button");

$button.on("click", function(){
	$box1.toggleClass("active");
});
*/
//
//var i=0;
function change(ctrl){
	//var g=new Array(1000);
	var g=document.getElementById("result");
	g.value=ctrl.value;
	//i++;
}