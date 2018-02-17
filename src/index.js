import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
const getBalanceNumber = (number) => {
  const strNumber = String(number);
  const numberLength = strNumber.length;

  let sumDigits = 0;
  for (let i = 0; i < numberLength; i += 1) {
    sumDigits += Number(strNumber[i]);
  }
  const normalizedDigit = Math.floor(sumDigits / numberLength);
  let balanceNumStr = String(normalizedDigit).repeat(numberLength);
  let balanceNum = Number(balanceNumStr);

  const countRemainingGigits = normalizedDigit === 0 ? sumDigits : sumDigits % numberLength;
  for (let i = 0; i < countRemainingGigits; i += 1) {
    balanceNum += 10 ** i;
  }
  balanceNumStr = String(balanceNum);
  const countZeros = numberLength - balanceNumStr.length;
  for (let i = 0; i < countZeros; i += 1) {
    balanceNumStr = `0${balanceNumStr}`;
  }
  return balanceNumStr;
};
const game = (gameHeader, getStepValues) => () => {
  console.log('Welcome to the Brain Games!');
  console.log(gameHeader);
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let countQuestion = 0;
  while (countQuestion < 3) {
    const values = getStepValues();
    const question = car(values);
    const correctAnswer = cdr(values);
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
export { game, getRandomInt, gcd, getBalanceNumber };
