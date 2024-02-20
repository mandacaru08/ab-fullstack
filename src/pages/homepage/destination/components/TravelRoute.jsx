import { useContext, useState } from "react";
import propTypes from "prop-types";
import { TextInput } from "../../../../components";
import CitiesOptionsFiltered from "./CitiesOptionsFiltered";
import Icon from "../../../../components/Icon";
import styled from "styled-components";
import { IoCloseCircleSharp } from "react-icons/io5";
import { TbArrowsLeftRight } from "react-icons/tb";
import amazonCities from "../../../../helper/cities.json";

import TicketContext from "../../../../contexts/ticket-context/TicketContext";

import { filterCities } from "../utils";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 30px;
`;

function TravelRoute({
  fromFilteredCities,
  setFromFilteredCities,
  toFilteredCities,
  setToFilteredCities,
  cleanInputCities,
}) {
  const { ticketInfos, updateTicketInfos } = useContext(TicketContext);

  const [citiesInput, setCitiesInput] = useState({
    from: ticketInfos.from,
    to: ticketInfos.to,
  });

  const [selectedCity, setSelectedCity] = useState({
    from: "",
    to: "",
  });

  function cleanInputCities(fieldName) {
    updateTicketInfos(fieldName, "");
    if (fieldName === "from") {
      setFromFilteredCities([]);
    } else {
      setToFilteredCities([]);
    }
  }

  function handleOnChange(e, fieldName) {
    const value = e.target.value;
    setCitiesInput({ ...citiesInput, [fieldName]: value });
    if (fieldName === "from") {
      setFromFilteredCities(filterCities({ inputCity: value, amazonCities }));
    } else {
      setToFilteredCities(filterCities({ inputCity: value, amazonCities }));
    }
    if (value === "") {
      updateTicketInfos(fieldName, "");
      cleanInputCities(fieldName);
    }
  }

  const fields = {
    from: {
      label: "Origem",
      setFilteredCities: setFromFilteredCities,
      filteredCities: fromFilteredCities,
    },
    to: {
      label: "Destino",
      setFilteredCities: setToFilteredCities,
      filteredCities: toFilteredCities,
    },
  };

  return (
    <Container>
      {Object.keys(fields).map((fieldName) => (
        <>
          <TextInput
            label={fields[fieldName].label}
            width="calc(50% - 30px)"
            variant="default"
            value={selectedCity[fieldName] || citiesInput[fieldName]}
            placeholder="estação / parada / endereço "
            onChange={(e) => handleOnChange(e, fieldName)}
            icon={
              <Icon
                size={"20px"}
                color={"#646973"}
                icon={<IoCloseCircleSharp />}
                onClick={() => cleanInputCities(fieldName)}
              />
            }
          />
          <CitiesOptionsFiltered
            left={fieldName === "from"}
            point={fieldName}
            cities={fields[fieldName].filteredCities}
            showOptions={fields[fieldName].filteredCities.length > 0}
            onSelect={(selectedCity) => {
              setCitiesInput({ ...citiesInput, [fieldName]: selectedCity });
              fields[fieldName].setFilteredCities([]);
            }}
          />
        </>
      ))}
    </Container>
  );
}

TravelRoute.propTypes = {
  fromFilteredCities: propTypes.array.isRequired,
  setFromFilteredCities: propTypes.func.isRequired,
  toFilteredCities: propTypes.array.isRequired,
  setToFilteredCities: propTypes.func.isRequired,
  cleanInputCities: propTypes.func.isRequired,
};

export default TravelRoute;
