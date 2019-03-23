import generatorGameData from '..';
import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../utils';

const description = 'Find the greatest common divisor of given numbers.\n';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }
  return getGreatestCommonDivisor(secondNum, firstNum % secondNum);
};

const generateGameData = () => {
  const firstNum = randomIntGenerator(2, 60);
  const secondNum = randomIntGenerator(2, 60);
  const question = (`${firstNum} ${secondNum}`);

  const rightAnswer = String(getGreatestCommonDivisor(firstNum, secondNum));
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => generatorGameData(description, generateGameData);
