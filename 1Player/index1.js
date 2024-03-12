let computer_move=document.getElementById('computer_moves')
let user_moves=document.getElementById('user_moves')
let Result=document.getElementById('result')
let Scissor=document.getElementById('scissor')
let Rock=document.getElementById('rock')
let Paper=document.getElementById('paper')
let possibleChoices=document.querySelectorAll('button')

let rock='&#128074;';
let paper='&#x270B;';
let scissors='&#x270c;';
 
let result;
let usermove;
let computermove;


Rock.addEventListener("click",()=>{
    user_moves.innerHTML="&#128074;"
    usermove="&#128074;"
  })
Paper.addEventListener("click",()=>{
    user_moves.innerHTML='&#X270B'
    usermove="&#x270B;"
  })
Scissor.addEventListener("click",()=>{
    user_moves.innerHTML="&#x270c"
    usermove="&#x270c;"
  })

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', () => {
    GenerateRandomNumber()
    Result_game()
}))
function GenerateRandomNumber(){
    const random_number=Math.floor(Math.random() * 3 )+1
    if(random_number==1){
        computer_move='&#128074;'
    }
    if(random_number==2){
        computer_move=`&#x270B;`
    }
    if(random_number==3){
        computer_move=`&#x270c;`
    }
    computer_moves.innerHTML=computer_move;
}
function Result_game(){
    if(computer_move === usermove){
        result=`Game is draw &#129309;`
    }
    if(computer_move === rock && usermove===paper){
        result='Dominating the match &#128521;'
    }
    if(computer_move === rock && usermove===scissors){
        result='Falling short in the match &#128532;'
    }
    if(computer_move === paper && usermove===rock){
        result='Falling short in the match &#128532;'
    }
    if(computer_move === paper && usermove===scissors){
        result='Dominating the match &#128521;'
    }
    if(computer_move === scissors && usermove===rock){
        result='Dominating the match &#128521;'
    }
    if(computer_move === scissors && usermove===paper){
        result='Falling short in the match &#128532;'
    }

    Result.innerHTML=result
}


