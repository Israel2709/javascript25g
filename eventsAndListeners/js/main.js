let namesArray = [];

let submitButton = document.getElementById("submit-name");

let nameField = document.querySelector("#user-form input[name='nombre']");
let lastnameField = document.querySelector("#user-form input[name='apellido']");

let name = "";
let lastname = "";

nameField.addEventListener("keyup", (event) => {
  name = event.target.value;
  console.log(name);
});

lastnameField.addEventListener("keyup", (event) => {
  lastname = event.target.value;
  console.log(lastname);
});

submitButton.addEventListener("click", (event) => {
  namesArray.push(`${name} ${lastname}`);
  console.log(namesArray);
});
