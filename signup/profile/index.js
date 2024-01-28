const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const submitButton = document.getElementById("button-submit");

const validate = () => {
  const name = nameInput.value;
  const age = ageInput.value;

  const isNameValid = name.length > 1;
  const isAgeValid = age > 14;

  if (isNameValid && isAgeValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

nameInput.addEventListener("keyup", validate);
ageInput.addEventListener("keyup", validate);
