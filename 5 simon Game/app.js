let gameseq=[]; // empty array
let userseq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("Game Started.");
        started = true;
        levelup();
    }
})


function levelup(){

    userseq=[];

    level++;
    h2.innerText = `Level ${level}`;

    //random btn choose
    let radind = Math.floor(Math.random()*3);
    let radcol = btns[radind];
    let radbut = document.querySelector(`.${radcol}`);
    // console.log(radind);
    // console.log(radcol);
    // console.log(radbut);
    gameseq.push(radcol);
    console.log(gameseq);
    btnflash(radbut);
}


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


//check
function checkAns(idx){
    if(userseq[idx]==gameseq[idx])
    {
        if(userseq.length == gameseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else
    {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}


// event listener 
function btnpress(){
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for( btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}


//reset
function reset(){
    gameseq=[]; 
    userseq=[];

    started = false;
    level = 0;
}


// level and highest score in homework. 
