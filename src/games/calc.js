import { cons } from 'hexlet-pairs';
import { getRandomInt, game } from '..';

const gameHeader = 'What is the result of the expression?';

const generator = () => {
  const numberOfSign = getRandomInt(0, 3);
  const a = getRandomInt(1, 50);
  const b = getRandomInt(1, 50);
  const signs = '+-*';
  const sign = signs[numberOfSign];

  const question = `${a} ${sign} ${b}`;
  let correctAnswer;
  if (sign === '+') {
    correctAnswer = a + b;
  } else if (sign === '-') {
    correctAnswer = a - b;
  } else if (sign === '*') {
    correctAnswer = a * b;
  }

  return cons(question, String(correctAnswer));
};

const calc = game(gameHeader, generator);
export default calc;

