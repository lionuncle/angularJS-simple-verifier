function load(){
	let age = document.getElementById("te").value;
	
	if(age < 18){
		//alert("you are under age")
		document.getElementById("alert1").style.visibility= "visible";
		return;
	}
	document.getElementById("alert1").style.visibility= "hidden";
	document.getElementById("alert2").style.visibility= "visible";
}