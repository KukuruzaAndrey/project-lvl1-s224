import { cons } from 'hexlet-pairs';
import { getRandomInt, game, gcd } from '../index';

const gameHeader = 'Find the greatest common divisor of given numbers.';

const getStepValues = () => {
  const multiplier = getRandomInt(1, 10);
  const a = multiplier * getRandomInt(1, 10);
  const b = multiplier * getRandomInt(1, 15);

  const question = `${a} ${b}`;
  const correctAnswer = gcd(a, b);

  return cons(question, String(correctAnswer));
};

const calc = game(gameHeader, getStepValues);
export default calc;

