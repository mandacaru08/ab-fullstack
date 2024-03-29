import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { CgEditBlackPoint, CgOptions } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import Button from "../../components/Button";
import styled from "styled-components";

import TicketContext from "../../contexts/ticket-context/TicketContext";
import { useContext } from "react";

export default function TicketOverview() {
  const navigate = useNavigate();

  const { ticketInfos } = useContext(TicketContext);

  const NavigateButton = ({ onClick }) => {
    return (
      <Button size="small" fontColor="#282D37" onClick={onClick}>
        Alterar
      </Button>
    );
  };

  NavigateButton.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  return (
    <Container>
      <DestinationAndTime>
        <div>
          <CgEditBlackPoint />
          <span>{ticketInfos.from}</span>
        </div>
        <div>
          <MdLocationOn />
          <span>{ticketInfos.to}</span>
        </div>
        <div>
          <FiClock />
          <span>{ticketInfos.time}</span>
        </div>
      </DestinationAndTime>
      {/* <PassengerAndClass>
        <IoPersonSharp />
        <span>1 Passageiro, 27-64, 2ª Classe</span>
      </PassengerAndClass> */}
      {/* <ShowFastestConnection>
        <CgOptions />
        <span>Show fastest conncetions</span>
      </ShowFastestConnection> */}
      <NavigateButton onClick={() => navigate("/ticket-overview")} />
    </Container>
  );
}

const Container = styled.div`
  height: fit-content;
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
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;

  div {
    height: 20px;
    width: fit-content;
    padding-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: 16px;
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
