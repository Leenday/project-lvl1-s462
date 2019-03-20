import { cons } from 'hexlet-pairs';
import { randomIntGenerator, isEven } from '../functionTools';
import gameRules from '..';

const rules = 'Answer "yes" if number even otherwise answer "no". \n';

const gameDetails = () => {
  const question = randomIntGenerator(1, 100);
  const rightAnswer = isEven(question);
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => gameRules(rules, gameDetails);
