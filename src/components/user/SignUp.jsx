import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import { HiArrowLeft } from "react-icons/hi";

import { signUp } from "../../services/authApi";
import AuthSubmitButton from "./AuthSubmitButton";
import RedirectAuthButton from "./RedirectAuthButton";

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
                  isFocusedOrFilled={
                    inputStatus.emailIsFocused || user.email !== ""
                  }
                  isInputValid={
                    inputStatus.isEmailValid || inputStatus.emailIsFocused
                  }
                >
                  <input
                    type="text"
                    value={user.email}
                    onFocus={() =>
                      setInputStatus({ ...inputStatus, emailIsFocused: true })
                    }
                    onBlur={() =>
                      setInputStatus({ ...inputStatus, emailIsFocused: false })
                    }
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                  <label>e-mail *</label>
                  <Icon onClick={() => setUser({ ...user, email: "" })}>
                    <IoIosCloseCircle />
                  </Icon>
                </Input>
                <Input
                  isFocusedOrFilled={
                    inputStatus.passwordIsFocused || user.password !== ""
                  }
                  isInputValid={
                    inputStatus.isPasswordEmpty || inputStatus.passwordIsFocused
                  }
                >
                  <input
                    type="password"
                    value={user.password}
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
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                  <label>password *</label>
                  <Icon onClick={() => setUser({ ...user, password: "" })}>
                    <IoIosCloseCircle />
                  </Icon>
                </Input>
                <Input
                  isFocusedOrFilled={
                    inputStatus.confirmPasswordIsFocused ||
                    user.confirmPassword !== ""
                  }
                  isInputValid={
                    inputStatus.isConfirmPasswordEmpty ||
                    inputStatus.confirmPasswordIsFocused
                  }
                >
                  <input
                    type="password"
                    value={user.confirmPassword}
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
                    onChange={(e) =>
                      setUser({ ...user, confirmPassword: e.target.value })
                    }
                  />
                  <label>Confirm Password*</label>
                  <Icon
                    onClick={() => setUser({ ...user, confirmPassword: "" })}
                  >
                    <IoIosCloseCircle />
                  </Icon>
                </Input>
              </InputsContainer>
              <AuthSubmitButton>Registrar</AuthSubmitButton>
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
  height: 190px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.div`
  height: 56px;
  width: 100%;

  display: flex;
  flex-direction: row;
  position: relative;

  border-bottom: ${(props) =>
    props.isInputValid ? "1px solid #D9D9D9" : "1px solid #ff6767c4"};
  background-color: ${(props) =>
    props.isInputValid ? "transparent" : "#ff9a9ac4"};
  transition: all 0.5s;

  label {
    position: absolute;
    left: 5px;
    z-index: 0;
    top: ${(props) => (props.isFocusedOrFilled ? 0 : "50%")};
    font-size: ${(props) => (props.isFocusedOrFilled ? "12px" : "16px")};
    transition: all 0.5s;
  }

  input {
    height: auto;
    width: 90%;
    border-style: none;
    z-index: 1;
    background-color: transparent;
  }
`;

const Icon = styled.div`
  height: 100%;
  width: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  color: #646973;
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
