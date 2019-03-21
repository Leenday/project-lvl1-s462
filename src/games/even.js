import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../functionTools';
import gameRules from '..';

const description = 'Answer "yes" if number even otherwise answer "no". \n';

const gameDetails = () => {
  const question = randomIntGenerator(1, 100);
  const isEven = question % 2 === 0;
  const rightAnswer = isEven ? 'yes' : 'no';
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => gameRules(description, gameDetails);
