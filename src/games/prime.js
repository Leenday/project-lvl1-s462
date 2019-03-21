import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../utils';
import gameRules from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no". \n';

const gameData = () => {
  const question = randomIntGenerator(1, 192);
  const isPrime = (nArg) => {
    const iter = (nFirst, divider) => {
      if (divider === 1) {
        return true;
      } if (nArg % divider === 0) {
        return false;
      }
      return iter(nFirst, divider - 1);
    };
    return iter(nArg, nArg - 1);
  };
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => gameRules(description, gameData);
