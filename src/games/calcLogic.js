import gameRules from '..';
import { cons } from 'hexlet-pairs';
import { randomIntGenerator, sighns } from '../functionTools';

const rules = 'What is the result of the expression? \n';

const brainCalc = () => {
  const firstNum = randomIntGenerator(0, 40);
  const secondNum = randomIntGenerator(0, 10);
  const mathOperator = sighns[randomIntGenerator(0, 3)];

  const question = (`${firstNum} ${mathOperator} ${secondNum}`);

  let rightAnswer;

  switch (mathOperator) {
    case '*':
      rightAnswer = firstNum * secondNum;
      break;
    case '+':
      rightAnswer = firstNum + secondNum;
      break;
    case '-':
      rightAnswer = firstNum - secondNum;
      break;
    default:
      rightAnswer = NaN;
  }
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};


export default () => gameRules(rules, brainCalc);
