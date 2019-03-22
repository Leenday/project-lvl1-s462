import gameRules from '..';
import { cons, car, cdr } from 'hexlet-pairs';
import randomIntGenerator from '../utils';

const description = 'What number is missing in the progression?\n';

const progressionGenerator = (a) => {
  const step = randomIntGenerator(1, 5);
  const arrayLength = 10;
  const randomElement = randomIntGenerator(1, arrayLength - 1);
  const arrayProgression = [];
  for (let i = 0; i < arrayLength; i += 1) {
    arrayProgression[i] = a + step * i;
  }
  const rightAnswer = arrayProgression[randomElement];
  arrayProgression[randomElement] = '..';
  const quest = cons(rightAnswer, arrayProgression);
  return quest;
};

const gameData = () => {
  const quiz = progressionGenerator(randomIntGenerator(0, 60));

  const question = cdr(quiz).join(' ');
  const rightAnswer = String(car(quiz));
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => gameRules(description, gameData);
