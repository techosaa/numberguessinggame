const btn = document.getElementById("btn");
const prompt_box = document.getElementById("prompt_box");
const promt_txt = document.getElementById("promt_txt");
const txt = document.getElementById("txt");
const num = document.getElementById("num");
let chancesTxt = document.getElementById("chancesTxt");
let randomNumber = Math.floor(Math.random() * 100) + 1;

let number;
let Chances = 7;
chancesTxt.innerHTML = "Chances:- " + Chances;
console.log(randomNumber);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(num.value);
  Chances--;
  chancesTxt.innerHTML = "Chances:- " + Chances;
  if (Chances == 0) {
    activateBox("Lost "+ "&#128577 "+ 
    "The number is "+ randomNumber);

    
  }
  number = num.value;
  checkNum(number);
  num.value = "";
});

function checkNum(number) {
  if (number == randomNumber) {
    activateBox("Win");
  
  }
else if (number>randomNumber) {
  txt.innerHTML = "Enter  small Number";
}else {
  txt.innerHTML = "Enter  large Number";
}
}
function activateBox(e) {
  prompt_box.classList.add("active");
  promt_txt.innerHTML = "You " + e;
  randomNumber = Math.floor(Math.random() * 10) + 1;
}
function play(e) {
  prompt_box.classList.remove("active");
  Chances = 10;
  txt.innerHTML = "";
  chancesTxt.innerHTML = "Chances:- " + Chances;}
