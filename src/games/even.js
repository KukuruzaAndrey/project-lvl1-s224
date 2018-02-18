import { cons } from 'hexlet-pairs';
import { getRandomInt, game } from '..';

const gameHeader = 'Answer "yes" if number even otherwise answer "no".';

const generator = () => {
  const number = getRandomInt(1, 100);

  const question = `${number}`;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const even = game(gameHeader, generator);
export default even;
