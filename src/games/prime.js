import { cons } from 'hexlet-pairs';
import { getRandomInt, game, isPrime } from '..';

const gameHeader = 'Is this number prime?';

const generator = () => {
  const number = getRandomInt(1, 100);

  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const calc = game(gameHeader, generator);
export default calc;

