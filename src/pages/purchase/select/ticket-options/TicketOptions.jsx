import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import TicketContext from "../../../../contexts/ticket-context/TicketContext";

import styled from "styled-components";
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdGroups,
} from "react-icons/md";

import Button from "../../../../components/Button";

const SelectTicketButton = ({ children, onClick }) => {
  return (
    <Button
      size="fitContent"
      backgroundColor="#F24423"
      fontColor="#FFFFFF"
      borderRadius="0 4px 0 0"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default function TicketOptions() {
  const ticketContext = useContext(TicketContext);

  const navigate = useNavigate();

  const ticketsInformation = [
    {
      id: "",
      from: "Manaus",
      to: "Santarém",
      departureTime: "17:34",
      arrivalTime: "16:09",
      numberOfChanges: "",
      boats: ["BARCO 190", "MADEIRA BOAT"],
      price: "97,39",
      demand: 11,
    },
  ];

  function calculateTravelDuration({ departureTime, arrivalTime }) {
    const ticketDepartureTime = convertTimeToNumber(departureTime);
    const ticketArrivalTime = convertTimeToNumber(arrivalTime);

    const totalHours = calculateTotalHours(
      ticketDepartureTime.hour,
      ticketArrivalTime.hour
    );
    const totalMinutes = calculateTotalMinutes(
      ticketDepartureTime.minute,
      ticketArrivalTime.minute
    );

    return `${totalHours}h ${totalMinutes}min`;
  }

  function calculateTotalHours(departureHour, arrivalHour) {
    let totalHours = 0;
    if (departureHour > arrivalHour) {
      totalHours = 24 - departureHour + arrivalHour;
    } else if (departureHour < arrivalHour) {
      totalHours = arrivalHour - departureHour;
    }
    return totalHours;
  }

  function calculateTotalMinutes(departureMinutes, arrivalMinutes) {
    let totalMinutes = 0;
    if (departureMinutes > arrivalMinutes) {
      totalMinutes = departureMinutes - arrivalMinutes;
    } else if (departureMinutes < arrivalMinutes) {
      totalMinutes = 24 - departureMinutes + arrivalMinutes;
    }
    return totalMinutes;
  }

  function convertTimeToNumber(time) {
    const convertedTime = time.split(":");
    const hour = parseInt(convertedTime[0]);
    const minute = parseInt(convertedTime[1]);
    return { hour, minute };
  }

  function selectTicket() {
    navigate("/purchase/ticket-reservation");
  }

  return (
    <Container>
      {ticketsInformation.map((ticket) => {
        return (
          <TicketOption key={ticket.id}>
            <TicketInformation>
              <TimeAndChanges>
                <Time>
                  <span>
                    {ticket.departureTime} - {ticket.arrivalTime}
                  </span>
                </Time>
                <hr></hr>
                <Duration>
                  <span>
                    {calculateTravelDuration({
                      departureTime: ticket.departureTime,
                      arrivalTime: ticket.arrivalTime,
                    })}
                    ,
                  </span>
                </Duration>
                <Changes>
                  <span>{ticket.boats.length} conexões</span>
                </Changes>
              </TimeAndChanges>
              <Demand isHighDemand={ticket.demand > 10}>
                <MdGroups />
                <span>{ticket.demand} demanda esperada</span>
              </Demand>
              <Boats>
                {ticket.boats.map((boat, index) => {
                  return (
                    <Boat key={boat} isChangeBoat={index !== 0}>
                      {boat}
                    </Boat>
                  );
                })}
              </Boats>
              <Cities>
                <span>{ticket.from}</span>
                <span>{ticket.to}</span>
              </Cities>
              <ShowDetails>
                <div>
                  <span>Mostrar detalhes</span>
                  <MdOutlineKeyboardArrowDown />
                </div>
              </ShowDetails>
            </TicketInformation>
            <SelectTicketContainer>
              <PriceAndSelectTicket>
                <Price>
                  A partir de <h1>R${ticket.price}</h1>
                </Price>
                <SelectTicketButton onClick={selectTicket}>
                  <MdKeyboardArrowRight />
                </SelectTicketButton>
              </PriceAndSelectTicket>
              <ReturnOption>
                <span>Escolher viagem de volta</span>
                <MdKeyboardArrowRight />
              </ReturnOption>
            </SelectTicketContainer>
          </TicketOption>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #333333;
`;

const TicketOption = styled.div`
  height: 200px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
`;

const TicketInformation = styled.div`
  height: 100%;
  width: calc(100% - 224px);
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TimeAndChanges = styled.div`
  width: 280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  hr {
    height: 60%;
    margin: 0 8px;
  }
`;

const Time = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const Duration = styled.div`
  font-size: 14px;
  color: #646973;
`;

const Changes = styled.div`
  font-size: 14px;
  color: #646973;
`;

const Demand = styled.div`
  width: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props.isHighDemand ? "#D77B00" : "#646973")};
`;

const Boats = styled.div`
  height: 28px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Boat = styled.div`
  height: 100%;
  width: calc(50% - 2px);
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isChangeBoat ? "#AFB4BB" : "#282d37")};
  padding: 0 8px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => (props.isChangeBoat ? "#282d37" : "#FFFFFF")};
`;

const Cities = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ShowDetails = styled.div`
  height: 28px;
  width: 100%;
  display: grid;
  place-items: center;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const SelectTicketContainer = styled.div`
  height: 100%;
  width: 224px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-left: 1px solid #d7dce1;
`;

const PriceAndSelectTicket = styled.div`
  height: calc(100% - 34px);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d7dce1;
`;

const Price = styled.span`
  width: 100%;
  font-size: 13px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

  h1 {
    font-size: 30px;
  }
`; /*  */

const ReturnOption = styled.div`
  height: 34px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5px;
  box-sizing: border-box;

  svg {
    font-size: 24px;
    color: #f24423;
  }

  :hover {
    color: #f24423;
    text-decoration: underline;
    cursor: pointer;
  }
`;
