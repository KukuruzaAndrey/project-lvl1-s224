import { getRandomInt, game } from '../index';

const gameHeader = 'Answer "yes" if number even otherwise answer "no".\n';

const getStepValues = () => {
  const number = getRandomInt(1, 100);
  const isEven = number % 2 === 0;

  const stepValues = {};
  stepValues.question = `${number}`;
  stepValues.condition = userAnswer => (userAnswer === 'yes' && isEven) || (userAnswer === 'no' && !isEven);
  stepValues.correctAnswer = isEven ? 'yes' : 'no';
  return stepValues;
};

const even = game(gameHeader, getStepValues);
export default even;
