import propTypes from "prop-types";
import { TextInput } from "../../../../components";
import CitiesOptionsFiltered from "./CitiesOptionsFiltered";
import Icon from "../../../../components/Icon";
import styled from "styled-components";
import { IoCloseCircleSharp } from "react-icons/io5";
import { TbArrowsLeftRight } from "react-icons/tb";
import amazonCities from "../../../../helper/cities.json";

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
  fromCity,
  setFromCity,
  toCity,
  setToCity,
  fromFilteredCities,
  setFromFilteredCities,
  toFilteredCities,
  setToFilteredCities,
  cleanInputCities,
}) {
  return (
    <Container>
      <TextInput
        label="Origem"
        width="calc(50% - 30px)"
        variant="default"
        value={fromCity}
        placeholder="estação / parada / endereço "
        onChange={(e) => {
          setFromCity(e.target.value);
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
        value={toCity}
        onChange={(e) => {
          setToCity(e.target.value);
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
        cities={toFilteredCities}
        showOptions={toFilteredCities.length > 0}
      />
    </Container>
  );
}

TravelRoute.propTypes = {
  fromCity: propTypes.string.isRequired,
  setFromCity: propTypes.func.isRequired,
  toCity: propTypes.string.isRequired,
  setToCity: propTypes.func.isRequired,
  fromFilteredCities: propTypes.array.isRequired,
  setFromFilteredCities: propTypes.func.isRequired,
  toFilteredCities: propTypes.array.isRequired,
  setToFilteredCities: propTypes.func.isRequired,
  cleanInputCities: propTypes.func.isRequired,
};

export default TravelRoute;
