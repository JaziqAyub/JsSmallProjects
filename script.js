let currentStep = 1;

function updateProgressIndicator() {
  const progressSteps = document.querySelectorAll(".progress-step");
  progressSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep - 1);
  });
}

function nextStep(step) {
  const currentFormStep = document.querySelector(`.step-${step}`);
  if (step === 1) {
    const email = document.getElementById("email").value;
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phone = document.getElementById("phone").value;
    if (!validatePhone(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
  }
  currentFormStep.classList.remove("active");
  currentStep++;
  const nextFormStep = document.querySelector(`.step-${currentStep}`);
  nextFormStep.classList.add("active");

  updateProgressIndicator();

  if (currentStep === 3) {
    showSummary();
  }
}

function prevStep(step) {
  const currentFormStep = document.querySelector(`.step-${step}`);
  currentFormStep.classList.remove("active");
  currentStep--;
  const prevFormStep = document.querySelector(`.step-${currentStep}`);
  prevFormStep.classList.add("active");
  updateProgressIndicator();
}

document.getElementById("preferences").addEventListener("change", function () {
  const dynamicInput = document.getElementById("dynamic-input");
  dynamicInput.innerHTML = ""; // Clear previous input field if any
  let selectedValue = this.value;

  if (selectedValue === "Tech") {
    dynamicInput.innerHTML = `
        <label for="programmingLanguagesInput">Programming Languages:</label>
        <input type="text" id="programmingLanguagesInput" name="programmingLanguages" required>
      `;
  } else if (selectedValue === "Education") {
    dynamicInput.innerHTML = `
        <label for="studyFieldInput">Field of Study:</label>
        <input type="text" id="studyFieldInput" name="studyField" required>
      `;
  } else if (selectedValue === "Health") {
    dynamicInput.innerHTML = `
        <label for="dietaryPreferencesInput">Dietary Preferences:</label>
        <input type="text" id="dietaryPreferencesInput" name="dietaryPreferences" required>
      `;
  }
});

function showSummary() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const preferences = document.getElementById("preferences").value;

  const summary = document.getElementById("summary");
  summary.innerHTML = `
    <li><strong>Name: </strong>${name}</li>
    <li><strong>Email: </strong>${email}</li>
    <li><strong>Phone: </strong>${phone}</li>
    <li><strong>Preferences: </strong>${preferences}</li>`;

  if (preferences === "Tech") {
    const progLang = document.getElementById("programmingLanguagesInput").value;
    summary.innerHTML += `<li><strong>Programming Languages: </strong>${progLang}</li>`;
  } else if (preferences === "Education") {
    const studyField = document.getElementById("studyFieldInput").value;
    summary.innerHTML += `<li><strong>Field of Study: </strong>${studyField}</li>`;
  } else if (preferences === "Health") {
    const dietaryPref = document.getElementById(
      "dietaryPreferencesInput"
    ).value;
    summary.innerHTML += `<li><strong>Dietary Preferences: </strong>${dietaryPref}</li>`;
  }
}

function validateEmail(email) {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return emailPattern.test(email);
}
function validatePhone(phone) {
  const phonePattern = /^[0-9]{10}$/;
  return phonePattern.test(phone);
}

document
  .getElementById("multi-step-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfuly!");
  });
