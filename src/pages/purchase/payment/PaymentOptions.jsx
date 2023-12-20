import { useState } from "react";
import styled from "styled-components";
import { MdOutlinePix } from "react-icons/md";
import { BiCreditCardAlt } from "react-icons/bi";
import CreditCardOption from "./CreditCardOption";
import Input from "../../../components/Input";

const methods = [
  {
    type: 1,
    name: "Cartão de Crédito",
    icon: <BiCreditCardAlt />,
  },
  {
    type: 2,
    name: "Transferência Pix",
    icon: <MdOutlinePix />,
  },
];

export default function PaymentOptions() {
  const [methodSelected, setMethodSelected] = useState(null);

  return (
    <Container>
      <h3>Como você gostaria de pagar?</h3>
      <Options>
        {methods.map((method) => {
          return (
            <Input
              type="radio"
              width="182px"
              inputVariant="radio"
              key={method.type}
              name="payment-method"
              value={method.type}
              label={method.name}
              icon={method.icon}
              onChange={() => setMethodSelected(method.type)}
            />
          );
        })}
      </Options>
      {methodSelected === 1 && <CreditCardOption />}
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  box-sizing: border-box;

  h3 {
    margin: 25px 0px 16px;
  }
`;

const Options = styled.div`
  height: 62px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const Method = styled.section`
  height: 82px;
  width: 100%;
  margin-bottom: 5px;

  :hover {
    cursor: pointer;
  }

  fieldset {
    height: 76px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 4px;
  }

  fieldset div {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 16px 30px 16px 140px;
    box-sizing: border-box;
    border-radius: 4px;
  }

  svg {
    position: absolute;
    left: 80px;
    font-size: 36px;
  }

  input {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    position: absolute;
    left: 20px;
    top: 40%;
    transform: translate(-50% -50%);
    border: ${(props) =>
      props.checked ? "5px solid #282D37" : "1px solid #282D37"};
    outline: none;
    pointer-events: none;
  }
`;
