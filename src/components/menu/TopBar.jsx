import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Offers from "./options/Offers";
import BookingInfos from "./options/BookingInfos";
import BoatFleet from "./options/BoatFleet";

import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";

export default function TopBar() {
  const navigate = new useNavigate();

  const [showMenuOptions, setShowMenuOptions] = useState(false);

  return (
    <Container>
      <Menu>
        <Options>
          <Option
            onMouseEnter={() => setShowMenuOptions("offers")}
            onMouseLeave={() => setShowMenuOptions(false)}
            onClick={() => navigate("/offers")}
          >
            <span>Ofertas</span>
            {showMenuOptions == "offers" && (
              <Offers setShowMenuOptions={setShowMenuOptions} />
            )}
          </Option>
          <Option
            onMouseEnter={() => setShowMenuOptions("booking-information")}
            onMouseLeave={() => setShowMenuOptions(false)}
            onClick={() => navigate("/booking-information")}
          >
            <span>Informações de reservas</span>
            {showMenuOptions == "booking-information" && (
              <BookingInfos setShowMenuOptions={setShowMenuOptions} />
            )}
          </Option>
          <Option
            onMouseEnter={() => setShowMenuOptions("fleet")}
            onMouseLeave={() => setShowMenuOptions(false)}
            onClick={() => navigate("/fleet")}
          >
            <span>Frota de Barcos</span>
            {showMenuOptions == "fleet" && (
              <BoatFleet setShowMenuOptions={setShowMenuOptions} />
            )}
          </Option>
        </Options>
        <SearchAndLogin>
          <IoMdSearch />
          <ul onClick={() => navigate("/sign-in")}>
            <li>Login</li>
          </ul>
        </SearchAndLogin>
      </Menu>
      <Banner>
        <img
          src="https://wallpapers.com/images/hd/aerial-view-of-amazonas-river-qoa6265cuypo4fd2.jpg"
          alt="banner"
        />
      </Banner>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  z-index: 10;
  padding: 0 15%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 5%;
  }

  @media (max-width: 1080px) {
    width: 100%;
    padding: 0 0;
  }
`;

const Menu = styled.header`
  height: 5rem;
  width: 90%;
  padding: 0 20px;
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);

  color: #252d37;
  font-size: 16px;
  font-weight: 700;

  ul {
    height: 50%;
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    :hover {
      cursor: pointer;
    }
  }

  ul:before {
    background: #d7dce1;
    content: "";
    display: block;
    height: 2rem;
    width: 0.0625rem;
  }

  svg {
    font-size: 25px;

    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 770px) {
    height: 70px;
    width: 100%;
  }
`;

const Options = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Option = styled.div`
  height: 100%;
  width: fit-content;
  margin: 0 16px;
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    height: 30px;
    width: 100%;

    display: grid;
    place-items: center;
    :hover {
      cursor: pointer;
      margin-top: 3px;
      border-bottom: 3px solid #000000;
    }
  }
`;

const SearchAndLogin = styled.div`
  height: 100%;
  width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Banner = styled.div`
  height: 440px;
  width: 100%;
  margin-top: -5rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 770px) {
    height: 330px;
    margin-top: 0;
  }
`;
