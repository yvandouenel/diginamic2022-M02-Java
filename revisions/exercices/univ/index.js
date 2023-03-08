import Univ from "./classes/Univ.js";
const form = document.querySelector("form");
const select = document.querySelector("select");
const url_endpoint = "http://universities.hipolabs.com/search?country=";
let univs = [];


form.onsubmit = function(e) {
  console.log(`Dans onsubmit`);
  e.preventDefault();

  // Récupération de la value du select
  const country = select.value;
  console.log(`country`, country);

  // Fetch
  fetch(url_endpoint + country)
  .then()// a finir
  .catch(error => {
    console.log("Erreur attrapée : ", error);
  })
}

const u1 = new Univ("Université de Montpellier", "https://montpellieruniversite.fr");