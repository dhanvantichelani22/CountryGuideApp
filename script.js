let searchButton = document.getElementById("searchBtn");
let countryInput = document.getElementById("enterInput");
searchButton.addEventListener("click",()=>{
let countryName = countryInput.value; /* "India" */
//    https://restcountries.com/
let countryApi = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
console.log(countryApi);

fetch(countryApi)
  .then((response) => response.json())
  .then((data) =>{
    console.log(data[0]);
    console.log(data[0].capital[0]);
    console.log(data[0].flags.svg);
    console.log(data[0].name.common);
    console.log(data[0].continents[0]);
    console.log(Object.keys(data[0].currencies)[0]);
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    // console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);
    // console.log(data[0].currencies);
    // console.log(Object.keys(data[0].languages)[1]);
    // console.log(data[0].languages);
    console.log(Object.values(data[0].languages).toString().split(",").join(","));
    // console.log(Object.values(data[0].currencies.INR).toString().split(",").join(","));  only india
    console.log(data[0].timezones[0]);
    result.innerHTML = `<img src="${data[0].flags.svg}" class="flag-img">
    <h2>${data[0].name.common}</h2>
    <div class="wrapper">
    <div class="data-wrapper">
        <h4>Capital:</h4>
        <span>${data[0].capital[0]}</span>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
        <h4>Continents:</h4>
        <span>${data[0].continents[0]}</span>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
        <h4>Currency:</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]} </span>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
        <h4>Common Languages:</h4>
        <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
        <h4>Population:</h4>
        <span id="num">${data[0].population}</span>
    </div>
    <div class="data-wrapper">
        <h4>Time Zones:</h4>
        <span id="num">${data[0].timezones}</span>
    </div>
    `;
  }).catch(() =>{
    if(countryName == 0){
      result.innerHTML = `<h3>Country name is mandatory</h3>`;
    }else{
      result.innerHTML = `<h3>Please enter a valid country name</h3>`;
      }
    });
});