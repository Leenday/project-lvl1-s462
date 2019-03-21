import gameRules from '..';
import { cons } from 'hexlet-pairs';
import randomIntGenerator from '../utils';

const description = 'What number is missing in the progression?\n';

const brainProgression = () => {
  const progressionGenerator = (a) => {
    const nStep = randomIntGenerator(1, 5);
    const nAmount = 10;
    const aProgression = [];
    let nNew = a;
    for (let i = 0; i < nAmount; i += 1) {
      aProgression[i] = nNew;
      nNew += nStep;
    }
    return aProgression;
  };

  const aQuestion = progressionGenerator(randomIntGenerator(0, 60));

  const nEncrypted = randomIntGenerator(0, 9);

  const questionGenerator = (arr) => {
    let result = ' ';
    const sSpace = ' ';
    const sReplacement = '..';
    for (let i = 0; i < arr.length; i += 1) {
      result += i === nEncrypted ? (sReplacement + sSpace) : (arr[i] + sSpace);
    }
    return result;
  };
  const question = questionGenerator(aQuestion);
  const rightAnswer = String(aQuestion[nEncrypted]);
  const gameItSelf = cons(question, rightAnswer);
  return gameItSelf;
};

export default () => gameRules(description, brainProgression);
