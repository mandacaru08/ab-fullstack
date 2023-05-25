import styled from 'styled-components';

import TopBar from './components/TopBar';
import Destination from './components/Destination';
import BoatOffersComparator from './components/BoatOffersComparator';
import Marketing from './components/Marketing';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <>
      <TopBar/>
      <Container>
        <Destination/>
      </Container>
    </>
  )
}

export default App;

const Container = styled.div`
  padding:0 15%;
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