import generatorGameData from '..';
import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../utils';

const description = 'Find the greatest common divisor of given numbers.\n';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }
  const remainder = firstNum > secondNum ? firstNum % secondNum : secondNum % firstNum;
  const divider = firstNum < secondNum ? firstNum : secondNum;
  return getGreatestCommonDivisor(divider, remainder);
};

const gameData = () => {
  const firstNum = randomIntGenerator(2, 60);
  const secondNum = randomIntGenerator(2, 60);
  const question = (`${firstNum} ${secondNum}`);

  const rightAnswer = String(getGreatestCommonDivisor(firstNum, secondNum));
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => generatorGameData(description, gameData);
