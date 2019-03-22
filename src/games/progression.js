import generatorGameData from '..';
import { cons, car, cdr } from 'hexlet-pairs';
import randomIntGenerator from '../utils';

const description = 'What number is missing in the progression?\n';

const buildPairGameQuestionAnswer = (num) => {
  const step = randomIntGenerator(1, 5);
  const length = 10;
  const indexOfHiddenItem = randomIntGenerator(1, length - 1);
  const questionNumbers = [];
  for (let i = 0; i < length; i += 1) {
    questionNumbers[i] = num + step * i;
  }
  const rightAnswer = questionNumbers[indexOfHiddenItem];
  questionNumbers[indexOfHiddenItem] = '..';
  const pairOfGameQuestionAnswer = cons(rightAnswer, questionNumbers);
  return pairOfGameQuestionAnswer;
};

const gameData = () => {
  const creationPairQuastionAnswer = buildPairGameQuestionAnswer(randomIntGenerator(0, 60));

  const question = cdr(creationPairQuastionAnswer).join(' ');
  const rightAnswer = String(car(creationPairQuastionAnswer));
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => generatorGameData(description, gameData);
