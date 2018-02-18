import { cons } from 'hexlet-pairs';
import { getRandomInt, game, getMemberAP } from '..';

const gameHeader = 'What number is missing in this progression?';

const generator = () => {
  const initial = getRandomInt(1, 100);
  const difference = getRandomInt(1, 20);
  const missingMember = getRandomInt(1, 10);

  const generateMembersAP = (counter) => {
    if (counter > 10) return '';
    return `${counter === missingMember ? '..' : getMemberAP(initial, difference, counter)} ${generateMembersAP(counter + 1)} `;
  };
  const question = generateMembersAP(1);

  const correctAnswer = getMemberAP(initial, difference, missingMember);

  return cons(question, String(correctAnswer));
};

const progression = game(gameHeader, generator);
export default progression;

