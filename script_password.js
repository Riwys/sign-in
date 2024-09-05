'use strict'

window.addEventListener("load", function() {
	let input = document.querySelector("input");
	console.log(input);
	input.focus();
	console.log(input.placeholder);
	input.placeholder = "";

});

let input = document.querySelector("input");
input.addEventListener("input", function() {
	let button = document.querySelector("button");
	if (input.value == 'Therightpassword') {
		console.log(true);
		console.log(button);
		
		button.outerHTML = '<a href = "final.html" id = "goto_password"><button class="primary">Submit</button></a>';
		console.log(document.getElementById('goto_password'));
		

	} else {
		button.addEventListener("click", function() {
		let error_message = document.getElementById('error_message');
		error_message.hidden = false;
		error_message.style.cssText = "display: grid; justify-content: start;";

		let input = document.querySelector('input');
		input.style.cssText = "border: 2px solid red;";

		let span = document.querySelector('span');
		span.style.cssText = "color: red;";
		});
	}
});