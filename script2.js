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
clipboard.addEventListener('click', () =>{
  if (resultEl.innerText == '') {
    alert3.style.visibility = 'visible';
    document.getElementById('alert2').innerHTML = 'Generate a password first!';
  } else {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    if (!password) {
      return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert3.style.visibility = 'visible';
    document.getElementById('alert2').innerHTML = 'Password copied to clipboard!';
  }
});
generate.addEventListener('click', () =>{
  const length = + lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});
const length = + lengthEl.value;
const hasLower = lowercaseEl.checked;
const hasUpper = uppercaseEl.checked;
const hasNumber = numbersEl.checked;
const hasSymbol = symbolsEl.checked;
resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [
    {
      lower
    },
    {
      upper
    },
    {
      number
    },
    {
      symbol
    }
  ].filter(item=>Object.values(item) [0]);
  // Doesn't have a selected type
  if (typesCount === 0) {
    return '';
  }  // create a loop

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type=>{
      const funcName = Object.keys(type) [0];
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
  return + String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/'
  return symbols[Math.floor(Math.random() * symbols.length)];
}//download

function download(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}// Start file download.

const textorhtml = document.getElementById('dowop');
document.getElementById('btn-dow').addEventListener('click', function (event) {
  event.preventDefault();
  if (textorhtml.style.display === 'none') {
    textorhtml.style.display = 'block';
    event.preventDefault();
  } else {
    textorhtml.style.display = 'none';
    event.preventDefault();
  }
});
document.getElementById('downloadop').addEventListener('click', function () {
  if (resultEl.innerText == '') {
    alert3.style.visibility = 'visible';
    document.getElementById('alert2').innerHTML = 'Generate a password first!';
  } else {
    const forapp = 'For: ' + document.getElementById('forapp').value;
    const notes = 'Note: ' + document.getElementById('notes').value;
    const opname = document.getElementById('opname').value;
    const text = 'Keep it Safe! This file is ONLY on your hard drive and should never leave it! \n------------------------------------------ \n' + forapp + '\nYour password: ' + resultEl.innerText + '\n' + notes + '\n------------------------------------------ \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n........##.........###.........##....... \n....##########..#########..##########... \n.......####.......#####.......####...... \n.....###..###....##...##....###..###.... \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n------------------------------------------ \nCreated in PG.\nProvided by K+. \nAll rights reserved.';
    if (opname == '') {
      const filename = Math.floor(Math.random() * 1000000000) + 1 + '-PG' + '.txt';
      download(filename, text);
      textorhtml.style.display = 'none';
    } else {
      const filename = opname + '.txt';
      download(filename, text);
      textorhtml.style.display = 'none';
    }
  }
}, false);
let deferredPrompt;
document.querySelector('.closeb').addEventListener('click', function () {
  textorhtml.style.display = 'none';
});
//alert
const alert3 = document.getElementById('alert');
const closebnt22 = document.getElementById('okay');
function click22() {
  alert3.style.visibility = 'hidden';
};
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
};
// Initialize deferredPrompt for use later to show browser install prompt.
window.addEventListener('beforeinstallprompt', (e) =>{
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  //showInstallPromotion();
});
window.addEventListener('appinstalled', () =>{
  // Hide the app-provided install promotion
  hideInstallPromotion();
  // Clear the deferredPrompt so it can be garbage collected
  deferredPrompt = null;
});
//Command
const comm = document.getElementById('command-inp');
const commands = document.getElementById('command');
const gax = document.getElementById('gax');
comm.addEventListener('keyup', function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('bnt001917').click();
  }
});
function comclick() {
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg test') {
    alert('Working!');
    console.warn('Working!');
  };
  if (document.getElementById('command-inp').value.toLowerCase() == 'help') {
    gax.innerHTML = '<br>' + 'PG:/Current commands (every command starts with \'-pg \'):' + '<br>' + 'reload (forces the page to reload)' + '<br>' + 'reset (resets page completly)' + '<br>' + 'test (does a test to see the functionallity of the page)' + '<br>' + 'generate (generates a password)' + '<br>' + 'copy (copies the password)' + '<br>' + 'download (downloads the password)' + '<br>' + 'close (closes the command popup)' + '<br>' + '$advanced (loads advanced page)' + '<br>' + '$support (loads support page)' + '<br>' + '$about (loads about page)' + '<br>' + '$donate (loads donation page)' + '<br>' + 'remove-background (--save/--delete) (removes background image)' + '<br>' + 'link (get current url)' + '<br>' + 'background-problem (--save/--delete) (fixes background problems such as lightmode on browsers with forced dark mode)' + '<br>' + 'lite (--save) (opens the lite version for people with bad connection or problems)' + '<br>' + 'hideCookie (Hides cookie popup without saving)' + '<br>' + 'upgrade (updates PG manually)' + '<br>' + gax.innerHTML;
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg help') {
    gax.innerHTML = '<br>' + 'PG:/Current commands (every command starts with \'-pg\'):' + '<br>' + 'reload (forces the page to reload)' + '<br>' + 'reset (resets page completly)' + '<br>' + 'test (does a test to see the functionallity of the page)' + '<br>' + 'generate (generates a password)' + '<br>' + 'copy (copies the password)' + '<br>' + 'download (downloads the password)' + '<br>' + 'close (closes the command popup)' + '<br>' + '$advanced (loads advanced page)' + '<br>' + '$support (loads support page)' + '<br>' + '$about (loads about page)' + '<br>' + '$donate (loads donation page)' + '<br>' + 'remove-background (--save/--delete) (removes background image)' + '<br>' + 'link (get current url)' + '<br>' + 'background-problem (--save/--delete) (fixes background problems such as lightmode on browsers with forced dark mode)' + '<br>' + 'lite (--save) (opens the lite version for people with bad connection or problems)' + '<br>' + 'hideCookie (Hides cookie popup without saving)' + '<br>' + 'upgrade (updates PG manually)' + '<br>' + gax.innerHTML;
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg reset') {
    gax.innerHTML = '<br>' + 'PG:/Resetting...' + gax.innerHTML;
    localStorage.removeItem('cookie-terms');
    localStorage.removeItem('backgroundProblem');
    localStorage.removeItem('removeBackground');
    localStorage.removeItem('version');
    window.location.reload();
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg upgrade') {
    gax.innerHTML = '<br>' + 'PG:/Update Starting...' + gax.innerHTML;
    localStorage.removeItem('version');
    window.location.reload();
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg reload') {
    gax.innerHTML = '<br>' + 'PG:/Reloading...' + gax.innerHTML;
    window.location.reload();
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg generate') {
    const length = + lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
    gax.innerHTML = '<br>' + 'PG:/Generated password: ' + resultEl.innerHTML + gax.innerHTML;
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg copy') {
    gax.innerHTML = '<br>' + 'PG:/Password copied to clipboard.' + gax.innerHTML;
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    if (!password) {
      return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert3.style.visibility = 'visible';
    document.getElementById('alert2').innerHTML = 'Password copied to clipboard!';
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg download') {
    gax.innerHTML = '<br>' + 'PG:/Download started...' + gax.innerHTML;
    const text = 'Keep it Safe! This file is ONLY on your hard drive and should never leave it! It has this name because its harder to identify for spyware. \n------------------------------------------ \nFor: [the website/app] \nYour password: ' + resultEl.innerText + '\n------------------------------------------ \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n........##.........###.........##....... \n....##########..#########..##########... \n.......####.......#####.......####...... \n.....###..###....##...##....###..###.... \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n........................................ \n------------------------------------------ \nCreated in PG.\nProvided by K+. \nAll rights reserved.';
    const filename = Math.floor(Math.random() * 1000000000) + 1 + '-PG' + '.txt';
    download(filename, text);
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg close') {
    document.getElementById('command').style.visibility = 'hidden';
    document.getElementById('command-inp').unselect();
  };
  if (document.getElementById('command-inp').value.toLowerCase() == 'close') {
    document.getElementById('command').style.visibility = 'hidden';
    document.getElementById('command-inp').unselect();
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg $support') {
    window.open('https://password-generator.netlify.com/support.html');
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg $about') {
    window.open('https://password-generator.netlify.com/about.html');
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg $advanced') {
    window.open('https://password-generator.netlify.com/advanced.html');
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg $donate') {
    window.open('https://password-generator.netlify.com/donation.html');
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg remove-background') {
    document.body.style.background = '#1b1a2a';
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg remove-background --save') {
    document.body.style.background = '#1b1a2a';
    localStorage.setItem('removeBackground', 'yes');
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg remove-background --delete') {
    document.body.style.backgroundImage = 'url(/background1.svg)';
    localStorage.removeItem('removeBackground');
    window.location.reload();
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg background-problem') {
    document.body.style.backgroundImage = 'url(/background2.jpg)';
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg background-problem --save') {
    document.body.style.backgroundImage = 'url(/background2.jpg)';
    localStorage.setItem('backgroundProblem', 'yes');
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg background-problem --delete') {
    document.body.style.backgroundImage = 'url(/background1.svg)';
    localStorage.removeItem('backgroundProblem');
    window.location.reload();
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg link') {
    var linko = window.location.toString();
    gax.innerHTML = '<br>' + 'PG:/' + linko + gax.innerHTML;
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg lite') {
    window.location.href = 'lite.html';
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg lite --save') {
    window.location.href = 'lite.html';
    localStorage.setItem('lite', 'yes');
  };
  if (document.getElementById('command-inp').value.toLowerCase() == '-pg hideCookie') {
    cookies1.style.visibility = 'hidden';
  };
  if (document.getElementById('command-inp').value.toLowerCase() == 'clear') {
    gax.innerHTML = '';
  };
  comm.value = '';
};
if (localStorage.getItem('backgroundProblem') == 'yes') {
  document.body.style.backgroundImage = 'url(/background2.jpg)';
}
if (localStorage.getItem('removeBackground') == 'yes') {
  document.body.style.background = '#1b1a2a';
}
if (localStorage.getItem('lite') == 'yes') {
  window.location.href = 'lite.html';
}
if (window.location.href.indexOf('#removelite') > - 1) {
  localStorage.setItem('lite', 'no');
}//Console

function bottom1() {
  if (document.getElementById('command').style.display == 'block') {
    document.getElementById('command').style.display = 'none';
  } else {
    document.getElementById('command').style.display = 'block';
    document.getElementById('command-inp').select();
  }
};
//version
if (window.matchMedia('(display-mode: standalone)').matches) {
  var updates = document.getElementById('updatecc');
  var serviceWorker;
  fetch('https://api.github.com/repos/K-plus69/Password-generator/releases/latest').then(response=>response.json()).then(data=>{
    document.getElementById('versioncc').innerHTML = localStorage.getItem('version');
    if (localStorage.getItem('version') != data.tag_name) {
      if (localStorage.getItem('version') == null) {
        document.getElementById('updatetov').innerHTML = data.tag_name;
      } else {
        document.getElementById('updatetov').innerHTML = localStorage.getItem('version') + ' -> ' + data.tag_name;
      }
      localStorage.setItem('version', data.tag_name);
      if ('serviceWorker' in navigator) {
        document.getElementById('updatecc').style.display = 'block';
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
          for (let registration of registrations) {
            registration.unregister()
          }
        });
        caches.keys().then(cacheNames=>{
          cacheNames.forEach(cacheName=>{
            caches.delete(cacheName);
          });
        }).then(() =>{
          setTimeout(installtimer, 7000);
          navigator.serviceWorker.register('sw.js');
          localStorage.setItem('updatern', '1');
          function installtimer() {
            window.location.reload();
          }
        })
      }
    }
  }).catch(error=>{
    document.getElementById('versioncc').innerHTML = localStorage.getItem('version');
  });
  //get status
  if (localStorage.getItem('updatern') == '1') {
    document.getElementById('updatecc').style.display = 'block';
    localStorage.setItem('updatern', '0');
    setTimeout(updatetime, 25000);
    function updatetime() {
      window.location.reload();
    };
    setTimeout(notifytime, 15000);
    function notifytime() {
      let message = new Notification('Updated PG to version ' + localStorage.getItem('version'));
    }
  };
} else {
  var updates = document.getElementById('updatecc');
  var serviceWorker;
  fetch('https://api.github.com/repos/K-plus69/Password-generator/releases/latest').then(response=>response.json()).then(data=>{
    document.getElementById('versioncc').innerHTML = localStorage.getItem('version');
    if (localStorage.getItem('version') != data.tag_name) {
      if (localStorage.getItem('version') == null) {
        document.getElementById('updatetov').innerHTML = data.tag_name;
      } else {
        document.getElementById('updatetov').innerHTML = localStorage.getItem('version') + ' -> ' + data.tag_name;
      }
      localStorage.setItem('version', data.tag_name);
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
          for (let registration of registrations) {
            registration.unregister()
          }
        });
        caches.keys().then(cacheNames=>{
          cacheNames.forEach(cacheName=>{
            caches.delete(cacheName);
          });
        }).then(() =>{
          window.location.reload();
        })
      }
    }
  }).catch(error=>{
    document.getElementById('versioncc').innerHTML = localStorage.getItem('version');
  });
};
//Firefox
if (localStorage.getItem('firefox') != 'yes') {
  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    document.getElementById('firrefox').style.display = 'grid';
    function click30() {
      localStorage.setItem('firefox', 'yes');
      document.getElementById('firrefox').style.display = 'none';
    };
  };
};
//Edge
if (localStorage.getItem('edge') != 'yes') {
  if (navigator.userAgent.toLowerCase().indexOf('Edge') > -1) {
    document.getElementById('eddge').style.display = 'grid';
    function click31() {
      localStorage.setItem('edge', 'yes');
      document.getElementById('eddge').style.display = 'none';
    };
  };
};
