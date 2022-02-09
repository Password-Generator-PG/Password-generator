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

	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

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
	const symbols = '!@#$%^&*(){}[]=<>/,.'
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
document.getElementById("btn-dow").addEventListener("click", function(){
	if (resultEl.innerText == "") {
		alert3.style.visibility = "visible";
		document.getElementById("alert2").innerHTML = "Generate a password first!";
	}else {
    // Generate download
		const text = "Keep it Safe! This file is ONLY on your hard drive and should never leave it! It has this name because its harder to identify for spyware. \n------------------------------------------ \nFor: [the website/app] \nYour password: " + resultEl.innerText + "\n------------------------------------------ \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n........##.........###.........##....... \n....##########..#########..##########... \n.......####.......#####.......####...... \n.....###..###....##...##....###..###.... \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n------------------------------------------ \nCreated in PG.\nProvided by K+. \nAll rights reserved.";
    const filename = Math.floor(Math.random() * 1000000000) + 1 + "-PG" + ".txt";

    download(filename, text);
}}, false);
let deferredPrompt;


//alert
const alert3 = document.getElementById('alert');
const closebnt22 = document.getElementById("okay");
function click22(){
	alert3.style.visibility = "hidden";
};
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/service-worker.js');
}
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  //e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});

window.addEventListener('appinstalled', () => {
  // Hide the app-provided install promotion
  hideInstallPromotion();
  // Clear the deferredPrompt so it can be garbage collected
  deferredPrompt = null;
  // Optionally, send analytics event to indicate successful install
  console.log('PWA was installed');
});
// make the whole serviceworker process into a promise so later on we can
// listen to it and in case new content is available a toast will be shown
window.isUpdateAvailable = new Promise(function(resolve, reject) {
	// lazy way of disabling service workers while developing
	if ('serviceWorker' in navigator && ['localhost', '127'].indexOf(location.hostname) === -1) {
		// register service worker file
		navigator.serviceWorker.register('service-worker.js')
			.then(reg => {
				reg.onupdatefound = () => {
					const installingWorker = reg.installing;
					installingWorker.onstatechange = () => {
						switch (installingWorker.state) {
							case 'installed':
								if (navigator.serviceWorker.controller) {
									// new update available
									resolve(true);
								} else {
									// no update available
									resolve(false);
								}
								break;
						}
					};
				};
			})
			.catch(err => console.error('[SW ERROR]', err));
	}
});
//cookies
const cookies1 = document.getElementById('cookiess');
if (localStorage.getItem('cookie-terms-mob') == "okay") {

}else {

function click26(){
  	localStorage.setItem('cookie-terms-mob', 'okay');
					cookies1.style.visibility = "hidden";
  };
};
//Console
function bottom1(){
	if (document.getElementById("command").style.visibility == "visible") {
				document.getElementById("command").style.visibility = "hidden";
						document.getElementById("command-inp").unselect();
	} else {
		document.getElementById("command").style.visibility = "visible";
		document.getElementById("command-inp").select();
	}
};
//Command
const comm = document.getElementById("command-inp");
const commands = document.getElementById("command");
const gax = document.getElementById("gax");

comm.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("bnt001917").click();
  }
});

function comclick(){
	if (document.getElementById("command-inp").value == "-pg test") {
		alert("Working!");
	};
	if (document.getElementById("command-inp").value == "help") {
		gax.innerHTML =  "<br>" + "PG:/Current commands (every command starts with '-pg '):" + "<br>" + "reload (forces the page to reload)" +"<br>" + "reset (resets page completly)" +"<br>" + "test (does a test to see the functionallity of the page)" +"<br>" + "generate (generates a password)" +"<br>" + "copy (copies the password)" +"<br>" + "download (downloads the password)" +"<br>" + "close (closes the command popup)" + "<br>" + "$advanced (loads advanced page)" + "<br>" + "$support (loads support page)" + "<br>" + "$about (loads about page)" + "<br>" + "$donate (loads donation page)" + "<br>" + "remove-background (--save/--delete) (removes background image)" + "<br>" + "link (get current url)" + "<br>" + "background-problem (--save/--delete) (fixes background problems such as lightmode on browsers with forced dark mode)" + "<br>" + "lite (--save) (opens the lite version for people with bad connection or problems)" + "<br>" + "hideCookie (Hides cookie popup without saving)" + "<br>" + "hideDiscord (Hides discord popup without saving)" + gax.innerHTML;
	};
	if (document.getElementById("command-inp").value == "-pg help") {
		gax.innerHTML = "<br>" + "PG:/Current commands (every command starts with '-pg'):" + "<br>" + "reload (forces the page to reload)" +"<br>" + "reset (resets page completly)" +"<br>" + "test (does a test to see the functionallity of the page)" +"<br>" + "generate (generates a password)" +"<br>" + "copy (copies the password)" +"<br>" + "download (downloads the password)" +"<br>" + "close (closes the command popup)" + "<br>" + "$advanced (loads advanced page)" + "<br>" + "$support (loads support page)" + "<br>" + "$about (loads about page)" + "<br>" + "$donate (loads donation page)" + "<br>" + "remove-background (--save/--delete) (removes background image)" + "<br>" + "link (get current url)" + "<br>" + "background-problem (--save/--delete) (fixes background problems such as lightmode on browsers with forced dark mode)" + "<br>" + "lite (--save) (opens the lite version for people with bad connection or problems)" + "<br>" + "hideCookie (Hides cookie popup without saving)" + "<br>" + "hideDiscord (Hides discord popup without saving)" + "<br>" + "server-status" + gax.innerHTML;
	};
	if (document.getElementById("command-inp").value == "-pg reset") {
		gax.innerHTML = "<br>" + "PG:/Resetting..." + gax.innerHTML;
		localStorage.removeItem('dc');
		localStorage.removeItem('cookie-terms');
		localStorage.removeItem('backgroundProblem');
		localStorage.removeItem('removeBackground');
		localStorage.removeItem('A%0FBF$812');
		localStorage.removeItem('chung812');
		window.location.reload();
	};
	if (document.getElementById("command-inp").value == "-pg reload") {
		gax.innerHTML = "<br>" + "PG:/Reloading..." + gax.innerHTML;
		window.location.reload();
	};
	if (document.getElementById("command-inp").value == "-pg generate") {
		const length = +lengthEl.value;
		const hasLower = lowercaseEl.checked;
		const hasUpper = uppercaseEl.checked;
		const hasNumber = numbersEl.checked;
		const hasSymbol = symbolsEl.checked;

		resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
		gax.innerHTML = "<br>" + "PG:/Generated password: " +  resultEl.innerHTML+ gax.innerHTML ;
	};
	if (document.getElementById("command-inp").value == "-pg copy") {
		gax.innerHTML = "<br>" + "PG:/Password copied to clipboard." +gax.innerHTML;
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
	};
	if (document.getElementById("command-inp").value == "-pg download") {
		gax.innerHTML = "<br>" + "PG:/Download started..."+gax.innerHTML;
		const text = "Keep it Safe! This file is ONLY on your hard drive and should never leave it! It has this name because its harder to identify for spyware. \n------------------------------------------ \nFor: [the website/app] \nYour password: " + resultEl.innerText + "\n------------------------------------------ \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n........##.........###.........##....... \n....##########..#########..##########... \n.......####.......#####.......####...... \n.....###..###....##...##....###..###.... \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n------------------------------------------ \nCreated in PG.\nProvided by K+. \nAll rights reserved.";
    const filename = Math.floor(Math.random() * 1000000000) + 1 + "-PG" + ".txt";

    download(filename, text);
	};
	if (document.getElementById("command-inp").value == "-pg close") {
		document.getElementById("command").style.visibility = "hidden";
				document.getElementById("command-inp").unselect();
	};
	if (document.getElementById("command-inp").value == "close") {
		document.getElementById("command").style.visibility = "hidden";
				document.getElementById("command-inp").unselect();
	};
	if (document.getElementById("command-inp").value == "-pg $support") {
		window.open("https://k-plus-password-generator.netlify.app/support.html");
	};
	if (document.getElementById("command-inp").value == "-pg $about") {
		window.open("https://k-plus-password-generator.netlify.app/about.html");
	};
	if (document.getElementById("command-inp").value == "-pg $advanced") {
		window.open("https://k-plus-password-generator.netlify.app/advanced.html");
	};
	if (document.getElementById("command-inp").value == "-pg $donate") {
		window.open("https://k-plus-password-generator.netlify.app/donation.html");
	};
	if (document.getElementById("command-inp").value == "-pg remove-background") {
		document.body.style.background = "#1b1a2a";
	};
	if (document.getElementById("command-inp").value == "-pg remove-background --save") {
		document.body.style.background = "#1b1a2a";
		localStorage.setItem('removeBackground', 'yes');
	};
	if (document.getElementById("command-inp").value == "-pg remove-background --delete") {
		document.body.style.backgroundImage = "url(/background1.svg)";
		localStorage.removeItem('removeBackground');
		window.location.reload();
	};
	if (document.getElementById("command-inp").value == "-pg background-problem") {
		document.body.style.backgroundImage = "url(/background2.jpg)";
	};
	if (document.getElementById("command-inp").value == "-pg background-problem --save") {
		document.body.style.backgroundImage = "url(/background2.jpg)";
		localStorage.setItem('backgroundProblem', 'yes');
	};
	if (document.getElementById("command-inp").value == "-pg background-problem --delete") {
		document.body.style.backgroundImage = "url(/background1.svg)";
		localStorage.removeItem('backgroundProblem');
		window.location.reload();
	};
	if (document.getElementById("command-inp").value == "-pg link") {
		var linko = window.location.toString();
	  gax.innerHTML = "<br>" + "PG:/" +linko +gax.innerHTML;
	};
	if (document.getElementById("command-inp").value == "-pg lite") {
		window.location.href = "lite.html";
	};
	if (document.getElementById("command-inp").value == "-pg lite --save") {
		window.location.href = "lite.html";
		localStorage.setItem('lite', 'yes');
	};
	if (document.getElementById("command-inp").value == "-pg hideCookie") {
		cookies1.style.visibility = "hidden";
	};
	if (document.getElementById("command-inp").value == "-pg hideDiscord") {
		discord.style.visibility = "hidden";
	};
	if (document.getElementById("command-inp").value == "-pg A%0FBF$812") {
		gax.innerHTML = gax.innerHTML + "<br>" + "Bruh";
		document.body.style.backgroundImage = "url(/floppa.jpg)";
	};
	if (document.getElementById("command-inp").value == "-pg A%0FBF$812 --save") {
		document.body.style.backgroundImage = "url(/A%0FBF$812.jpg)";
		localStorage.setItem('A%0FBF$812', 'flop');
	};
	if (document.getElementById("command-inp").value == "-pg A%0FBF$812 --delete") {
		document.body.style.backgroundImage = "url(/background1.svg)";
		localStorage.removeItem('A%0FBF$812');
	};
	if (document.getElementById("command-inp").value == "-pg chung812") {
		gax.innerHTML = gax.innerHTML + "<br>" + "Bruh";
		document.body.style.backgroundImage = "url(/chung812.png)";
	};
	if (document.getElementById("command-inp").value == "-pg chung812 --save") {
		document.body.style.backgroundImage = "url(/chung812.png)";
		localStorage.setItem('chung812', 'chungus');
	};
	if (document.getElementById("command-inp").value == "-pg chung812 --delete") {
		document.body.style.backgroundImage = "url(/background1.svg)";
		localStorage.removeItem('A%0FBF$812');
	};
	if (document.getElementById("command-inp").value == "-pg 11/10") {
		gax.innerHTML = gax.innerHTML + "<br>" + "Bruh";
		document.body.style.backgroundImage = "url(/11f10.jpg)";
	};
	if (document.getElementById("command-inp").value == "-pg 11/10 --save") {
		document.body.style.backgroundImage = "url(/11f10.jpg)";
		localStorage.setItem('11f10', '11f10');
	};
	if (document.getElementById("command-inp").value == "-pg 11/10 --delete") {
		document.body.style.backgroundImage = "url(/background1.svg)";
		localStorage.removeItem('11f10');
	};
	if (document.getElementById("command-inp").value == "clear") {
		gax.innerHTML = "";
	};

	comm.value = "";
	if (document.getElementById("command-inp").value == "-pg server-status") {
		var http = require("http");

     http.get({host: "https://k-plus-password-generator.netlify.app"}, function(http){
    if( http.statusCode == 200 ){
   gax.innerHTML = "<br>" + "PG:/Server is online and running normal." + gax.innerHTML ;
 }else{
   gax.innerHTML = "<br>" + "PG:/Server error detected. Site may be down. Error: " +  res.statusCode+ gax.innerHTML ;
 }
   });
	};

	comm.value = "";
};
if (localStorage.getItem('backgroundProblem') == "yes") {
			document.body.style.backgroundImage = "url(/background2.jpg)";
}
if (localStorage.getItem('removeBackground') == "yes") {
	document.body.style.background = "#1b1a2a";
}
if (localStorage.getItem('lite') == "yes") {
	window.location.href = "lite.html";
}
if (window.location.href.indexOf("#removelite") > -1) {
localStorage.setItem('lite', 'no');
}
if (localStorage.getItem('A%0FBF$812') == "flop") {
			document.body.style.backgroundImage = "url(/A%0FBF$812.jpg)";
}
if (localStorage.getItem('chung812') == "chungus") {
			document.body.style.backgroundImage = "url(/chung812.png)";
}
if (localStorage.getItem('11f10') == "11f10") {
			document.body.style.backgroundImage = "url(/11f10.jpg)";
}
//cookiess
const cookies2 = document.getElementById('cookiess');
if (localStorage.getItem('cookie-terms') == "okay") {

}else {
cookies2.style.visibility = "visible";
function click26(){
  	localStorage.setItem('cookie-terms', 'okay');
					cookies2.style.visibility = "hidden";
  };
};
