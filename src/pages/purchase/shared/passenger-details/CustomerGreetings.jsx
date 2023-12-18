import { useState } from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Input from "../../../../components/Input";

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
        <section>
          <label>Saudações</label>
          <Options>
            <select
              type="text"
              onChange={(e) =>
                setCustomerData({ ...customerData, salutation: e.target.value })
              }
            >
              <option>Sr.</option>
              <option>Sra.</option>
            </select>
            <MdOutlineKeyboardArrowDown />
          </Options>
        </section>
        <section>
          <label>Título</label>
          <Options>
            <select
              type="text"
              onChange={(e) =>
                setCustomerData({ ...customerData, title: e.target.value })
              }
            >
              <option>Dr.</option>
              <option>Prof.</option>
              <option>Prof. Dr.</option>
              <option>Dr. Dr.</option>
              <option>Prof. Dr. Dr.</option>
            </select>
            <MdOutlineKeyboardArrowDown />
          </Options>
        </section>
      </Fieldset>
      <Fieldset>
        <Input
          type="text"
          inputVariant="default"
          label="Primeiro Nome"
          width="calc(50% - 10px)"
          required
        />
        <Input
          type="text"
          inputVariant="default"
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
