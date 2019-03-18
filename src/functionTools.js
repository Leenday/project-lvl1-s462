export const randomIntGenerator = (min, max) => (Math.floor(Math.random() * (max - min)) + min);

export const isEven = (number) => {
  if (number % 2 === 1) {
    return 'no';
  }
  return 'yes';
};
