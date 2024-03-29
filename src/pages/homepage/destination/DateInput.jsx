import { useState, useEffect, useContext } from "react";
import { addDays, subDays, format } from "date-fns";
import styled from "styled-components";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Icon from "../../../components/Icon";

import TicketContext from "../../../contexts/ticket-context/TicketContext";

export default function DateInput() {

  const { updateTicketInfos } = useContext(TicketContext);

  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState("Hoje");

  const daysOfWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const incrementDate = () => {
    setDate((prevDate) => addDays(prevDate, 1));
    updateTicketInfos("date", format(addDays(date, 1), "yyyy-MM-dd"));
  };

  const decrementDate = () => {
    const selectedDate = date.getTime();
    const presentDate = Date.now();
    const isInvalidDate = selectedDate < presentDate;

    if (isInvalidDate) {
      return window.alert(
        "Data invalida. Você deve selecionar uma data a partir de hoje."
      );
    } else {
      setDate((prevDate) => subDays(prevDate, 1));
      updateTicketInfos({ date: format(subDays(date, 1), "yyyy-MM-dd") });
    }
  };

  useEffect(() => {
    const dayOfWeek = date.getDay();
    setDay(daysOfWeek[dayOfWeek]);
    updateTicketInfos("date", format(date, "yyyy-MM-dd"));
  }, [date]);

  return (
    <Input>
      <Icon
        icon={<MdArrowBackIos />}
        size="16px"
        color="#282d37"
        position="absolute"
        onClick={decrementDate}
      />
      <span>
        {day}, {format(date, "dd, MM, yyyy")}
      </span>
      <Icon
        icon={<MdArrowForwardIos />}
        size="16px"
        color="#282d37"
        position="absolute"
        onClick={incrementDate}
      />
    </Input>
  );
}

const Input = styled.div`
  height: 48px;
  width: 480px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 0.0625rem solid #878c96;
  border-radius: 3px;
  color: #282d37;
  box-sizing: border-box;

  div {
    cursor: pointer;
  }
`;
