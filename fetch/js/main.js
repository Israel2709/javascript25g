const getKoders = async () => {
  let response = await fetch(
    `https://javascript-25g-default-rtdb.firebaseio.com/koders/.json`
  );
  let data = await response.json();
  return data;
};

const createKoderListItem = (listId, itemData) => {
  let { name, lastname } = itemData;
  let koderItem = document.createElement("li");
  koderItem.classList.add("list-group-item");
  let koderText = document.createTextNode(`${name} ${lastname}`);
  koderItem.append(koderText);
  let list = document.getElementById(listId);
  list.append(koderItem);
};

const printKoders = async () => {
  let koders = await getKoders();
  console.log(koders);
  for (key in koders) {
    console.log(key);
    console.log(koders);
    console.log(koders[key]);
    let koderObject = koders[key];
    createKoderListItem("koders-list", koderObject);
  }
};

printKoders();

const getProducts = async () => {
  let response = await fetch(
    `https://javascript-25g-default-rtdb.firebaseio.com/products/.json`
  );
  let data = await response.json();
  return data;
};

const createProductListItem = (listId, productData) => {
  let { name, price } = productData;
  let productItem = document.createElement("li");
  productItem.classList.add("list-group-item");
  let productText = document.createTextNode(`${name} ${price}`);
  productItem.append(productText);
  let list = document.getElementById(listId);
  list.append(productItem);
};

const printProducts = async () => {
  let products = await getProducts();
  for (key in products) {
    createProductListItem("products-list", products[key]);
  }
};

printProducts();

const saveKoder = async () => {
  let newKoder = {
    name: "Damian",
    lastname: "Tapia",
  };

  let response = await fetch(
    `https://javascript-25g-default-rtdb.firebaseio.com/koders/.json`,
    {
      method: "POST",
      body: JSON.stringify(newKoder),
    }
  );
  let data = response.json();
  return data;
};

const deleteKoder = async (koderKey) => {
  let response = await fetch(
    `https://javascript-25g-default-rtdb.firebaseio.com/koders/${koderKey}/.json`,
    {
      method: "DELETE",
    }
  );
  let data = await response.json();
  return data;
};

const replaceKoder = async (koderKey) => {
  let updatedKoder = {
    name: "updated",
  };
  let response = await fetch(
    `https://javascript-25g-default-rtdb.firebaseio.com/koders/${koderKey}/.json`,
    {
      method: "PUT",
      body: JSON.stringify(updatedKoder),
    }
  );
  let data = await response.json();
  return data;
};

const updateKoder = async (koderKey) => {
  let updatedKoder = {
    generation: "19",
  };
  let response = await fetch(
    `https://javascript-25g-default-rtdb.firebaseio.com/koders/${koderKey}/.json`,
    {
      method: "PATCH",
      body: JSON.stringify(updatedKoder),
    }
  );

  let data = await response.json();
  return data;
};

document.getElementById("submit-form").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("completo");
});
