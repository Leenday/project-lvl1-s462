import readlineSync from 'readline-sync';

const askUserName = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hi ${name}! `);
};
export default askUserName;
