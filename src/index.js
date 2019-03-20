import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsLeft = 3;

const gameRules = (rule, gameData) => {
  console.log(`Welcome to the Brain Games! \n${rule}`);

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}! `);

  const counterOfIter = (round) => {
    if (round === 0) {
      console.log(`Congratulation, ${name}!`);
      return;
    }
    const gameDetails = gameData();
    const question = car(gameDetails);
    const rightAnswer = cdr(gameDetails);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (String(rightAnswer) === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    counterOfIter(round - 1);
  };
  counterOfIter(roundsLeft);
};

export default gameRules;
