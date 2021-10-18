const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bold.yellowBright('       Welcome To  Quiz Game'));
console.log(chalk.bold.yellowBright("------------------------------------"));
console.log("give your answer in a , b ,c \n");

var questions = [
{
  question:'What is the national game of India? \na. Hockey \nb. Cricket \nc. Football \n',
  answer: 'a'
  
},
{
  question: "Where does India lies in terms of population world wise? \na. 1st \nb. 2nd \nc. 5th \n",
  answer: "b"
},
{
  question:'Which animal is considerd as sacred in India? \na. Cow \nb. Deer \nc. Lion \n',
  answer:'A'
},
{
  question:'  WHICH CITY IS BELIEVED TO BE ONE OF THE OLDEST LIVING CITIES IN THE WORLD?  \na.  PARIS \nb. VARANASI \nc. SAN FRANCISO\n',
  answer:'B'
}
];



var score = 0;


const game = (question, answer) => {
  let ans = readlineSync.question(question + ":--> ");
  
  //checking answer
  if(ans.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green('You are right!'))
    score = score + 1;
  }
  else{
    console.log(chalk.red('Opps! This is not correct.'))
  }
}

for(let i = 0; i < questions.length; i++){
  game(questions[i].question, questions[i].answer)
  console.log(chalk.grey('\n*************************'));
}

console.log("Your Final Score : " + chalk.yellow(score));