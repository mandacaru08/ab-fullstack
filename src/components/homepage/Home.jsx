import styled from 'styled-components';

import TopBar from "../menu/TopBar";
import Destination from "../destination/Destination";
import Marketing from "../common/Marketing";
import BoatOffersComparator from "../common/BoatOffersComparator";
import Footer from "../common/Footer";

import 'react-calendar/dist/Calendar.css';

export default function Home(){

  return(
      <>
        <TopBar/>
        <Container>
          <Destination/>
          <Marketing/>
          <BoatOffersComparator/>
          <Footer/>
        </Container>
      </>
  );
}


const Container = styled.div`
  padding:0 15%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 1200px){
    padding: 0 10%;
  }
  @media(max-width: 1080px){
    padding: 0 5%
  }

  @media(max-width: 770px){
    padding: 0 0;
  }
`;