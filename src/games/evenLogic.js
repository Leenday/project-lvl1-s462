import readlineSync from 'readline-sync';
import { randomIntGenerator, isEven, roundsLeft } from '../functionTools';

const gameItSelf = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no". \n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const counterOfIter = (round) => {
    if (round === 0) {
      console.log(`Congratulation, ${userName}!`);
      return;
    }
    const question = randomIntGenerator(1, 100);
    const rightAnswer = isEven(question);

    readlineSync.setDefaultOptions({ limit: ['yes', 'no'] });
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    counterOfIter(round - 1);
  };
  counterOfIter(roundsLeft);
};

export default gameItSelf;
