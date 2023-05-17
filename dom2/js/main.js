let kodersList = ["Jorge Ramos", "Israel Morales", "Omar Montealvo"];
let usersList = ["Fer", "Leonardo", "Francisco"];

const addListItem = (listId, listText) => {
  let listItem = document.createElement("li");
  let itemText = document.createTextNode(listText);

  listItem.appendChild(itemText);
  /*<li>Elemento 1</li>*/

  let listWrapper = document.getElementById(listId);

  listWrapper.appendChild(listItem);
};

kodersList.forEach((koder) => addListItem("koders-list", koder));
usersList.forEach((user) => addListItem("users-list", user));

const createUserCard = (userData) => {
  let { name, age, nat, picture } = userData;
  let natLi = document.createElement("li");
  natLi.classList.add("list-group-item");
  let ageLi = document.createElement("li");
  ageLi.classList.add("list-group-item");
  let natText = document.createTextNode(nat);
  let ageText = document.createTextNode(age);

  natLi.appendChild(natText);
  ageLi.appendChild(ageText);

  let nameHeading = document.createElement("h5");
  nameHeading.classList.add("card-title");
  let nameText = document.createTextNode(name);
  nameHeading.appendChild(nameText);

  let userAvatar = document.createElement("img");
  userAvatar.classList.add("card-img-top");
  userAvatar.setAttribute("src", picture);

  let nameWrapper = document.createElement("div");
  nameWrapper.appendChild(nameHeading);
  nameWrapper.classList.add("card-body");

  let userSpecs = document.createElement("ul");
  userSpecs.classList.add("list-group", "list-group-flush");
  userSpecs.appendChild(natLi);
  userSpecs.appendChild(ageLi);

  let cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card");
  cardWrapper.appendChild(userAvatar);
  cardWrapper.appendChild(nameWrapper);
  cardWrapper.appendChild(userSpecs);

  document.getElementById("users-wrapper").appendChild(cardWrapper);
};

let testUser = {
  name: "Israel Salinas Martínez",
  age: 33,
  nat: "MX",
  picture: "https://randomuser.me/api/portraits/men/71.jpg",
};

createUserCard(testUser);
