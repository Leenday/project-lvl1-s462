import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../utils';
import gameLaunching from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
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

const generateGameData = () => {
  const question = randomIntGenerator(1, 192);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => gameLaunching(description, generateGameData);
