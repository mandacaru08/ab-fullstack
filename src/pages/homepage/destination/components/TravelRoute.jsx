import { useContext } from "react";
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

  const { ticketInfos } = useContext(TicketContext);

  return (
    <Container>
      <TextInput
        label="Origem"
        width="calc(50% - 30px)"
        variant="default"
        value={ticketInfos.from}
        placeholder="estação / parada / endereço "
        onChange={(e) => {
          setFromFilteredCities(
            filterCities({ inputCity: e.target.value, amazonCities })
          );
        }}
        icon={
          <Icon
            size={"20px"}
            color={"#646973"}
            icon={<IoCloseCircleSharp />}
            onClick={() => cleanInputCities("from")}
          />
        }
      />
      <CitiesOptionsFiltered
        left="0"
        point="from"
        cities={fromFilteredCities}
        showOptions={fromFilteredCities.length > 0}
      />
      <Icon
        size={"20px"}
        color={"#646973"}
        icon={<TbArrowsLeftRight />}
        onClick={() => cleanInputCities("from")}
      />
      <TextInput
        label="Destino"
        width="calc(50% - 30px)"
        variant="default"
        placeholder="estação / parada / endereço "
        value={ticketInfos.to}
        onChange={(e) => {
          setToFilteredCities(
            filterCities({ inputCity: e.target.value, amazonCities })
          );
        }}
        icon={
          <Icon
            size={"20px"}
            color={"#646973"}
            icon={<IoCloseCircleSharp />}
            onClick={() => cleanInputCities("to")}
          />
        }
      />
      <CitiesOptionsFiltered
        right="0"
        point="to"
        cities={toFilteredCities}
        showOptions={toFilteredCities.length > 0}
      />
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
