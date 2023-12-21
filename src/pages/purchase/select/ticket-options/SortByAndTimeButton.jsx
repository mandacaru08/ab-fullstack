import { useState } from "react";
import styled from "styled-components";
import { BiUpArrowAlt } from "react-icons/bi";
import Select from "../../../../components/Select";

export default function SortByAndTimeButton() {
  const [sortBy, setSortBy] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Earlier style={{ width: "100px" }}>
        <span>Mais cedo</span>
        <BiUpArrowAlt style={{ color: "#FF0000" }} />
      </Earlier>
      <Select
        type="text"
        label="Ordenar por:"
        value={sortBy}
        width="112px"
        selectVariant="defaultWithoutBorder"
        optionsArray={["Partida", "Duração", "Mudanças", "Tarifa"]}
        onClick={() => setIsOpen(!isOpen)}
        onChange={(event) => setSortBy(event.target.value)}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 54px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 17px 12px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #ffffff;
`;

const Earlier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    color: #f24423;
    text-decoration: underline;
    cursor: pointer;
  }
`;
