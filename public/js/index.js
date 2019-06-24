// Weather Api endpoint - http://localhost:3000/weather?address=<boston>

const userEnteredLocation = document.querySelector("input");
const form = document.querySelector("form");
const resultPara = document.querySelector("#result");
const errorPara = document.querySelector("#error");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (userEnteredLocation.value.trim().length == 0) {
    return (errorPara.textContent = "Can't be empty");
  }

  resultPara.textContent = "Loading...";
  errorPara.textContent = "";

  fetch(
    "http://localhost:3000/weather?address=" + userEnteredLocation.value
  ).then(response => {
    console.log(response);

    response.json().then(data => {
      if (data.error) {
        resultPara.textContent = "";
        errorPara.textContent = data.error;
      } else {
        resultPara.textContent =
          "Place is :" +
          data.Place +
          " And the temprature is: " +
          data.Temprature;
      }
    });
  });
});
