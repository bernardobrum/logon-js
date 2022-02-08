import apiCase from "./apiCases.js";
export default function api() {
  let temperatura = document.querySelector("#clima h1");
  let localizacao = document.querySelector("#clima p");

  fetch(
    "https://api.weatherapi.com/v1/current.json?key=8eb8f003f8984fbe9a3172745220802&q=Carangola&aqi=no"
  )
    .then((resposta) => resposta.json())
    .then((dados) => {
      const region = apiCase(dados.location.region);

      temperatura.textContent = dados.current.temp_c;
      localizacao.textContent = dados.location.name + " - " + region;
    });
}
