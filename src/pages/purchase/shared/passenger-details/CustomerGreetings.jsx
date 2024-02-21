import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Select, TextInput } from "../../../../components";
import TicketContext from "../../../../contexts/ticket-context/TicketContext";
import ProgressContext from "../../../../contexts/progress-context/ProgressContext";
import {Button} from "../../../../components";

function isValidInput(value) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(value);
}

export default function CustomerGreetings() {

  const navigate = useNavigate();
  
  const [customerData, setCustomerData] = useState({
    salutation: "Sr.",
    title: "Dr.",
    name: "",
    surname: "",
  });

  const { updateTicketInfos } = useContext(TicketContext);
  const { updateStepStatus } = useContext(ProgressContext);

  const NavigateButton = ({ children, onClick, ...props }) => {
    return (
      <Button onClick={onClick} {...props} size="medium">
        {children}
      </Button>
    );
  };

  function setTickerInfos() {
    const { salutation, title, name, surname } = customerData;
    const greetings = `${salutation} ${title} ${name} ${surname}`;
    updateTicketInfos("name", greetings);
    updateStepStatus("ticket-reservation", "done");
    navigate("/purchase/payment")
  }
  
  return (
    <FieldsetContainer>
      <Fieldset>
        <Select
          type="text"
          label="Saudações"
          width="calc(50% - 10px)"
          selectVariant="default"
          optionsArray={["Sr.", "Sra."]}
          required
          onChange={(e) =>
            setCustomerData({ ...customerData, salutation: e.target.value })
          }
        />
        <Select
          type="text"
          label="Título"
          width="calc(50% - 10px)"
          selectVariant="default"
          optionsArray={[
            "Dr.",
            "Prof.",
            "Prof. Dr.",
            "Dr. Dr.",
            "Prof. Dr. Dr.",
          ]}
          required
          onChange={(e) =>
            setCustomerData({ ...customerData, title: e.target.value })
          }
        />
      </Fieldset>
      <Fieldset>
        <TextInput
          required
          type="text"
          variant="default"
          label="Primeiro Nome"
          width="calc(50% - 10px)"
          onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
        />
        <TextInput
          required
          type="text"
          variant="default"
          label="Sobrenome"
          width="calc(50% - 10px)"
          onChange={(e) => setCustomerData({ ...customerData, surname: e.target.value })}
        />
      </Fieldset>
      <ButtonContainer>
        <NavigateButton onClick={() => setTickerInfos()}>
          Continue
        </NavigateButton>
      </ButtonContainer>
    </FieldsetContainer>
  );
}

const FieldsetContainer = styled.fieldset`
  height: 132px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Fieldset = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 24px;

  section {
    height: 62px;
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
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

const ButtonContainer = styled.div`
  height: 84px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: center;
`;
