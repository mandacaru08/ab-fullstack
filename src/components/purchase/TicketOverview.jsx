import { useNavigate } from "react-router-dom";
import { CgEditBlackPoint, CgOptions } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import Button from "../Button";
import styled from "styled-components";

export default function TicketOverview() {
  const navigate = useNavigate();

  const NavigateButton = ({ onClick }) => {
    return (
      <Button size="small" fontColor="#282D37" onClick={onClick}>
        Alterar
      </Button>
    );
  };

  return (
    <Container>
      <DestinationAndTime>
        <div>
          <CgEditBlackPoint />
          <span>Manaus</span>
        </div>
        <div>
          <MdLocationOn />
          <span>Santarém</span>
        </div>
        <div>
          <FiClock />
          <span>16:00</span>
        </div>
      </DestinationAndTime>
      <PassengerAndClass>
        <IoPersonSharp />
        <span>1 Passageiro, 27-64, 2ª Classe</span>
      </PassengerAndClass>
      <ShowFastestConnection>
        <CgOptions />
        <span>Show fastest conncetions</span>
      </ShowFastestConnection>
      <NavigateButton onClick={() => navigate("/")}/>
    </Container>
  );
}

const Container = styled.div`
  height: 182px;
  width: 100%;
  background-color: #fff;
  padding: 12px 24px 24px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
`;

const DestinationAndTime = styled.div`
  width: 254px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0 4px;

  div {
    height: 20px;
    width: fit-content;
    padding-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  svg {
    font-size: 16px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const PassengerAndClass = styled.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  position: relative;

  svg {
    font-size: 18px;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const ShowFastestConnection = styled.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  position: relative;

  svg {
    font-size: 18px;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
