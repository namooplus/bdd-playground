const idInput = document.getElementById("input-id");
const passwordInput = document.getElementById("input-password");
const passwordConfirmInput = document.getElementById("input-password-confirm");
const submitButton = document.getElementById("button-submit");

const validate = () => {
  const id = idInput.value;
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;

  const isIdValid = id.length > 4;
  const isPasswordValid = password.length > 7;
  const isPasswordConfirmValid = password === passwordConfirm;

  if (isIdValid && isPasswordValid && isPasswordConfirmValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

idInput.addEventListener("keyup", validate);
passwordInput.addEventListener("keyup", validate);
passwordConfirmInput.addEventListener("keyup", validate);
