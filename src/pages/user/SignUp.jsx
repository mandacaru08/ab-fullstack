import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import { HiArrowLeft } from "react-icons/hi";

import { signUp } from "../../services/authApi";
import RedirectAuthButton from "./components/RedirectAuthButton";
import AuthSubmitButton from "./components/AuthSubmitButton";
import Input from "../../components/Input";

export default function SignUp() {
  const navigate = new useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [inputStatus, setInputStatus] = useState({
    emailIsFocused: false,
    passwordIsFocused: false,
    confirmPasswordIsFocused: false,
    isEmailValid: true,
    isPasswordEmpty: true,
    isConfirmPasswordEmpty: true,
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function validateEmail(email) {
    const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
    return emailRegex.test(email);
  }

  async function handleSignUp(event) {
    event.preventDefault();

    const { email, password, confirmPassword } = user;

    if (validateEmail(email)) {
      setInputStatus({ ...inputStatus, isEmailValid: true });
    } else {
      setInputStatus({ ...inputStatus, isEmailValid: false });
      window.alert("Insira o e-mail corretamente.");
      return;
    }

    if (password === "" || confirmPassword == "") {
      setInputStatus({ ...inputStatus, isPasswordValid: false });
      window.alert("Insira os campos pass corretamente");
    } else {
      setInputStatus({ ...inputStatus, isPasswordValid: true });
    }

    if (password !== confirmPassword) {
      setInputStatus({ ...inputStatus, isPasswordValid: false });
      window.alert("As senhas não coincidem.");
      return;
    }

    await signUp(email, password);
    navigate("/sign-in");
  }

  useEffect(() => {
    const { email, password, confirmPassword } = user;

    if (email === "" || password === "" || confirmPassword == "") {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }

    if (email !== "") {
      setInputStatus({ ...inputStatus, isEmailValid: true });
    }
  }, [user]);

  return (
    <Container>
      <ToBack onClick={() => navigate("/")}>
        <div>
          <HiArrowLeft />
          <p>Voltar</p>
        </div>
      </ToBack>
      <SignUpForm>
        <header>AB</header>
        <FormContainer>
          <div>
            <h2>Crie uma conta</h2>
          </div>
          <Form>
            <form onSubmit={handleSignUp}>
              <InputsContainer>
              <Input
                  width="100%"
                  type="text"
                  inputVariant="custom"
                  label="e-mail *"
                  value={user.email}
                  isFocusedOrFilled={
                    inputStatus.emailIsFocused || user.email !== ""
                  }
                  isInputValid={
                    inputStatus.isEmailValid || inputStatus.emailIsFocused
                  }
                  onFocus={() =>
                    setInputStatus({ ...inputStatus, emailIsFocused: true })
                  }
                  onBlur={() =>
                    setInputStatus({ ...inputStatus, emailIsFocused: false })
                  }
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  icon={
                    <IoIosCloseCircle
                      onClick={() => setUser({ ...user, email: "" })}
                    />
                  }
                />
                <Input
                  width="100%;"
                  type="password"
                  inputVariant="custom"
                  label="password *"
                  value={user.password}
                  icon={
                    <IoIosCloseCircle
                      onClick={() => setUser({ ...user, password: "" })}
                    />
                  }
                  isFocusedOrFilled={
                    inputStatus.passwordIsFocused || user.password !== ""
                  }
                  isInputValid={
                    inputStatus.isPasswordEmpty || inputStatus.passwordIsFocused
                  }
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  onFocus={() =>
                    setInputStatus({
                      ...inputStatus,
                      passwordIsFocused: true,
                    })
                  }
                  onBlur={() =>
                    setInputStatus({
                      ...inputStatus,
                      passwordIsFocused: false,
                    })
                  }
                />
                <Input
                  width="100%;"
                  type="password"
                  inputVariant="custom"
                  label="Confirm Password *"
                  value={user.confirmPassword}
                  icon={
                    <IoIosCloseCircle
                      onClick={() => setUser({ ...user, confirmPassword: "" })}
                    />
                  }
                  isFocusedOrFilled={
                    inputStatus.confirmPasswordIsFocused || user.confirmPassword !== ""
                  }
                  isInputValid={
                    inputStatus.isConfirmPasswordEmpty ||
                    inputStatus.confirmPasswordIsFocused
                  }
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                  onFocus={() =>
                    setInputStatus({
                      ...inputStatus,
                      confirmPasswordIsFocused: true,
                    })
                  }
                  onBlur={() =>
                    setInputStatus({
                      ...inputStatus,
                      confirmPasswordIsFocused: false,
                    })
                  }
                />
              </InputsContainer>
              <AuthSubmitButton disabled={isButtonDisabled} type="submit">Registrar</AuthSubmitButton>
            </form>
          </Form>
        </FormContainer>
        <Register>
          <h2>Você tem uma conta?</h2>
          <RedirectAuthButton onClick={() => navigate("/sign-in")}>
            Entre agora
          </RedirectAuthButton>
        </Register>
      </SignUpForm>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`;

const ToBack = styled.div`
  height: 90px;
  width: 375px;

  div {
    height: 100%;
    width: 80px;

    font-size: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const SignUpForm = styled.div`
  height: 700px;
  width: 375px;
  padding: 40px 15px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  header {
    height: 100px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    font-size: 32px;
    font-weight: 900;
  }
`;

const FormContainer = styled.div`
  height: 297px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Form = styled.div`
  height: -webkit-fill-available;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const InputsContainer = styled.div`
  height: 210px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Register = styled.div`
  height: 150px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f0f3f5;
`;
