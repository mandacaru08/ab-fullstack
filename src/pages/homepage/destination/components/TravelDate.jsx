import PropTypes from "prop-types";

import DateInput from "../DateInput";
import TimeInput from "../TimeInput";
import { FaRegCalendarAlt } from "react-icons/fa";
import Icon from "../../../../components/Icon";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 15px;

  h4 {
    margin-bottom: 10px;
  }
`;

const DateAndHour = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

function TravelDate({ cleanInputCities }) {
  return (
    <Container>
      <h4>Viagem de ida</h4>
      <DateAndHour>
        <DateInput />
        <Icon
          size={"20px"}
          color={"#646973"}
          icon={<FaRegCalendarAlt />}
          onClick={() => cleanInputCities("to")}
        />
        <TimeInput />
      </DateAndHour>
    </Container>
  );
}

TravelDate.propTypes = {
  cleanInputCities: PropTypes.func.isRequired,
};

export default TravelDate;
