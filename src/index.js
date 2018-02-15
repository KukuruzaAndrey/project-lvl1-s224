import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
};

const even = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let countQuestion = 0;

  while (countQuestion < 3) {
    countQuestion += 1;
    const questionNumber = getRandomInt(1, 100);
    const isEven = questionNumber % 2 === 0;

    console.log(`Question: ${questionNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (countQuestion === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default greetings;
export { even };
