let game_seq=[]
let user_seq=[]
let btns=["yellow","red","purple","green"]

let started=false
let highestscr=0;

let level=0
let h2=document.querySelector("h2")
document.addEventListener("keypress",function(){
    if(started==false){
       
        started=true

        levelup()
    }
})


function reset(){
    started=false;
    level=0;
    game_seq=[]
    user_seq=[]
    
}

function btnflash(btn){
   btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}

function userflash(btn){
    btn.classList.add("user")
     setTimeout(function(){
         btn.classList.remove("user")
     },250)
 }

function levelup(){
    user_seq=[]
level++

if(level>highestscr){
    
    highestscr=level
}
else{
    highestscr=highestscr
}
h2.innerText=`Level ${level}`
let randomIndex=Math.floor(Math.random() *3)
let randomColor=btns[randomIndex]
let randomButton=document.querySelector(`.${randomColor}`)
game_seq.push(randomColor)

btnflash(randomButton)
}

function btnpress(){
   let btn=this;
   userflash(btn)
  userColor=  btn.getAttribute("id")
  user_seq.push(userColor)
  checkAns(user_seq.length -1)
}


function checkAns(indx){

if(user_seq[indx] === game_seq[indx]){
    if(user_seq.length == game_seq.length){
       setTimeout(function(){
        levelup()
       },1000)
    }
}
else{
    if(level<highestscr){
    h2.innerHTML=`Game Over! Your Score is <b>${level}</b><br> Highest Score: ${highestscr} <br> Press Any key to start`
    document.body.style.backgroundColor="red"
    setTimeout(function(){
        document.body.style.backgroundColor="white"
    },150)
 
}
else{
    h2.innerHTML=` <b>New Record!</b><br>Highest Score: ${highestscr} <br> Press Any key to start`
   
}
reset()
}
}

let allbtns=document.querySelectorAll(".btn")

for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

