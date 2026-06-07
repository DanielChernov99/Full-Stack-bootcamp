import promptSync from 'prompt-sync';
const prompt = promptSync();


const questions = [
  { question: "What is 2 + 2", answer: "4" },
  { question: "What is the capital of France", answer: "paris" },
  { question: "What year is it", answer: "2026" }
]

let score = 0;
const howManyQuestions = questions.length

for (const qAndA of questions) {
    if(askQuestion(qAndA.question,qAndA.answer))
        score++;
}
console.log(`Final Score : ${score}/${howManyQuestions}`);



function askQuestion(question,rightAnswer){
        const userAnswer = prompt(`${question}? : `)
        if (userAnswer.trim().toLowerCase() === rightAnswer.trim().toLowerCase()){
            console.log("Good boy, you got it right \n"); 
            return true         
        }
        console.log("no boeno,wrong answer\n"); 
            return false   
}

