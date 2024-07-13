let boxes = document.querySelectorAll(".boxes")
let turn1 = document.querySelector('.turn1')
let turn2 = document.querySelector('.turn2')
let msg = document.querySelector('.msg')
let span = document.querySelector('#result')
let reset = document.getElementById('reset')
let ng = document.getElementById('ng')
let turnX=true;
let clickSound=new Audio("button-124476.mp3")
let winnerSound=new Audio("winning-218995.mp3")

let WinnerCondition=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
reset.addEventListener('click', ()=>{
    boxes.forEach(box=>{
        box.innerText="";
        box.disabled=false;
        box.classList.add('hover')
        msg.classList.add('hide')
        box.classList.remove('b-s')
    })
})

ng.addEventListener('click', ()=>{
    boxes.forEach(box=>{
        box.innerText="";
        box.disabled=false;
        box.classList.add('hover')
        msg.classList.add('hide')
        box.classList.remove('b-s')
    })
})

boxes.forEach(box =>{
    box.addEventListener('click',()=>{
        clickSound.play();
        if(turnX===true){
        box.innerText='X';
        box.style.color='rgb(174, 51, 96)'
        turn2.classList.add('b-s')
        turn1.classList.remove('b-s')
        turnX=false
        }
        else{
        box.innerText='O';
        box.style.color='rgb(17, 52, 182)'
        turn1.classList.add('b-s')
        turn2.classList.remove('b-s')
        turnX=true;
        }
        checkWinner();
    })
})

function checkWinner(){
    for(let condition of WinnerCondition){
        let box1 =boxes[condition[0]].innerText;
        let box2 =boxes[condition[1]].innerText;
        let box3 =boxes[condition[2]].innerText;

        if(box1!='' && box2 != '' && box3 != '' ){
            if(box1===box2 && box2===box3){
                showResult(box1);
                winnerSound.play();
                boxes.forEach(box=>{
                box.classList.add("b-s");    
                })
                boxes[condition[0]].classList.remove('b-s')
                boxes[condition[1]].classList.remove('b-s')
                boxes[condition[2]].classList.remove('b-s') 
            }
        } 
    }
}

function showResult(reult){
    boxes.forEach(box=>{
        box.disabled=true;
        box.classList.remove('hover')
    })
msg.classList.remove('hide')
span.innerText=reult
if(reult==='X'){
    span.style.color='rgb(174, 51, 96)'
}
else{
    span.style.color='rgb(17, 52, 182)'
}
}