import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Cards from "react-credit-cards-2";
import { Button } from "../../../components";
import { ImInfo } from "react-icons/im";
import PaymentContext from "../../../contexts/payment-context/PaymentContext";
import ProgressContext from "../../../contexts/progress-context/ProgressContext";
import 'react-credit-cards-2/dist/es/styles-compiled.css';

import TicketContext from "../../../contexts/ticket-context/TicketContext";

export default function CreditCardOption(showOption) {

  const navigate = useNavigate();

  const { updatePaymentInfos } = useContext(PaymentContext);
  const { updateProgress } = useContext(ProgressContext);
  const { ticketInfos } = useContext(TicketContext);

  const [creditCardData, setCreditCardData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  function handleInputFocus(e) {
    setCreditCardData({ ...creditCardData, focus: e.target.name });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setCreditCardData({ ...creditCardData, [name]: value });
  }

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

  const handleCardInfos = (cardField, cardValue) => {
    updatePaymentInfos(cardField, cardValue);
    updateStepStatus("payment", "done");
    navigate("/purchase/ticket-verification");
  };

  return (
    <Container>
      <CardContainer>
        <PaymentForm>
          <Fieldset>
            <section style={{ width: "100%" }}>
              <label>
                Nome<span>*</span>
              </label>
              <input
                type="text"
                name="name"
                onFocus={(e) => handleInputFocus(e)}
                onChange={(e) => handleInputChange(e)}
              />
            </section>
          </Fieldset>
          <Fieldset>
            <section style={{ width: "100%" }}>
              <label>
                Número do Cartão<span>*</span>
              </label>
              <input
                type="text"
                name="number"
                onFocus={(e) => handleInputFocus(e)}
                onChange={(e) => handleInputChange(e)}
              />
            </section>
          </Fieldset>
          <Fieldset>
            <section style={{ width: "100%" }}>
              <label>
                Valido até<span>*</span>
              </label>
              <input
                type="tel"
                name="expiry"
                placeholder="Valid Trhu"
                onFocus={(e) => handleInputFocus(e)}
                onChange={(e) => handleInputChange(e)}
              />
            </section>
          </Fieldset>
          <Fieldset>
            <section style={{ width: "100%" }}>
              <label>
                CVC<span>*</span>
              </label>
              <input
                type="tel"
                name="cvc"
                onFocus={(e) => handleInputFocus(e)}
                onChange={(e) => handleInputChange(e)}
              />
            </section>
          </Fieldset>
        </PaymentForm>
        <div>
          <Cards
            name={creditCardData.name}
            number={creditCardData.number}
            expiry={creditCardData.expiry}
            cvc={creditCardData.cvc}
            focused={creditCardData.focus}
          />
        </div>
      </CardContainer>
      <TotalContainer>
        <Total>
          <span>Total</span>
          <ImInfo />
          <Price>R${ticketInfos.value}</Price>
        </Total>
        <Buttons>
          <PreviousOrNextButton onClick={() => navigate("/purchase/payment")}>Voltar</PreviousOrNextButton>
          <PreviousOrNextButton onClick={() => handleCardInfos()}>Continuar</PreviousOrNextButton>
        </Buttons>
      </TotalContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
  box-sizing: border-box;
  //border-top: 1px solid #878c96;
  background-color: #ffffff;
  border-radius: 4px;
`;

const CardContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PaymentForm = styled.form`
  height: fit-content;
  width: 45%;
  border-radius: 4px;
`;

const Fieldset = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 10px;

  section {
    height: 62px;
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }

  label {
    height: 22px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    font-size: 14px;
  }

  input {
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

const CardInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Total = styled.div`
  height: 24px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  font-size: 18px;

  span {
    font-weight: bold;
  }

  svg {
    font-size: 20px;
    color: #646973;
    margin: 0 25px 0 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0 30px 0;
`;

const Price = styled.div`
  display: flex;
  justify-content: right;
  font-size: 16px;
  font-weight: 700;
`;

const TotalContainer = styled.section`
  height: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 4px;
`;
