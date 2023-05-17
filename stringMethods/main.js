let str = "cAmEllO";
/*
const capitalizeWord = (wordToCapitalize) => {
  let substr1 = wordToCapitalize.substring(0, 1);
  let substr2 = wordToCapitalize.substring(1);

  substr1 = substr1.toUpperCase();
  substr2 = substr2.toLowerCase();

  let result = substr1.concat(substr2);
  return result;
};
*/
const capitalizeWord = (wordToCapitalize) =>
  `${wordToCapitalize.substring(0, 1).toUpperCase()}  ${wordToCapitalize
    .substring(1)
    .toLowerCase()}`;

let test1 = capitalizeWord(str);
let test2 = capitalizeWord("anaxágoras");

console.log(test1);
console.log(test2);

/*
    1. Necesito las iniciales de cualquier nombre completo
        Nombre, apellido materno, apellido paterno

        - Israel Salinas Martínez
        - I. S. M.

        - Jorge del Rio Hernández
        - J. D. H.
    2.- Necesito evaluar que los nombres de mis productos sean fáciles de recordar
        - Los productos cuyo nombre tiene menos de 5 letras son fáciles
        - Los demás son difíciles
    3.- 
        Entrada: anglosajón
        Salida: anglo
                sajón
        
        Entrada: entrada
        Salida: ent
                ada

        Entrada: "salida"
        salida:  sal
                 ida

        Entrada: "Salinas"
        salida:
                "Sal"
                "Nas"
*/
