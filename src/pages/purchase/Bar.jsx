import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";

export default function Bar() {
  return (
    <Container>
      <h1>AB</h1>
      <RxCross2 />
    </Container>
  );
}

const Container = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0 6px 8px -4px rgb(0 0 0 / 30%);
`;
