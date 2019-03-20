import gameRules from '..';
import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../functionTools';

const description = 'What is the result of the expression? \n';

const brainCalc = () => {
  const firstNum = randomIntGenerator(0, 40);
  const secondNum = randomIntGenerator(0, 10);
  const sighns = ['*', '+', '-'];
  const startPointRange = 0;
  const endPointRange = 3;
  const mathOperator = sighns[randomIntGenerator(startPointRange, endPointRange)];

  const question = (`${firstNum} ${mathOperator} ${secondNum}`);

  const rightAnswerGenerator = (operator) => {
    let answer;
    switch (operator) {
      case '*':
        answer = firstNum * secondNum;
        break;
      case '+':
        answer = firstNum + secondNum;
        break;
      case '-':
        answer = firstNum - secondNum;
        break;
      default:
        answer = NaN;
    }
    return answer;
  };
  const rightAnswer = String(rightAnswerGenerator(mathOperator));
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};


export default () => gameRules(description, brainCalc);
