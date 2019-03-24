import launchGame from '..';
import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../utils';

const description = 'What number is missing in the progression?';

const length = 10;

const buildProgression = (firstNumber, difference) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = firstNumber + difference * i;
  }
  return progression;
};

const generateGameData = () => {
  const start = randomIntGenerator(0, 60);
  const step = randomIntGenerator(1, 5);
  const progression = buildProgression(start, step);
  const indexOfHiddenItem = randomIntGenerator(1, length - 1);
  const rightAnswer = String(progression[indexOfHiddenItem]);
  progression[indexOfHiddenItem] = '..';
  const question = progression.join(' ');
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => launchGame(description, generateGameData);
