import launchGame from '..';
import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../utils';

const description = 'What is the result of the expression?';

const generateGameData = () => {
  const firstNum = randomIntGenerator(0, 40);
  const secondNum = randomIntGenerator(0, 10);
  const operators = ['*', '+', '-'];
  const mathOperator = operators[randomIntGenerator(0, operators.length)];

  const question = `${firstNum} ${mathOperator} ${secondNum}`;

  const generateRightAnswer = (operator, num1, num2) => {
    switch (operator) {
      case '*':
        return num1 * num2;
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return operator;
    }
  };
  const rightAnswer = String(generateRightAnswer(mathOperator, firstNum, secondNum));
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => launchGame(description, generateGameData);
