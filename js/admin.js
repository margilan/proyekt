import { createRowTable } from "./functions.js";
const tbody = document.getElementById("tbody");
const name = document.getElementById("name");
const price = document.getElementById("price");
const category = document.getElementById("category");
const description = document.getElementById("description");
const button = document.getElementById("button");
const form = document.getElementById("form")

function validate() {
  if (!name.value) {
    alert("name kiritilishi kerak admin tomondan");
    name.focus();
    return false;
  }

  if (!price.value) {
    alert("price kiritilishi kerak admin tomondan");
    price.focus();
    return false;
  }

  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://auth-rg69.onrender.com/api/products/all", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.length) {
        data.forEach((phone, index) => {
          let tr = createRowTable(phone, index + 1);
          tbody.innerHTML += tr;
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

button &&
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (validate(name, price, category, description)) {
      let phone = {
        name: name.value,
        price: price.value,
        description: description.value,
        status: "active",
        category_id: category.value,
      };
      fetch("https://auth-rg69.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(phone),
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        form.reset()
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      console.log("validatsiyadan o'tmadi");
    }
  });
