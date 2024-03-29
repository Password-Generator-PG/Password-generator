const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

clipboard.addEventListener('click', () => {

	if (resultEl.innerText == "") {
		alert3.style.visibility = "visible";
		document.getElementById("alert2").innerHTML = "Generate a password first!";
	}else {
		const textarea = document.createElement('textarea');
		const password = resultEl.innerText;

		if(!password) { return; }

		textarea.value = password;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		textarea.remove();
		alert3.style.visibility = "visible";
		document.getElementById("alert2").innerHTML = "Password copied to clipboard!";
}
});

generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	if (lengthEl.value > 50) {
		alert3.style.visibility = "visible";
		document.getElementById("alert2").innerHTML = "Password too long! A too long password may crash the website!";
	} else {
		resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
	}
});

const length = +lengthEl.value;
const hasLower = lowercaseEl.checked;
const hasUpper = uppercaseEl.checked;
const hasNumber = numbersEl.checked;
const hasSymbol = symbolsEl.checked;
resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}

	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}

	const finalPassword = generatedPassword.slice(0, length);

	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/'
	return symbols[Math.floor(Math.random() * symbols.length)];
}
//download
function download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
// Start file download.
const textorhtml = document.getElementById("dowop");
	document.getElementById("btn-dow").addEventListener("click", function(event){
		event.preventDefault();
		if (textorhtml.style.display === "none") {
			textorhtml.style.display = "block";
			event.preventDefault();
		} else {
			textorhtml.style.display = "none";
			event.preventDefault();
		}
	});

document.getElementById("downloadop").addEventListener("click", function(){
	if (resultEl.innerText == "") {
		alert3.style.visibility = "visible";
		document.getElementById("alert2").innerHTML = "Generate a password first!";
	}else {
		const forapp = "For: " + document.getElementById("forapp").value;
		const notes = "Note: " + document.getElementById("notes").value;
		const opname = document.getElementById("opname").value;
		const text = "Keep it Safe! This file is ONLY on your hard drive and should never leave it! \n------------------------------------------ \n" + forapp + "\nYour password: " + resultEl.innerText + "\n" + notes + "\n------------------------------------------ \n  _____   _____ \n |  __  \ / ____|\n | |__) | |  __ \n |  ___/| | |_ |\n | |    | |__| |\n |_|      \_____|\n                 \n------------------------------------------ \nCreated in PG.\nProvided by K+. \nAll rights reserved.";
	 if (opname == "") {
	 	const filename = Math.floor(Math.random() * 1000000000) + 1 + "-PG" + ".txt";
		download(filename, text);
		textorhtml.style.display = "none";
	 } else {
		 const filename = opname + ".txt";
 		download(filename, text);
 		textorhtml.style.display = "none";
	 }
}}, false);
let deferredPrompt;
document.querySelector('.closeb').addEventListener('click', function() {
  textorhtml.style.display = "none";
});


//alert
const alert3 = document.getElementById('alert');
const closebnt22 = document.getElementById("okay");
function click22(){
	alert3.style.visibility = "hidden";
};

//app
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js');
}
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  //e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  //showInstallPromotion();
});

window.addEventListener('appinstalled', () => {
  // Hide the app-provided install promotion
  hideInstallPromotion();
  // Clear the deferredPrompt so it can be garbage collected
  deferredPrompt = null;
});
if (localStorage.getItem('backgroundProblem') == "yes") {
			document.body.style.backgroundImage = "url(/background2.jpg)";
}
if (localStorage.getItem('removeBackground') == "yes") {
	document.body.style.background = "#1b1a2a";
}
if (localStorage.getItem('lite') == "yes") {
	window.location.href = "lite.html";
}
