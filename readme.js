//warn
console.warn("%cIf you find any bugs or errors please report them on GitHub.", "color: #32e56f");
//Version
fetch('https://api.github.com/repos/K-plus69/Password-generator/releases/latest')
  .then(response => response.json())
  .then(data => console.log("%cPassword Generator (PG) " + localStorage.getItem('version'), "color: #32e56f"))
  .catch(error => {
        console.log("%cPassword Generator (PG) " + localStorage.getItem('version'), "color: #32e56f")
    });
