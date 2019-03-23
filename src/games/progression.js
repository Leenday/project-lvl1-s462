import generatorGameData from '..';
import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../utils';

const description = 'What number is missing in the progression?\n';

const length = 10;

const buildGameProgression = () => {
  const start = randomIntGenerator(0, 60);
  const step = randomIntGenerator(1, 5);
  const questionNumbers = [];
  for (let i = 0; i < length; i += 1) {
    questionNumbers[i] = start + step * i;
  }
  return questionNumbers;
};

const generateGameData = () => {
  const progression = buildGameProgression();
  const indexOfHiddenItem = randomIntGenerator(1, length - 1);
  const rightAnswer = String(progression[indexOfHiddenItem]);
  progression[indexOfHiddenItem] = '..';
  const question = progression.join(' ');
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => generatorGameData(description, generateGameData);
