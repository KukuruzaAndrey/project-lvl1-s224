import { cons } from 'hexlet-pairs';
import { getRandomInt, game, getBalanceNumber } from '..';

const gameHeader = 'Balance the given number.';

const generator = () => {
  const number = getRandomInt(1, 10000);

  const question = `${number}`;

  const correctAnswer = getBalanceNumber(number);

  return cons(question, String(correctAnswer));
};

const balance = game(gameHeader, generator);
export default balance;

