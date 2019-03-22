import gameRules from '..';
import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../utils';

const description = 'Find the greatest common divisor of given numbers.\n';

const rightAnswerGenerator = (firstArg, secondArg) => {
  const iter = (firstNum, secondNum) => {
    if (secondNum === 0) {
      return firstNum;
    }
    const remainder = firstNum > secondNum ? firstNum % secondNum : secondNum % firstNum;
    const divider = firstNum < secondNum ? firstNum : secondNum;
    return iter(divider, remainder);
  };
  return iter(firstArg, secondArg);
};

const gameData = () => {
  const firstNum = randomIntGenerator(2, 60);
  const secondNum = randomIntGenerator(2, 60);
  const question = (`${firstNum} ${secondNum}`);

  const rightAnswer = String(rightAnswerGenerator(firstNum, secondNum));
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => gameRules(description, gameData);
