// JavaScript Document

//Change Display
function d(val) {
		document.getElementById("d").value=val;
}

//Type numbers and operators
function v(val) {
	document.getElementById("d").value+=val;	
}

//Evaluate the equation
function e() {
		try {
			 d(eval(document.getElementById("d").value));
		}
		catch(err) {
				d("Error");
		}
}
function negative() {
	// evaluate the current equation
	e();
	// get teh value on the display and multiply it by -1
	var x = Number(document.getElementById("d").value);
	var y = x*(-1);
	// display the result
	d(y);
}
function absolute() {
	// evaluate the current equation
	e();
	// get teh value on the display and multiply it by -1
	var x = Number(document.getElementById("d").value);
	if (x>=0) {
		var y = x;
	}
	else {
		var y = x*(-1);
	}
	// display the result
	d(y);
}
function square() {
	// evaluate the current equation
	e();
	// get teh value on the display and square it
	var x = Number(document.getElementById("d").value);
	var y = Math.pow(x, 2);
	// display the result
	d(y);
}
function exponent() {
	// evaluate the current equation
	e();
	// get the value on the display and reset display
	var x = Number(document.getElementById("d").value);
	d(' ');
	// evaluate new exponent
	e();
	// get teh value on the display and multiply x z number of times
	var z = Number(document.getElementById("d").value);
	var y = Math.pow(x, z);
	// display the result
	d(y);
}
function squareroot() {
	// evaluate the current equation
	e();
	// get teh value on the display take  a square root of it
	var x = Number(document.getElementById("d").value);
	var y = Math.sqrt(x);
	// display the result
	d(y);
}