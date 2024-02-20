import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Icon from "../../../components/Icon";

import TicketContext from "../../../contexts/ticket-context/TicketContext";

function TimeInput() {

  const { updateTicketInfos } = useContext(TicketContext);

  const [time, setTime] = useState({
    hour: "",
    minute: "",
    period: "",
  });

  function convertToHour12(time24) {
    const [hours, minutes] = time24.split(":");

    const currentPeriod = hours > 12 ? "PM" : "AM";
    const suffix = time.period ? time.period : currentPeriod;

    let hour24 = parseInt(hours, 10);
    let hour12 = Math.abs(hour24) % 24;

    const HOURS_12 = 12;

    let convertedHour12 = hour12;
    let convertedSuffix = suffix;

    if (hour12 === 0) {
      convertedSuffix = suffix === "AM" ? "PM" : "AM";
      convertedHour12 = HOURS_12;
    } else if (hour12 === HOURS_12) {
      convertedSuffix = suffix === "AM" ? "PM" : "AM";
    } else if (hour12 > HOURS_12) {
      convertedHour12 -= HOURS_12;
    }

    const formattedHour12 = convertedHour12.toString().padStart(2, "0");

    return { hour: formattedHour12, minute: minutes, period: convertedSuffix };
  }

  function validateHourOrMinuteInput(value) {
    const timeRegex = new RegExp("^\\d{1,2}$");
    const isValidTime = timeRegex.test(value);
    return isValidTime;
  }

  function validatePeriodInput(currentTime) {
    const periodRegex = new RegExp(/^(am|pm)$/i);
    const isValidPeriod = periodRegex.test(time.period);
    return isValidPeriod;
  }

  function setCurrentTime() {
    const currentDateTime = new Date();
    const options = { timeZone: "America/Sao_Paulo" };
    const localTime = currentDateTime.toLocaleTimeString("pt-BR", options);
    const currentTimeConverted = convertToHour12(localTime);
    setTime(currentTimeConverted);
    updateTicketInfos("time", `${currentTimeConverted.hour}:${currentTimeConverted.minute} ${currentTimeConverted.period}`);
  }

  function handleHourInputChange(hourInput) {
    const isValidHourInput = validateHourOrMinuteInput(hourInput);
    if (isValidHourInput) {
      setTime((prevTime) => ({ ...prevTime, hour: hourInput }));
    }
  }

  function handleInputChange() {
    const { hour, minute, period } = time;

    const isEmptyTime = hour == "" && minute == "" && period == "";

    if (isEmptyTime) {
      return setCurrentTime();
    }
  }

  function decrementOneHour() {
    const hourMinusOne = parseInt(time.hour, 10) - 1;
    const convertedTime = convertToHour12(`${hourMinusOne}:00`);
    setTime(convertedTime);
    updateTicketInfos("time", convertedTime);
  }

  function incrementOneHour() {
    const hourPlusOne = parseInt(time.hour, 10) + 1;
    const convertedTime = convertToHour12(`${hourPlusOne}:00`);
    setTime(convertedTime);
    updateTicketInfos("time", `${convertedTime.hour}:${convertedTime.minute} ${convertedTime.period}`);
  }

  useEffect(() => {
    handleInputChange();
  }, [time]);

  return (
    <Input>
      <Icon
        icon={<MdArrowBackIos />}
        size="16px"
        color="#282d37"
        position="absolute"
        onClick={decrementOneHour}
      />
      <TimePicker>
        <HourInput
          type="text"
          value={time.hour}
          onChange={(e) => setTime({ ...time, hour: e.target.value })}
        />
        <span>:</span>
        <MinuteInput
          type="text"
          value={time.minute}
          onChange={(e) => setTime({ ...time, minute: e.target.value })}
        />
        <ShiftInput
          type="text"
          value={time.period}
          onChange={(e) => setTime({ ...time, period: e.target.value })}
        />
      </TimePicker>
      <Icon
        icon={<MdArrowForwardIos />}
        size="16px"
        color="#282d37"
        position="absolute"
        onClick={incrementOneHour}
      />
    </Input>
  );
}

export default TimeInput;

const Input = styled.div`
  height: 48px;
  width: 386px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 0.0625rem solid #878c96;
  border-radius: 3px;
  color: #282d37;
  box-sizing: border-box;
`;

const TimePicker = styled.div`
  height: 100%;
  width: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  input {
    border-style: none;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
  input:focus {
    background-color: lightblue;
    caret-color: transparent;
  }
  span {
    font-size: 16px;
    font-weight: 400;
  }
`;

const HourInput = styled.input`
  height: auto;
  width: 18px;
`;

const MinuteInput = styled.input`
  height: auto;
  width: 18px;
`;

const ShiftInput = styled.input`
  height: auto;
  width: 24px;
`;
