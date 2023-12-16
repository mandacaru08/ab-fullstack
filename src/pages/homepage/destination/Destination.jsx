import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt, FaCheck, FaRegTrashAlt } from "react-icons/fa";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
  MdRepeat,
} from "react-icons/md";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { TbArrowsLeftRight } from "react-icons/tb";
import { ImInfo } from "react-icons/im";
import { IoCloseCircleSharp } from "react-icons/io5";
import styled from "styled-components";

import DateInput from "./DateInput";
import TimeInput from "./TimeInput";
import MoreInfos from "./MoreInfos";
import CitiesOptionsFiltered from "./CitiesOptionsFiltered";
import amazonCities from "../../../helper/cities.json";
import SearchTicketButton from "./components/SearchTicketButton";

export default function Destination() {
  const navigate = useNavigate();

  const moreInfosRef = useRef();

  const [formHeight, setFormHeight] = useState(false);

  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [fromFilteredCities, setFromFilteredCities] = useState([]);
  const [toFilteredCities, setToFilteredCities] = useState([]);

  const [showBackground, setShowBackground] = useState(false);
  const [showReturnField, setShowReturnField] = useState(false);
  const [showMoreInfosMessage, setShowMoreInfosMessage] = useState(false);
  const [transportTypes, setTransportTypes] = useState({
    localTransports: false,
    fastestConnections: false,
  });
  const [ticket, setTicket] = useState({
    from: "",
    to: "",
    outboundDate: "",
    outboundTime: "",
    returnDate: "",
    returnTime: "",
    passengers: 1,
    age: "",
    class: "",
    paymentMethod: "",
  });

  useEffect(() => {
    if (showBackground && showReturnField) {
      setFormHeight("835px");
    } else if (showBackground && !showReturnField) {
      setFormHeight("765px");
    } else {
      setFormHeight(false);
    }
  }, [showBackground, showReturnField]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        moreInfosRef.current &&
        !moreInfosRef.current.contains(event.target)
      ) {
        setShowMoreInfosMessage(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function filterCities(inputCity) {
    const cities = amazonCities.locales.amazon_cities.filter((city) => {
      return city?.name?.toLowerCase()?.includes(inputCity?.toLowerCase());
    });
    return cities;
  }

  return (
    <>
      {showBackground && (
        <BlurBackground
          position={"fixed"}
          onClick={() => setShowBackground(false)}
        />
      )}
      <TravelForm
        isClicked={formHeight}
        onClick={() => setShowBackground(true)}
      >
        <h2>Para onde você quer ir?</h2>
        <FormInfos>
          <TravelInfos>
            <TravelRoute>
              <Input>
                <label>Saída</label>
                <input
                  type="text"
                  placeholder="estação / parada / endereço "
                  value={fromCity}
                  onChange={(e) => {
                    setFromCity(e.target.value);
                    setFromFilteredCities(filterCities(e.target.value));
                  }}
                />
                <IoCloseCircleSharp onClick={() => setFromFilteredCities([])} />
                <CitiesOptionsFiltered
                  cities={fromFilteredCities}
                  showOptions={fromFilteredCities.length > 0}
                />
              </Input>
              <Icon>
                <TbArrowsLeftRight />
              </Icon>
              <Input>
                <label>Destino</label>
                <input
                  type="text"
                  placeholder="estação / parada / endereço "
                  value={toCity}
                  onChange={(e) => {
                    setToCity(e.target.value);
                    setToFilteredCities(filterCities(e.target.value));
                  }}
                />

                <IoCloseCircleSharp onClick={() => setToFilteredCities([])} />
                <CitiesOptionsFiltered
                  cities={toFilteredCities}
                  showOptions={toFilteredCities.length > 0}
                />
              </Input>
            </TravelRoute>
            <TravelDate>
              <h4>Viagem de ida</h4>
              <DateAndHour>
                <DateInput />
                <Icon>
                  <FaRegCalendarAlt />
                </Icon>
                <TimeInput />
              </DateAndHour>
            </TravelDate>
          </TravelInfos>

          {showBackground && (
            <OtherInfosForm addReturnFieldHeight={showReturnField}>
              {showReturnField ? (
                <ReturnField>
                  <TravelDate>
                    <h4>Viagem de volta</h4>
                    <DateAndHour>
                      <DateInput />
                      <Icon>
                        <FaRegCalendarAlt />
                      </Icon>
                      <TimeInput />
                    </DateAndHour>
                  </TravelDate>
                  <DeleteReturn onClick={() => setShowReturnField(false)}>
                    <FaRegTrashAlt />
                    <span>Deletar Viagem de Volta</span>
                  </DeleteReturn>
                </ReturnField>
              ) : (
                <AddReturn onClick={() => setShowReturnField(true)}>
                  <MdRepeat />
                  <span>Adicionar viagem de retorno</span>
                </AddReturn>
              )}
              <NumberPassengers>
                <select
                  type="text"
                  value={ticket.passengers}
                  onChange={(e) =>
                    setTicket({ ...ticket, passengers: e.target.value })
                  }
                >
                  <option>1 pessoa</option>
                  <option>2 pessoas</option>
                  <option>3 pessoas</option>
                  <option>4 pessoas</option>
                  <option>5 pessoas</option>
                </select>
                <ShowOptions>
                  <MdOutlineKeyboardArrowDown />
                </ShowOptions>
              </NumberPassengers>
              <AgeAndCardType>
                <Age>
                  <InfoIcon
                    style={{ position: "absolute", top: "0", left: "0" }}
                  >
                    <ImInfo />
                  </InfoIcon>
                  <select
                    type="text"
                    value={ticket.age}
                    onChange={(e) =>
                      setTicket({ ...ticket, age: e.target.value })
                    }
                  >
                    <option>Idade entre 5-14</option>
                    <option>Idade entre 15-27</option>
                    <option>Maior de 27</option>
                  </select>
                  <ShowOptions>
                    <MdOutlineKeyboardArrowDown />
                  </ShowOptions>
                </Age>
                <CardType>
                  <select
                    type="text"
                    value={ticket.paymentMethod}
                    onChange={(e) =>
                      setTicket({ ...ticket, paymentMethod: e.target.value })
                    }
                  >
                    <option>Sem Cartão</option>
                    <option>Cartão de Crédito</option>
                  </select>
                  <ShowOptions>
                    <MdOutlineKeyboardArrowDown />
                  </ShowOptions>
                </CardType>
              </AgeAndCardType>
              <AmazonTicketInformation>
                <PercentIcon>
                  <HiOutlineReceiptPercent />
                </PercentIcon>
                <Information>
                  <p>
                    Para os portadores do Amazon-Ticket, pode ser mais barato
                    limitar a consulta e a reserva à rota de longa distância, já
                    que esse bilhete já cobre o transporte local. Para obter
                    mais informações (incluindo sobre os direitos dos
                    passageiros, que podem ser limitados).
                  </p>
                </Information>
              </AmazonTicketInformation>
              <TransportationInfos>
                <TransportationClass>
                  <Options>
                    <Option
                      onClick={() => setTicket({ ...ticket, class: "1" })}
                    >
                      <span>
                        <input
                          type="radio"
                          checked={ticket.class === "1"}
                          readOnly
                        />
                        <label>1ª Classe</label>
                      </span>
                    </Option>
                    <Option
                      onClick={() => setTicket({ ...ticket, class: "2" })}
                    >
                      <span>
                        <input
                          type="radio"
                          checked={ticket.class === "2"}
                          readOnly
                        />
                        <label>2ª Classe</label>
                      </span>
                    </Option>
                  </Options>
                </TransportationClass>
                <Separator>
                  <hr />
                </Separator>
                <TransportOption>
                  <Options>
                    <Option
                      checked={transportTypes.localTransports}
                      onClick={() =>
                        setTransportTypes({
                          ...transportTypes,
                          localTransports: !transportTypes.localTransports,
                        })
                      }
                    >
                      <span>
                        <input type="checkbox" />
                        <label>Apenas Transposrtes Locais</label>
                        {transportTypes.localTransports && (
                          <FaCheck
                            style={{
                              position: "absolute",
                              top: "8px",
                              left: "8px",
                            }}
                          />
                        )}
                      </span>
                    </Option>
                    <Option
                      style={{ width: "270px" }}
                      checked={transportTypes.fastestConnections}
                      onClick={() =>
                        setTransportTypes({
                          ...transportTypes,
                          fastestConnections:
                            !transportTypes.fastestConnections,
                        })
                      }
                    >
                      <span>
                        <input type="checkbox" />
                        <label>Mostrar conexões mais rápidas</label>
                        {transportTypes.fastestConnections && (
                          <FaCheck
                            style={{
                              position: "absolute",
                              top: "8px",
                              left: "8px",
                            }}
                          />
                        )}
                      </span>
                      <MoreInfosContainer
                        ref={moreInfosRef}
                        onClick={() =>
                          setShowMoreInfosMessage(!showMoreInfosMessage)
                        }
                      >
                        <InfoIcon>
                          <ImInfo />
                        </InfoIcon>
                        <p>O que isso significa?</p>
                        {showMoreInfosMessage && (
                          <MoreInfos showMessage={showMoreInfosMessage} />
                        )}
                      </MoreInfosContainer>
                    </Option>
                  </Options>
                </TransportOption>
              </TransportationInfos>
            </OtherInfosForm>
          )}

          <OnlySeatOption>
            <div>
              <Icon>
                <MdKeyboardArrowRight />
              </Icon>
              <h3>Apenas assento (sem ticket)</h3>
            </div>
            <SearchTicketButton onClick={() => navigate("/purchase/select")}>Pesquisar</SearchTicketButton>
          </OnlySeatOption>
        </FormInfos>
      </TravelForm>
    </>
  );
}

const OtherInfosForm = styled.div`
  height: ${(props) => (props.addReturnFieldHeight ? "470px" : "385px")};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  svg {
    pointer-events: none;
  }

  select {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0.625rem 1rem;
    cursor: pointer;
  }
`;

const AddReturn = styled.span`
  height: 30px;
  width: 230px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 100%;
    width: 15px;
  }
  :hover {
    cursor: pointer;
  }
`;

const ReturnField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const DeleteReturn = styled.div`
  height: 30px;
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  :hover {
    cursor: pointer;
  }
`;

const NumberPassengers = styled.div`
  height: 48px;
  width: 45%;
  position: relative;
  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 0.0625rem solid #878c96;
  border-radius: 3px;
  color: #282d37;
`;

const ShowOptions = styled.div`
  height: 100%;
  width: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  pointer-events: none;
`;

const AgeAndCardType = styled.div`
  height: 62px;
  width: 100%;
  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  select {
    height: calc(100% - 8px);
    padding-left: 32px;
    padding-right: 0;
    border-bottom: 1px solid #878c96;
    cursor: pointer;
  }
`;

const Age = styled.div`
  height: 100%;
  width: 49.5%;
  box-sizing: border-box;
  padding: 0 8px;
  position: relative;
  background-color: #f0f3f5;

  border-radius: 3px;
  color: #282d37;
`;

const InfoIcon = styled.div`
  height: 100%;
  width: 32px;
  font-size: 20px;
  color: #8b8b8b;

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: none;
`;

const CardType = styled.div`
  height: 100%;
  width: 49.5%;
  box-sizing: border-box;
  padding: 0 8px;
  position: relative;
  background-color: #f0f3f5;

  border-radius: 3px;
  color: #282d37;
`;

const AmazonTicketInformation = styled.div`
  height: 62px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const PercentIcon = styled.div`
  height: 100%;
  width: 25px;
  font-size: 20px;
  color: #000000;

  position: absolute;
  top: 0;
  left: 0;
`;

const Information = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 25px;

  p {
    font-size: 0.875rem;
  }
`;

const TransportationInfos = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  hr {
    background-color: #afb4bb;
    border: 0;
    height: 1.5rem;
    margin: 0 2.5rem;
    visibility: hidden;
    width: 1px;

    @media (min-width: 768px) {
      visibility: visible;
    }
  }
`;

const TransportationClass = styled.div`
  height: 30px;

  label {
    width: 90px;
  }
`;

const Options = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
`;

const Option = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  position: relative;
  z-index: 1;

  font-weight: ${(props) => (props.checked === true ? "700" : "400")};

  span {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    cursor: pointer;
  }

  label {
    padding-top: 5px;
    box-sizing: border-box;
    pointer-events: none;
  }

  svg {
    font-size: 12px;
    color: #ffffff;
  }

  div svg {
    color: #000;
    font-size: 20px;
  }

  p {
    font-size: 13px;
    color: #646973;
  }

  input {
    position: relative;
    margin-right: 5px;
    border: 1px solid #282d37;
    outline: none;
    pointer-events: none;
  }

  input[type="radio"] {
    width: 16px;
    height: 16px;
    border-radius: 50%;

    &:checked::after {
      content: "";
      width: 10px;
      height: 10px;
      border: 5px solid #282d37;
      border-radius: 50%;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    background-color: ${(props) => (props.checked ? "#282D37" : "")};
  }
`;

const MoreInfosContainer = styled.div`
  height: 40px;
  width: 170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  :hover {
    cursor: pointer;
  }
`;

const Separator = styled.div`
  display: grid;
  place-items: center;
`;

const TransportOption = styled.div`
  height: 70px;
  width: 520px;
`;

const BlurBackground = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2;
  position: ${(props) => (props.position ? props.position : "absolute")};
  top: 0;
  left: 0;
  background-color: #282d37;
  opacity: 0.8;
`;

const TravelForm = styled.div`
  height: ${(props) => (props.isClicked ? props.isClicked : "380px")};
  width: 85%;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 24px 40px;
  margin-top: -5rem;

  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    height: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  @media (max-width: 770px) {
    width: 100%;
    border-radius: 0;
  }
`;

const TravelInfos = styled.div`
  height: 175px;
  width: 100%;
  margin-bottom: 20px;
`;

const FormInfos = styled.div`
  height: 705px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  position: relative;
`;

const TravelRoute = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 30px;
`;

const TravelDate = styled.div`
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

const Input = styled.div`
  height: 65px;
  width: 45%;
  position: relative;
  box-sizing: border-box;
  border-bottom: 0.0625rem solid #878c96;
  border-radius: 0.25rem;
  background-color: #f0f3f5;

  svg {
    font-size: 20px;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
  }

  input {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 32px 16px 8px 16px;
    border-style: none;
    background-color: #f0f3f5;
  }

  label {
    position: absolute;
    top: 8px;
    left: 16px;
    font-size: 0.75rem;
  }
`;

const Icon = styled.div`
  height: 100%;
  width: 30px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OnlySeatOption = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: end;
  }
`;
