import { cons } from 'hexlet-pairs';
import { getRandomInt, game } from '../index';

const gameHeader = 'What number is missing in this progression?';

const generator = () => {
  const initial = getRandomInt(1, 100);
  const difference = getRandomInt(1, 20);
  const missingMember = getRandomInt(0, 10);
  let question = '';
  for (let i = 0; i < 10; i += 1) {
    question = `${question} ${i === missingMember ? '..' : initial + (difference * i)}`;
  }

  const correctAnswer = initial + (difference * missingMember);

  return cons(question, String(correctAnswer));
};

const progression = game(gameHeader, generator);
export default progression;

