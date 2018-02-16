import { getRandomInt, game } from '../index';

const gameHeader = 'What is the result of the expression?\n';

const getStepValues = () => {
  const numberOfSign = getRandomInt(0, 3);
  const a = getRandomInt(1, 50);
  const b = getRandomInt(1, 50);
  const signs = '+-*';
  const sign = signs[numberOfSign];

  const stepValues = {};
  stepValues.question = `${a} ${sign} ${b}`;
  stepValues.condition = (userAnswer) => {
    let condition;
    if (sign === '+') {
      condition = a + b === Number(userAnswer);
    } else if (sign === '-') {
      condition = a - b === Number(userAnswer);
    } else if (sign === '*') {
      condition = a * b === Number(userAnswer);
    }
    return condition;
  };

  if (sign === '+') {
    stepValues.correctAnswer = a + b;
  } else if (sign === '-') {
    stepValues.correctAnswer = a - b;
  } else if (sign === '*') {
    stepValues.correctAnswer = a * b;
  }

  return stepValues;
};

const calc = game(gameHeader, getStepValues);
export default calc;

