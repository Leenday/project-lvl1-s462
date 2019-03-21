import gameRules from '..';
import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../functionTools';

const description = 'Find the greatest common divisor of given numbers.\n';

const gcd = () => {
  const firstNum = randomIntGenerator(2, 60);
  const secondNum = randomIntGenerator(2, 60);
  const question = (`${firstNum} ${secondNum}`);
  const isBigger = firstNum > secondNum;

  const rightAnswerGenerator = (firstArg, secondArg) => {
    const iter = (divider) => {
      if (firstArg % divider === 0 && secondArg % divider === 0) {
        return divider;
      }
      return iter(divider - 1);
    };
    const divider = isBigger ? secondArg : firstArg;
    return iter(divider);
  };

  const rightAnswer = String(rightAnswerGenerator(firstNum, secondNum));
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => gameRules(description, gcd);
