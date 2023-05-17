let product1 = {
  name: "Mayonesa",
  expirationYear: 2030,
};

let product2 = {
  name: "Mostaza",
  expirationYear: 2000,
};

const checkIfRotten = (product, currentYear) => {
  console.log("product", product);
  console.log("current year", currentYear);
  console.log(product.ex);
  return product.expirationYear < currentYear
    ? "Esta chaducado"
    : "Esta fresco";
};

let result1 = checkIfRotten(product1, 2023);

console.log(result1);
