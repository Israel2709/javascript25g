let numbers = [8, 4, 6, 2, 3, 4];

const getEvens = (numbersArray) => {
  let result = numbersArray.filter((item) => {
    return item % 2 === 0;
  });
  return result;
};

let evens = getEvens(numbers);

console.log(evens);
