import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../utils';
import generatorGameData from '..';

const description = 'Answer "yes" if number even otherwise answer "no". \n';

const isEven = num => num % 2 === 0;

const gameData = () => {
  const question = randomIntGenerator(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => generatorGameData(description, gameData);
