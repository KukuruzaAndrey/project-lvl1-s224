import { cons } from 'hexlet-pairs';
import { getRandomInt, game, getBalanceNumber } from '../index';

const gameHeader = 'Balance the given number.';

const getStepValues = () => {
  const number = getRandomInt(1, 10000);

  const question = `${number}`;

  const correctAnswer = getBalanceNumber(number);

  return cons(question, String(correctAnswer));
};

const balance = game(gameHeader, getStepValues);
export default balance;

