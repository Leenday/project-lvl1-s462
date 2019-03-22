import generatorGameData from '..';
import { cons, car, cdr } from 'hexlet-pairs';
import randomIntGenerator from '../utils';

const description = 'What number is missing in the progression?\n';

const buildPairGameQnA = (num) => {
  const step = randomIntGenerator(1, 5);
  const arrayLength = 10;
  const indexOfHiddenItem = randomIntGenerator(1, arrayLength - 1);
  const questionNumbers = [];
  for (let i = 0; i < arrayLength; i += 1) {
    questionNumbers[i] = num + step * i;
  }
  const rightAnswer = questionNumbers[indexOfHiddenItem];
  questionNumbers[indexOfHiddenItem] = '..';
  const pairOfGameQnA = cons(rightAnswer, questionNumbers);
  return pairOfGameQnA;
};

const gameData = () => {
  const quiz = buildPairGameQnA(randomIntGenerator(0, 60));

  const question = cdr(quiz).join(' ');
  const rightAnswer = String(car(quiz));
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => generatorGameData(description, gameData);
