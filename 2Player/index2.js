let Rock1=document.getElementById('rock1')
let Paper1=document.getElementById('paper1')
let Scissor1=document.getElementById('scissor1')
let Rock2=document.getElementById('rock2')
let Paper2=document.getElementById('paper2')
let Scissor2=document.getElementById('scissor2')
let Move1=document.querySelector('.move1')
let Move2=document.querySelector('.move2')
let Result=document.getElementById('result')

let player1
let player2
let result

let rock='&#128074;'
let paper='&#x270B;'
let scissor='&#x270c;'

Rock1.addEventListener('click',()=>{
    Move1.innerHTML='&#128074;';
    player1='&#128074;'
})
Paper1.addEventListener('click',()=>{
    Move1.innerHTML='&#x270B;';
    player1='&#x270B;'

})
Scissor1.addEventListener('click',()=>{
    Move1.innerHTML='&#x270c;';
    player1='&#x270c;'
})

Rock2.addEventListener('click',()=>{
    Move2.innerHTML='&#128074;';
    player2='&#128074;'
})
Paper2.addEventListener('click',()=>{
    Move2.innerHTML='&#x270B;';
    player2='&#x270B;'
})
Scissor2.addEventListener('click',()=>{
    Move2.innerHTML='&#x270c;';
    player2='&#x270c;'
})

function show_result(){
    if(player1===player2){
        result='Result: Game is draw &#129309;'
    }
    if(player1 === rock && player2===paper){
        result='Result: Player 2 Dominating the match &#128521;'
    }
    if(player1 === rock && player2===scissor){
        result='Result: Player 1 Dominating the match &#128521;'
    }
    if(player1 === paper && player2===rock){
        result='Result: Player 1 Dominating the match &#128521;'
    }
    if(player1 === paper && player2===scissor){
        result='Result: Player 2 Dominating the match &#128521;'
    }
    if(player1 === scissor && player2===rock){
        result='Result: Player 2 Dominating the match &#128521;'
    }
    if(player1 === scissor && player2===paper){
        result='Result: Player 1 Dominating the match &#128521;'
    }

    Result.innerHTML=result
}
// show_result()

let checked1=document.querySelector('#ready');
let checked2=document.querySelector('#Ready');
let btn=document.querySelector('#show_result')

    checked1.addEventListener('click',()=>{
        btn.classList.add("check")
    })
    checked2.addEventListener('click',()=>{
        btn.classList.add("checked")
    })




let element1=document.querySelector('.label1')
let element2=document.querySelector('.label2')



function hide_button(){
    element1.style.display='none'
    element2.style.display='none'
    btn.classList.remove("check")
    btn.classList.remove("checked")
    checked1.checked=false
    checked2.checked=false
    show_result()
}

function show_label1(){
    element1.style.display='inline-block'
}
function show_label2(){
    element2.style.display='inline-block'
}


