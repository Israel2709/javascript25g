let names = ["Damián Tapia", "Laura Valle", "Rob Cruz"];

const printName = (nameToPrint) => {
  console.log(nameToPrint);
};
/*
for (let i = 0; i < names.length; i++) {
  printName(names[i]);
}

*/

/*names.forEach((item, index, arr) => {
  console.log(item);
  console.log(index);
  console.log(arr);
  console.log("-.-");
});*/

names.forEach(printName);

names.forEach((item, index) => {
  item === "Rob Cruz"
    ? console.log(`Rob cruz se encuentra en el índice ${index}`)
    : null;
});

const uppercaseNames = (namesArray) => {
  let uppercased = [];
  namesArray.forEach((name) => uppercased.push(name.toUpperCase()));
  console.log(uppercased);
  return uppercased;
};

uppercaseNames(names);

let numbers = [45, 8, 26, 21, 45, 78, 3];

const isEven = (number) => {
  number % 2 === 0
    ? console.log(`El número ${number} es par`)
    : console.log(`El número ${number} es impar`);
};

numbers.forEach(isEven);
/*Necesito saber cuáles de estos números son pares y cuáles nones*/
