import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../utils';
import gameRules from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no". \n';

const isPrime = (number) => {
  const iter = (dividend, divider) => {
    if (divider === 1) {
      return true;
    } if (number % divider === 0) {
      return false;
    }
    return iter(dividend, divider - 1);
  };
  return iter(number, Math.round(Math.sqrt(number)));
};

const gameData = () => {
  const question = randomIntGenerator(1, 192);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => gameRules(description, gameData);
