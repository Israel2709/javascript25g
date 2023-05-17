/*let ratio = 15;
const PI = 3.1415;

let area = PI * ratio * ratio

let ratio2 = 20

let area2 = PI * ratio * ratio

let ratio3 = 30
let area3 = PI * ratio * ratio*/

function getCircleArea(ratio) {
  //let ratio =
  const PI = 3.1415;
  let area = PI * ratio * ratio;
  //console.log(area);
  return area;
}

let circleArea1 = getCircleArea(5);
let circleArea2 = getCircleArea(3);
console.log(circleArea1);
console.log(circleArea2);

/*
1.-Crear una nueva función llamada getRectangleArea
2.-definir el nuevo nombre de la función
3.- definir los 2 argumentos de la función ( base y altura)
4.- definir la variable en que se guardará el resultado de la operación
5.- hacer la operación
6.- definir que nos tiene que regresar la misma variable en que se guardó
*/

/*
1.-Crear una nueva función llamada getRectangleArea
    esta función recibe 2 argumentos: base, height
2.- Dentro de la función, crear la variable result
3.- Asignar a la variable result el resultado de ejecutar la fórmula para cálculo de área de un rectángulo ( b x h ) (usar los valores de los argumentos)
4.- dentro de la función, retornar la variable result
*/

function getRectangleArea(base, height) {
  /* función convencional*/
  let result = base * height;
  return result;
}

let rect1 = getRectangleArea(15, 15);
console.log(rect1);

/*
const arrowRectangleArea = (base, height) => {
  let result = base * height;
  return result;
};*/

const arrowRectangleArea = (base, height) => base * height;

let arrowArea = arrowRectangleArea(3, 8);

console.log(arrowArea);
/*
function getCircleArea(ratio) {
    //let ratio =
    const PI = 3.1415;
    let area = PI * ratio * ratio;
    //console.log(area);
    return area;
  }*/

const PI = 3.14;

const arrowCircleArea = (ratio) => PI * ratio * ratio;

let arrowCircle = arrowCircleArea(10);
console.log(arrowCircle);

const isMinor = (num1, num2) => num1 < num2 

function isMinor(num1, num2){
    return num1 < num2 
}

const joinNameInitials = (name, lastname) => {
    let nameInitial = /*primer caracter del nombre*/
    let lastnameInitials = /*primer caracter de cada apellido*/
    let result = nameInitial + ". " + lastnameInitials + ". "
    return result 
}

/*
    1.- Crear una función que me indique si un número es par
    2.- Crear una función que me indique si una persona es mayor de edad o menor de edad
*/

console.log( myFunction(5))