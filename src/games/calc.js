import generatorGameData from '..';
import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../utils';

const description = 'What is the result of the expression? \n';

const generateGameData = () => {
  const firstNum = randomIntGenerator(0, 40);
  const secondNum = randomIntGenerator(0, 10);
  const signs = ['*', '+', '-'];
  const mathOperator = signs[randomIntGenerator(0, signs.length)];

  const question = `${firstNum} ${mathOperator} ${secondNum}`;

  const generateRightAnswer = (operator, num1, num2) => {
    let answer;
    switch (operator) {
      case '*':
        answer = num1 * num2;
        break;
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      default:
        answer = NaN;
    }
    return answer;
  };
  const rightAnswer = String(generateRightAnswer(mathOperator, firstNum, secondNum));
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => generatorGameData(description, generateGameData);
