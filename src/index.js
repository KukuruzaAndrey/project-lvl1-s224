import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const game = (gameHeader, getStepValues) => () => {
  console.log('Welcome to the Brain Games!');
  console.log(gameHeader);
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let countQuestion = 0;
  while (countQuestion < 3) {
    const pair = getStepValues();
    const question = car(pair);
    const correctAnswer = cdr(pair);
    countQuestion += 1;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (countQuestion === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default greetings;
export { game, getRandomInt };
