/*
    array.push(item) 
    array.concat(array2)
    array.shift()
    array.pop()
    array.reverse()
    array.splice(index, howmany, items...)
    array.fill(value, start, end)
    array.sort(callback)
*/

let arr1 = ["perro", "gato", "iguana"];
let arr2 = ["guepardo", "león", "tigre"];

arr1.push("lagarto");

console.log(arr1);

let concatenatedArrays = arr1.concat(arr2);

console.log(concatenatedArrays);
console.log(arr1);
console.log(arr2);

concatenatedArrays.shift();

console.log(concatenatedArrays);
concatenatedArrays.pop();
console.log(concatenatedArrays);
concatenatedArrays.splice(3, 1, "Elefante", "pingüino");
console.log(concatenatedArrays);
concatenatedArrays.sort();
console.log(concatenatedArrays);
/*concatenatedArrays.fill("araña", 2, 8);
console.log(concatenatedArrays);*/
/*
let emptyArray = new Array(10);
console.log(emptyArray);
emptyArray.fill("filled", 0, 10);

console.log(emptyArray);*/

let numbersArray = [5, 1, 85, 45, 26, 12, 98, 789];
numbersArray.sort((a, b) => a - b);

console.log(numbersArray);
console.log(concatenatedArrays);
console.log(concatenatedArrays.reverse());

let products = [
  {
    name: "cable de corriente",
    price: 15,
  },
  {
    name: "Pedalera",
    price: 6500,
  },
  {
    name: "Audífonos",
    price: 1200,
  },
];

console.log(
  products.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA > nameB) {
      return -1;
    } else if (nameA < nameB) {
      return 1;
    } else {
      return 0;
    }
  })
);

let mentors = [
  ["Naomi", "López"],
  ["Israel", "Salinas"],
  ["Charles", "Silva"],
  ["Rose", "Ortega"],
];

const getFullNames = (mentorsArray) => {
  let fullNames = [];
  for (let i = 0; i < mentorsArray.length; i++) {
    let name = mentorsArray[i][0];
    let lastname = mentorsArray[i][1];
    fullNames.push(`${name} ${lastname}`);
  }

  return fullNames;
};

let koders = [
  {
    name: "Verónica Cruz",
    scores: {
      html: 10,
      css: 9.2,
      js: 9.7,
      bootstrap: 8,
    },
    isGraduated: true,
  },
  {
    name: "Miguel Aceves",
    scores: {
      html: 8.7,
      css: 10,
      js: 8.3,
      bootstrap: 9.8,
    },
    isGraduated: false,
  },
  {
    name: "Antonio Cano",
    scores: {
      html: 9.2,
      css: 10,
      js: 10,
      bootstrap: 6.5,
    },
    isGraduated: false,
  },
];

/*
    1.- Necesito una lista que contenga los nombres completos de los mentores ordenados alfabéticamente
    2.- Necesito una lista con los nombres y promedios generales de todos los koders
    3.- Necesito una lista con los nombres de aquellos koders que aún no se han graduado
    4.- Necesito conocer el promedio grupal de cada materia impartida en el bootcamp
        html -> 9
        css -> 10
    5.- Necesito saber cúal es el koder con el promedio más alto y cúal el que tiene el promedio más bajo 
    */
