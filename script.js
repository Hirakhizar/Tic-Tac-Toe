let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let newgame=document.querySelector(".newGame");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
console.log(boxes);
let turnO=true;
const winingPattrens = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box) => {
 box.addEventListener('click',()=>{
    console.log("box was clicked");
    

    
    if(turnO){
            
        box.innerText="O";
            turnO=false;


    }else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled =true;
    checkWinner();

 });

  
});

let resetgame =()=>{
    turnO=true;
    enablebtn();
    msgContainer.classList.add("hide");
}
let enablebtn =()=>{
    for (const box of boxes) {
        
        box.disabled=false;
        box.innerText="";
        
    }
}

let disablebtn =()=>{
    for (const box of boxes) {
        box.disabled=true;
        
    }
}
let showWinner=(winner)=>{
msg.innerText=`Congratulations, the winner is ${winner} `;
msgContainer.classList.remove("hide");
disablebtn();
}

let checkWinner =()=>{
for (const pattren of winingPattrens) {
    let pos1=boxes[pattren[0]].innerText;  
    let pos2=boxes[pattren[1]].innerText;
    let pos3=boxes[pattren[2]].innerText;
    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3)
            {
                console.log('Winner');
                showWinner(pos1);


            }
    }
   
    
}
}
newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);





   
    
