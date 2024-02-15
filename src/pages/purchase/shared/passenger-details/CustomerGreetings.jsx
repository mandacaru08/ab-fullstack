import { useState } from "react";
import styled from "styled-components";
import { Select, TextInput } from "../../../../components";

function isValidInput(value) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(value);
}

export default function CustomerGreetings() {
  const [customerData, setCustomerData] = useState({
    salutation: "",
    title: "",
  });

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
          type="text"
          variant="default"
          label="Primeiro Nome"
          width="calc(50% - 10px)"
          required
        />
        <TextInput
          type="text"
          variant="default"
          label="Sobrenome"
          width="calc(50% - 10px)"
          required
        />
      </Fieldset>
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
