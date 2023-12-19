import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SelectVariants = {
  default: {
    height: "48px",
    backgroundColor: "transparent",
    border: "1px solid #878c96",
    padding: "0",
  },
  custom: {
    height: "62px",
    backgroundColor: "#F0F3F5",
    border: "0",
    padding: "0 8px",
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin-bottom: 18px;
  height: ${({ selectVariant }) => `calc(${SelectVariants[selectVariant]?.height}px + 14px)`};
  width: ${({ width }) => width};

  label {
    font-size: 12px;
  }

  span {
    font-size: 22px;
    font-weight: 700;
    color: #c50014;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 3px;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  height: ${({ selectVariant }) => SelectVariants[selectVariant]?.height};
  padding: ${({ selectVariant }) => SelectVariants[selectVariant]?.padding};
  border: ${({ selectVariant }) => SelectVariants[selectVariant]?.border};
  background-color: ${({ selectVariant }) =>
    SelectVariants[selectVariant]?.backgroundColor};

  select {
    height: calc(100% - 22px);
    width: calc(100% + 8px);
    padding: 0 8px;
    cursor: pointer;
    ${({ selectVariant }) =>
      selectVariant === "custom" &&
      `
        padding-left: 32px;
        padding-right: 0;
        border-bottom: 1px solid #878c96;
    `}
  }
`;

const ArrowIcon = styled.div`
  height: 100%;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
`;

const RequiredInput = ({ labelName }) => {
  return (
    <label>
      {labelName}
      <span>*</span>
    </label>
  );
};

function Select({ selectVariant, icon, label, optionsArray, width, required, onChange }) {
  return (
    <Container selectVariant={selectVariant} width={width}>
      {label && <RequiredInput labelName={label}></RequiredInput>}
      <SelectContainer selectVariant={selectVariant}>
        {icon && icon}
        <select onChange={onChange}>
          {optionsArray.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <ArrowIcon>
          <MdOutlineKeyboardArrowDown />
        </ArrowIcon>
      </SelectContainer>
    </Container>
  );
}

export default Select;
