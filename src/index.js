import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsTotal = 3;

const gameEnginePlay = (description, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description} \n`);
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}! \n`);

  const iter = (round) => {
    if (round === 0) {
      console.log(`Congratulation, ${name}!`);
      return;
    }
    const gameDetails = generateGameData();
    const question = car(gameDetails);
    const rightAnswer = cdr(gameDetails);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    iter(round - 1);
  };
  iter(roundsTotal);
};

export default gameEnginePlay;
