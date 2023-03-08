import Univ from "./classes/Univ.js";
const form = document.querySelector("form");
const select = document.querySelector("select");
const url_endpoint = "http://universities.hipolabs.com/search?country=";
let univs = [];

// On cache le forlulaire de filtre
const form_filter = document.querySelector("#form-filter");
form_filter.hidden = true;

form_filter.onsubmit = function(e) {
  e.preventDefault();
  // récupération de la value du filter
  const text_filter = document.querySelector("#filter").value;
  const univ_fitered = univs.filter((univ) => univ.name.toLowerCase().includes(text_filter.toLowerCase()));
  document.querySelector("#univs").innerHTML = '';
  univ_fitered.forEach(element => {
    new Univ(element.name, element.web_pages);
  });

}

form.onsubmit = function (e) {
  console.log(`Dans onsubmit`);
  e.preventDefault();

  // Récupération de la value du select
  const country = select.value;
  console.log(`country`, country);

  // Fetch
  fetch(url_endpoint + country)
    .then((response) => {
      console.log("response,", response)
      return response.json()
    })
    .then((dataUniv) => {
      univs = dataUniv;
      document.querySelector("#nb-univ").innerText = univs.length;
      console.log("dataUniv", univs)
      if(univs.length)  form_filter.hidden = false;
      document.querySelector("#univs").innerHTML = '';
      univs.forEach(element => {
        new Univ(element.name, element.web_pages);
      });
    })
    .catch(error => {
      console.log("Erreur attrapée : ", error);
    })
}
