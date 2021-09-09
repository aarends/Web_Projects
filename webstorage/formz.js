function doFirst() {
	var button= document.getElementById("button");
	button.addEventListener("click", saveThingy, false); 
	display();
}

function saveThingy() {
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.setItem(one,two);
	display();
	document.getElementById("one").value="";   /* reset the value to none */
	document.getElementById("two").value="";   /* reset the value to none */
}

function display() {
	var rightbox = document.getElementById("rightbox");
	rightbox.innerHTML = "";
	
	for(var x=0; x<sessionStorage.length; x++){
		var a = sessionStorage.key(x);
		var b = sessionStorage.getItem(a);
		rightbox.innerHTML += a+" - "+b+"<br />";     /* add a new line after the loop */
	}
}

window.addEventListener("load", doFirst, false); 