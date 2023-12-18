import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Bar from "../Bar";
import StepsStatus from "../StepsStatus";
import CustomerGreetings from "../shared/passenger-details/CustomerGreetings";
import PaymentOptions from "./PaymentOptions";
import TotalPrice from "../TotalPrice";
import Input from "../../../components/Input";

export default function Payment() {
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
            <CustomerGreetings />
            <Fieldset>
              <Input
                type="text"
                inputVariant="default"
                label="Email"
                width="100%"
                required
              />
            </Fieldset>
            <Fieldset>
              <Input
                type="text"
                inputVariant="default"
                label="Rua / Número"
                width="calc(50% - 10px)"
                required
              />

              <Input
                type="text"
                inputVariant="default"
                label="CEP"
                width="calc(30% - 14px)"
                required
              />

              <Input
                type="text"
                inputVariant="default"
                label="Cidade"
                width="calc(20% - 14px)"
                required
              />
            </Fieldset>
            <Fieldset>
              <section>
                <label>País</label>
                <Options>
                  <select type="text">
                    <option>Dr.</option>
                    <option>Prof.</option>
                    <option>Prof. Dr.</option>
                    <option>Dr. Dr.</option>
                    <option>Prof. Dr. Dr.</option>
                  </select>
                  <MdOutlineKeyboardArrowDown />
                </Options>
              </section>
              <Input
                type="text"
                inputVariant="default"
                label="Estado"
                width="calc(50% - 10px)"
                required
              />
            </Fieldset>
            <Fieldset>
              <Input
                type="text"
                inputVariant="default"
                label="Complemento"
                width="calc(50% - 10px)"
              />
            </Fieldset>
            <Fieldset>
              <Input
                type="text"
                inputVariant="default"
                label="Celular"
                width="calc(30% - 10px)"
              />
            </Fieldset>
          </Form>
        </AddressForm>
      </PaymentForm>
      <PaymentOptions />
      <TotalPrice />
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
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 18px;

  section {
    height: 62px;
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }

  select {
    height: 100%;
    width: 100%;
    padding: 2px 0 4px 16px;
    box-sizing: border-box;
    border: 1px solid #878c96;
    border-radius: 4px;
  }

  input {
    background-color: #f0f3f5;
    border: none;
    border-bottom: 1px solid #afb4bb;
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
