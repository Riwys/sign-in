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
	if (input.value.includes("@")) {
		console.log(true);
		console.log(button);
		
		button.outerHTML = '<a href = "password.html" id = "goto_password"><button class="primary">Next</button></a>';
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


/*
let button = document.querySelector("button");
button.addEventListener("click", function() {
	let input = document.querySelector("input");
	if (input.value.includes("@")) {
		console.log(true);
		console.log(button);
		
		button.outerHTML = '<a href = "password.html" id = "goto_password"><button class="primary">Next</button></a>';
		console.log(document.getElementById('goto_password'));
		

	} else {
	let error_message = document.getElementById('error_message');
	error_message.hidden = false;
	error_message.style.cssText = "display: grid; justify-content: start;";

	let input = document.querySelector('input');
	input.style.cssText = "border: 2px solid red;";

	let span = document.querySelector('span');
	span.style.cssText = "color: red;";

	}

});
*/

/*
let button = document.querySelector("button");
console.log(button);
button.addEventListener("click", function() {
	console.log(button);
	let error_message = document.getElementById('error_message');
	error_message.hidden = false;
	error_message.style.cssText = "display: grid; justify-content: start;";

	let input = document.querySelector('input');
	input.style.cssText = "border: 2px solid red;";

	let span = document.querySelector('span');
	span.style.cssText = "color: red;";

});
*/


/*
let button = document.querySelector("button");
console.log(button);
button.addEventListener("click", function() {
	console.log(button);
	let input = document.querySelector("input");
	console.log(input.value);
	if (input.value.includes("@")) {
		console.log(true);
	} else {
		console.log(false);
		let error_message = document.createElement('div');
		
		error_message.innerHTML = "Enter a valid email or phone";
		console.log(error_message.innerHTML);
		
		let elem = document.getElementById("coords-show-mark");
		console.log(elem);
		let coords = elem.getBoundingClientRect();
		console.log(coords.left , coords.bottom);
		error_message.style.left = coords.left + 'px';
		error_message.style.top = coords.bottom + 'px';
		error_message.style.cssText = "position: absolute; color: red";
		error_message.className = "make_it_red";
		console.log("fine till now");
		document.body.append(error_message);
		
		console.log(error_message);

	}

});
*/










/*
let button = document.querySelector("button");
button.addEventListener("click", function() {
	let input = document.querySelector("input");
	console.log(input.value);
	if(!input.value.includes("@")) {
		input.className = "error_indicator";

		
		let message = document.createElement('div');
		message.innerHtml = "couldn't find your google account";
		let label = document.querySelector("label");
		document.label.append(message);
		

		let elem = document.getElementById("coords-show-mark");
		let message = document.createElement('div');
		message.className = "welcome";
		// better to use a css class for the style here
		message.style.cssText = "position: absolute; color: black";

		// assign coordinates, don't forget "px"!
		let coords =  elem.getBoundingClientRect();

		message.style.left = coords.left + 12 +'px';
		message.style.top = coords.bottom + -8 + 'px';

		message.innerHTML = "lala";

		return message;
	}

	let link = document.getElementById("goto_password");
		console.log("href");
		link.href = "password.html";
});
*/