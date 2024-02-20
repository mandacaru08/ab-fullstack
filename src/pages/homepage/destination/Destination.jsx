import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";
import { ImInfo } from "react-icons/im";

import styled from "styled-components";
import SearchTicketButton from "./components/SearchTicketButton";
import { Checkbox, RadioInput, Icon, Select } from "../../../components";

import TicketContext from "../../../contexts/ticket-context/TicketContext";
import ProgressContext from "../../../contexts/progress-context/ProgressContext";

import {
  TravelRoute,
  TravelDate,
  AddReturn,
  DeleteReturn,
  AmazonTicketInformation,
} from "./components";

export default function Destination() {
  const navigate = useNavigate();

  const { updateTicketInfos } = useContext(TicketContext);
  const { updateStepStatus } = useContext(ProgressContext);

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

  function cleanInputCities(inputName) {
    if (inputName === "from") {
      setFromCity("");
      setFromFilteredCities([]);
    } else {
      setToCity("");
      setToFilteredCities([]);
    }
  }

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

  function handleTicketInfos() {
    updateStepStatus("search", "done");
    navigate("/purchase/select");
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
        /* isClicked={formHeight} */
        onClick={() => setShowBackground(true)}
      >
        <h2>Para onde você quer ir?</h2>
        <FormInfos>
          <TravelInfos>
            <TravelRoute
              fromCity={fromCity}
              setFromCity={setFromCity}
              toCity={toCity}
              setToCity={setToCity}
              fromFilteredCities={fromFilteredCities}
              setFromFilteredCities={setFromFilteredCities}
              toFilteredCities={toFilteredCities}
              setToFilteredCities={setToFilteredCities}
              cleanInputCities={cleanInputCities}
            />
            <TravelDate cleanInputCities={cleanInputCities} />
          </TravelInfos>

          {false && (
            <OtherInfosForm addReturnFieldHeight={showReturnField}>
              {showReturnField ? (
                <ReturnField>
                  <TravelDate cleanInputCities={cleanInputCities} />
                  <DeleteReturn setShowReturnField={setShowReturnField} />
                </ReturnField>
              ) : (
                <AddReturn setShowReturnField={setShowReturnField} />
              )}
              <Select
                type="text"
                width="48%"
                selectVariant="default"
                value={ticket.passengers}
                onChange={(e) =>
                  setTicket({ ...ticket, passengers: e.target.value })
                }
                optionsArray={[
                  "1 pessoa",
                  "2 pessoas",
                  "3 pessoas",
                  "4 pessoas",
                  "5 pessoas",
                ]}
              />
              <AgeAndCardType>
                <Select
                  type="text"
                  width="48%"
                  selectVariant="custom"
                  value={ticket.age}
                  icon={
                    <Icon size={"16px"} color={"#646973"} icon={<ImInfo />} />
                  }
                  onChange={(e) =>
                    setTicket({ ...ticket, age: e.target.value })
                  }
                  optionsArray={[
                    "Idade entre 5-14",
                    "Idade entre 15-27",
                    "Maior de 27",
                  ]}
                />
                <Select
                  type="text"
                  width="48%"
                  selectVariant="custom"
                  value={ticket.paymentMethod}
                  icon={
                    <Icon size={"16px"} color={"#646973"} icon={<ImInfo />} />
                  }
                  onChange={(e) =>
                    setTicket({ ...ticket, paymentMethod: e.target.value })
                  }
                  optionsArray={["Sem cartão", "Cartão Amazon Boat"]}
                />
              </AgeAndCardType>
              <AmazonTicketInformation />
              <TransportationInfos>
                <TransportationClass>
                  <Options>
                    <RadioInput
                      label="1ª Classe"
                      checked={ticket.class === "1"}
                      onClick={() => setTicket({ ...ticket, class: "1" })}
                    />
                    <RadioInput
                      label="2ª Classe"
                      checked={ticket.class === "2"}
                      onClick={() => setTicket({ ...ticket, class: "2" })}
                    />
                  </Options>
                </TransportationClass>
                <Separator>
                  <hr />
                </Separator>
                <TransportOption>
                  <Options>
                    <Checkbox
                      label="Apenas Transportes Locais"
                      checked={transportTypes.localTransports}
                      onClick={() =>
                        setTransportTypes({
                          ...transportTypes,
                          localTransports: !transportTypes.localTransports,
                        })
                      }
                    />
                    <Checkbox
                      label="Mostrar conexões mais rápidas"
                      checked={transportTypes.fastestConnections}
                      onClick={() =>
                        setTransportTypes({
                          ...transportTypes,
                          fastestConnections:
                            !transportTypes.fastestConnections,
                        })
                      }
                    />
                    {/* <MoreInfosContainer
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
                    </MoreInfosContainer> */}
                  </Options>
                </TransportOption>
              </TransportationInfos>
            </OtherInfosForm>
          )}

          <OnlySeatOption>
            <div>
              <Icon
                size={"20px"}
                color={"#646973"}
                icon={
                  <Icon
                    size={"22px"}
                    color={"#646973"}
                    position={"absolute"}
                    icon={<MdKeyboardArrowRight />}
                  />
                }
                onClick={() => cleanInputCities("from")}
              />
              <h3>Apenas assento (sem ticket)</h3>
            </div>
            <SearchTicketButton onClick={() => handleTicketInfos()}>
              Pesquisar
            </SearchTicketButton>
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
`;

const ReturnField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const AgeAndCardType = styled.div`
  height: 62px;
  width: 100%;
  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
`;

const Options = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
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
