import { useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import TicketContext from "../../../../contexts/ticket-context/TicketContext";

function CitiesOptionsFiltered({ onSelect, point, cities, showOptions, ...props }) {

  const { updateTicketInfos } = useContext(TicketContext);

  function setCity(city) {
    updateTicketInfos(point, `${city.name} - ${city.state}`);
    onSelect(`${city.name} - ${city.state}`);
  }

  return (
    <CitiesOptions visibility={showOptions} {...props}>
      {cities?.map((city) => {
        return (
          <CityOption key={city.name} value={city.name} onClick={() => setCity(city)}>
            {city.name} - {city.state}
          </CityOption>
        );
      })}
    </CitiesOptions>
  );
}

CitiesOptionsFiltered.propTypes = {
  cities: PropTypes.array.isRequired,
  showOptions: PropTypes.bool.isRequired,
};

export default CitiesOptionsFiltered;

const CitiesOptions = styled.ol`
  height: fit-content;
  max-height: 240px;
  position: absolute;
  top: 42px;
  left: ${(props) => (props.left ? 0 : "none")};
  right: ${(props) => (props.left ? "none" : 0)};
  z-index: 100;
  width: calc(50% - 30px);
  flex-direction: column;
  align-items: left;
  border: 1px solid #c1c1c1;
  border-radius: 0 0 5px 5px;
  background-color: #ffffff;
  overflow-y: auto;
  opacity: ${(props) => (props.visibility ? 1 : 0)};
  transform: translateY(
    ${(props) => (props.visibility ? 0 : "calc(-100px + 100px)")}
  );
  transition: all 0.5s linear;
  pointer-events: ${(props) => (props.visibility ? "auto" : "none")};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
`;

const CityOption = styled.li`
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 8px;
  box-sizing: border-box;
  border-bottom: 1px solid #c1c1c1;
`;
