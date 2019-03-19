import readlineSync from 'readline-sync';
import { roundsLeft, randomIntGenerator, sighns } from '../functionTools';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression? \n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const counterOfIter = (round) => {
    if (round === 0) {
      console.log(`Congratulation, ${userName}!`);
      return;
    }

    const firstNum = randomIntGenerator(0, 40);
    const secondNum = randomIntGenerator(0, 10);
    const mathOperator = sighns[randomIntGenerator(0, 3)];

    const question = (`${firstNum} ${mathOperator} ${secondNum}`);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    let rightAnswer;

    switch (mathOperator) {
      case '*':
        rightAnswer = firstNum * secondNum;
        break;
      case '+':
        rightAnswer = firstNum + secondNum;
        break;
      case '-':
        rightAnswer = firstNum - secondNum;
        break;
      default:
        return;
    }


    if (rightAnswer === Number(answer)) {
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

export default brainCalc;
