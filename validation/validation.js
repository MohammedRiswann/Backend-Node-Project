function validation() {
  const passwordIn = document.getElementById("password").value;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const valid = passwordPattern.test(passwordIn);

  const passwordError = document.getElementById("passwordError");

  if (!valid) {
    passwordError.innerText = "Password is not valid !";
  } else {
    passwordError.innerText = "";
  }
}

module.exports = validation;
