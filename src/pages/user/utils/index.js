function matchesEmailPattern({ email, inputStatus, setInputStatus }) {
  const isEmailValid = isFilledInputs([email]) && isValidEmailPattern(email);
  setInputStatus({ ...inputStatus, isEmailValid });

  if (isEmailValid === false) {
    window.alert("Insira um email válido.");
  }
}

function isValidEmailPattern(email) {
  const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
  return emailRegex.test(email);
}

function isFilledInputs(stringArray) {
  return stringArray.some((string) => string !== "");
}

function isValidPassword ({ password, confirmPassword, inputStatus, setInputStatus}) {
  const isPasswordFilled = isFilledInputs([password, confirmPassword]);
  const isPasswordMatch = matchesPasswordAndConfirmation(password, confirmPassword);
  const isPasswordValid = isPasswordFilled && isPasswordMatch;

  setInputStatus({ ...inputStatus, isPasswordValid });

  return { isPasswordFilled, isPasswordMatch };
};

function matchesPasswordAndConfirmation(password, confirmPassword) {
  return password === confirmPassword;
}

function displayValidationAlerts ({ isPasswordFilled, isPasswordMatch }) {
  if (!isPasswordFilled) {
    window.alert("Entre com uma senha e confirme-a.");
  } else if (!isPasswordMatch) {
    window.alert("As senhas não conferem.");
  }
}

export { matchesEmailPattern, isValidPassword, displayValidationAlerts };
