const sentenceInput = document.getElementById("input-sentence");
const submitButton = document.getElementById("button-submit");

const validate = () => {
  const sentence = sentenceInput.value;

  const isSentenceValid = sentence === "I'm not a robot.";

  if (isSentenceValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

sentenceInput.addEventListener("keyup", validate);
