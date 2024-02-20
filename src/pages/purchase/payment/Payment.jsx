import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Bar from "../Bar";
import StepsStatus from "../StepsStatus";
import PaymentOptions from "./PaymentOptions";
import TotalPrice from "../TotalPrice";
import { Select, TextInput } from "../../../components/index";
import { Button } from "../../../components/index";
import { ImInfo } from "react-icons/im";

import AddressContext from "../../../contexts/address-context/AddressContext";
import ProgressContext from "../../../contexts/progress-context/ProgressContext";

const PreviousOrNextButton = ({ children, onClick, ...props }) => {
  return (
    <Button
      fontColor="#F1F3F5"
      backgroundColor="#6495DE"
      size="small"
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

const AddressButton = ({ children, onClick, ...props }) => {
  return (
    <Button
      size="medium"
      fontColor="#F1F3F5"
      backgroundColor="#6495DE"
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default function Payment() {

  const navigate = useNavigate();

  const { updateAddress } = useContext(AddressContext);
  const { updateStepStatus } = useContext(ProgressContext);

  function handleAddress(addressField, fieldValue) {
    updateAddress(addressField, fieldValue);
    updateStepStatus("payment", "done");
    navigate("/purchase/ticket-verification");
  }

  return (
    <Container>
      <Bar />
      <StepsStatus />
      <PaymentForm>
        <h3>Por favor, preencha com seus dados pessoais.</h3>
        <AddressForm>
          <TitleForm>
            <h4>Seu Endereço</h4>
          </TitleForm>
          <Form>
            <Fieldset>
              <TextInput
                required
                type="text"
                variant="default"
                label="Email"
                width="100%"
                onChange={(e) => updateAddress("email", e.target.value)}
              />
            </Fieldset>
            <Fieldset>
              <TextInput
                required
                type="text"
                variant="default"
                label="Rua / Número"
                width="calc(50% - 10px)"
                onChange={(e) => updateAddress("street", e.target.value)}
              />

              <TextInput
                required
                type="text"
                variant="default"
                label="CEP"
                width="calc(30% - 14px)"
                onChange={(e) => updateAddress("cep", e.target.value)}
              />

              <TextInput
                required
                type="text"
                variant="default"
                label="Cidade"
                width="calc(20% - 14px)"
                onChange={(e) => updateAddress("city", e.target.value)}
              />
            </Fieldset>
            <Fieldset>
              <Select
                required
                type="text"
                label="País"
                selectVariant="default"
                width="calc(50% - 10px)"
                optionsArray={[
                  "Brasil",
                  "Bolívia",
                  "Colômbia",
                  "Equador",
                  ,
                  "Peru",
                ]}
                onChange={(e) => updateAddress("country", e.target.value)}
              />
              <TextInput
                required
                type="text"
                variant="default"
                label="Estado"
                width="calc(50% - 10px)"
                onChange={(e) => updateAddress("state", e.target.value)}
              />
            </Fieldset>
            <Fieldset>
              <TextInput
                type="text"
                variant="default"
                label="Complemento"
                width="calc(50% - 10px)"
                onChange={(e) => updateAddress("complement", e.target.value)}
              />
            </Fieldset>
            <Fieldset>
              <TextInput
                type="text"
                variant="default"
                label="Celular"
                width="calc(30% - 10px)"
                onChange={(e) => updateAddress("phone", e.target.value)}
              />
            </Fieldset>
            <AddressButton onClick={() => handleAddress()}>
              Save Address
            </AddressButton>
          </Form>
        </AddressForm>
      </PaymentForm>
      <PaymentOptions />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const PaymentForm = styled.section`
  height: auto;
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;

  h3 {
    font-size: 16px;
    margin: 25px 0 16px 0;
  }
`;

const AddressForm = styled.div`
  background-color: #ffffff;
`;

const TitleForm = styled.div`
  height: 48px;
  padding: 25px 0 0 80px;
  box-sizing: border-box;

  h4 {
    font-size: 16px;
    font-weight: 700;
  }
`;

const Form = styled.fieldset`
  width: 100%;
  padding: 30px 80px 20px 80px;
  box-sizing: border-box;
`;

const Fieldset = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 40px;

  section {
    height: 62px;
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }

  span {
    font-size: 22px;
    font-weight: 700;
    color: #c50014;
  }
`;

const Options = styled.div`
  height: 42px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  option {
    display: block;
  }

  svg {
    font-size: 22px;
    pointer-events: none;
    position: absolute;
    right: 0;
  }
`;
