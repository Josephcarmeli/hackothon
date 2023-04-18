let button = document.querySelector(".button");
let inputValue = document.querySelector(".inputValue");
let nameEl = document.querySelector(".name");
let descEl = document.querySelector(".descEl"); // Change class name
let tempEl = document.querySelector(".temp");

button.addEventListener("click", function() {
  axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=3b198bf6856a18a221a056cee186c32a&units=imperial')
    .then(function (response) {
      // handle success
      console.log(response);
      nameEl.textContent = response.data.name;
      descEl.textContent = response.data.weather[0].description;
      tempEl.textContent = response.data.main.temp + "°F";
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});