
const input = require('readline-sync');
let ans = input.question("Tell me your name : ");
console.log("welcome " + ans + " to game how well do you know me  ");
let score = 0;

let questionaire = [
  { question: "what is my favourate colour ? ", answer: 'blue' },
  { question: "which sport I like most ?  ", answer: 'football' },
  { question: "what is the colour of my eyes  ?  ", answer: 'brown' },
  { question: "Do I like walking ? ", answer: 'yes' },
  { question: "which is my favorate bike ? ", answer: 'mt15' },
];

for (let x of questionaire) {
  ans = input.question("\nquesion is : " + x.question);

  if (ans === x.answer) {
    ++score;
  }

}

console.log("your score is : " + score);

