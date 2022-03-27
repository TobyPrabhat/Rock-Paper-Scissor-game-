const yourchoicedisplay = document.getElementById("YourChoice");
const computerchoicedisplay = document.getElementById("ComputerChoice")
const resultdisplay = document.getElementById("Result")
const process = document.querySelectorAll("button")
let choice
let computerchoice
let result
let a = 0;
const counting = document.getElementById("count")
process.forEach(processchoice => processchoice.addEventListener('click', (e) => {
choice = e.target.id
yourchoicedisplay.innerHTML = choice
computerchoicedisplayfun()
resultofgame()
}))

function computerchoicedisplayfun(){
  const random = Math.floor(Math.random()*3)
  if(random===1){
    computerchoice = "Rock";
  }
  else if(random===2){
    computerchoice = "Paper";
  }
  else{
    computerchoice = "Scissor"
  }
  computerchoicedisplay.innerHTML = computerchoice
}

function resultofgame(){
  if(computerchoice==='Scissor' && choice === 'Rock'){
    result = 'You Win'
  }
  else if(computerchoice==='Scissor' && choice === 'Paper'){
    result = 'You Loose'
  }
  else if(computerchoice==='Rock' && choice === 'Paper'){
    result = 'You Win'
  }
  else if(computerchoice==='Rock' && choice === 'Scissor'){
    result = 'You Loose'
  }
  else if(computerchoice==='Paper' && choice === 'Scissor'){
    result = 'You Win'
  }
  else if(computerchoice==='Paper' && choice === 'Rock'){
    result = 'You Loose'
  }
  else if(computerchoice===choice){
    result = 'Draw:)'
  }
  resultdisplay.innerHTML = result

  if(result === 'You Win'){
    a++;
  }
  else if(result === 'You Loose'){
    a--;
  }
  counting.innerHTML = a
}