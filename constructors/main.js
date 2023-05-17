function Koder(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.saludar = function () {
    console.log(this.name + " " + this.lastname);
  };
}

let laura = new Koder("Laura", "Valle");
let ignacio = new Koder("Ignacio", "Mendoza");

console.log(laura);
laura.saludar();

console.log(ignacio);
