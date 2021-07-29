var readlinesync = require("readline-sync");

var username = readlinesync.question("What is your name? ");

console.log("Welcome to DBZ Quiz game " + username + '!');
console.log('***************');
var score = 0;

function runtheprogram(){
  for(var i = 0; i < myquestions.length; i++){
  dbz(myquestions[i].Question, myquestions[i].Answer);
}
}

console.log('Please provide the suitable option.');
console.log('***************');

function dbz(Question, Answer){
  var ques = readlinesync.question(Question);
  if(ques.toUpperCase() === Answer.toUpperCase()){
    console.log('You are correct!');
    score++;
  }else{
    console.log('You are wrong!');
  }
  console.log('Current Score:', score);
}

var myquestions = [{
  Question: "Who is powerful DBZ character? \na)Pikalo \nb)Vegeta \nc)Goku\n",
  Answer: "c"
},{
  Question: "What item is used to restore a wounded Z fighters to full health? \na)Senzu bean \nb)Z sword \nc)Z Capsule\n",
  Answer: 'a'
}, {
  Question: "What's the highest Super Saiyan level attained by Vegeta in DBZ? \na)SS1 \nb)SS2 \nc)SS3\n",
  Answer: 'b' 
}, {
  Question: "Why does Vegeta allow himself to be possessed by Babidi? \na)In order to fight Goku \nb)In order to fight dabura \nc)n order to discover Babidi's true plan\n",
  Answer: 'a'
}, {
  Question: "Which DBZ character is Buu's best friend? \na)Vegeta \nb)Goku \nc)Hercule\n",
  Answer: 'c'
}]

runtheprogram();

if(score >= 4){
  console.log('You did really well!')
}else{
  while(true){
    var attempt = readlinesync.question("You score is low can you play it once again(y/n)?");

  if (attempt.toUpperCase() === "Y"){
    score = 0;
    runtheprogram(); 
    if(score >= 4){
      break;
    }else{
      continue;
    }
  }else{
    break;
  }
}
}

console.log('***************');
console.log('YoYo! You finished the game and your score is: ', score);

var HighScores = [{
    name: 'Tharunprasath A S',
    score: 5
}, {
    name: 'Killer',
    score: 4
}]

console.log('***************')
console.log('The highest scores so far is');

for(var i = 0; i < HighScores.length; i++){
    console.log(HighScores[i].name + ': ' + HighScores[i].score);
}

console.log('***************');
console.log('Thankyou for playing the game!');