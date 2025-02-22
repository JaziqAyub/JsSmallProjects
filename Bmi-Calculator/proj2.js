const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (!weight || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result

    // results.innerHTML = `<span>${bmi}</span>`

    // if (bmi < 18.6) {
    //     results.innerHTML = `<span>Your bmi is ${bmi} and you are underweight</span>`
    //   } else if (bmi > 18.6 && bmi < 24.9) {
    //     results.innerHTML = `<span>Your bmi is ${bmi} and you fall under normal range</span>`
    //   } else if (bmi > 24.9) {
    //     results.innerHTML = `<span>Your bmi is ${bmi} and you are overweight</span>`
    //   } else {
    //     console.log("Try again")
    //   }

    // or

    let message = `<span>Your BMI is ${bmi} and `;

    if (bmi < 18.6) {
      message += "you are underweight.</span>";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message += "you fall under the normal range.</span>";
    } else {
      message += "you are overweight.</span>";
    }

    results.innerHTML = message;
  }
});
