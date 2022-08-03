// console.log(document);



// document.querySelector('h1').textContent='hello Felipe';

//pick a random number between 1-20
//random()
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;
//console.log(document.querySelector('body').style)

document.querySelector('.check').addEventListener('click',function(){
    //1.read the input field number entered by the user
    //2.compare this number with secret number and give some feedbacks to the user

let guess = + document.querySelector('.guess').value;

//when there is no input
//what is the meaning of empty string in JS?
//it is a falsy
if(!guess){
   document.querySelector('.message').textContent='No number!'




}else if(guess===secretNumber){
    document.querySelector('.message').textContent='Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    if(score>highScore){
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }
}else if(guess !==secretNumber){
    if(score>1){
        document.querySelector('.message').textContent= guess > secretNumber ? 'Too High' : 'Too low!';
        score--;
        document.querySelector('.score').textContent=score;

    }else{
        document.querySelector('.message').textContent='Game Over!';
        document.querySelector('.score').textContent=0;
    }

}


})

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.score').textContent=score;
    //1.change background color to its original color;
    document.querySelector('body').style.backgroundColor='#222';
    //2.change the width of the square to its original size
    document.querySelector('.number').style.width='15rem';
    //3.put the question mark back
    document.querySelector('.number').textContent ='?';
})