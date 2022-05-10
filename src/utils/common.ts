export const getArraySum = (list: number[]) =>
  list.reduce((previousValue, currentValue) => previousValue + currentValue);

export const sleep = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));
