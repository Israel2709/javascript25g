let texto = "La mejor forma de prececir el futuro es creándolo";

const getPhrase = (phrase) => phrase.split(" ");
let splittedPhrase = getPhrase(texto);
console.log(splittedPhrase);
for (let i = 0; i < splittedPhrase.length; i++) {
  console.log(splittedPhrase[i]);
}
