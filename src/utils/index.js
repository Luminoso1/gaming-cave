export const generateRandomNum = (length) => {
  return Math.floor(Math.random() * length);
};

export const findIndex = (array, property, value) => {
  return array.findIndex((item) => item[property] === value);
};
