import { useContext, useState, useEffect } from "react";
import { usePDF } from "react-to-pdf";
import styled from "styled-components";
import QRCode from "qrcode";
import { Button } from "../../../components";
import TicketContext from "../../../contexts/ticket-context/TicketContext";
import logo from "../../../../public/logo.png"

function DownloadTicket() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const { ticketInfos } = useContext(TicketContext);

  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const generateQR = async (text) => {
    try {
      const imageUrl = await QRCode.toDataURL(text);
      setQrCodeUrl(imageUrl);
    } catch (err) {
      console.error(err);
    }
  };

  const QRCodeImage = () => {
    return <img src={qrCodeUrl} alt="QRCode" />;
  };

  useEffect(() => {
    generateQR("PASS ID");
  }, []);

  return (
    <Container>
      <Ticket ref={targetRef}>
        <TicketContent>
          <InfosPadding>
            <Infos>
              <TicketHeader>
                <ContainerLogo >
                  <img src={logo} alt="image-logo"/>
                </ContainerLogo>
                <div>
                  <h3>Passagem</h3>
                  <span>#154959216</span>
                </div>
              </TicketHeader>
              <PassengerInfo>
                <div>
                  <span>Nome</span>
                  <h3>{ticketInfos.name}</h3>
                </div>
              </PassengerInfo>
              <PassengerInfo>
                <div>
                  <span>Horário Embarque</span>
                  <h3>{ticketInfos.time}</h3>
                </div>
                <div>
                  <span>Data Embarque</span>
                  <h3>{ticketInfos.date}</h3>
                </div>
              </PassengerInfo>
              <PassengerInfo>
                <div>
                  <span>Saindo de</span>
                  <h3>{ticketInfos.from}</h3>
                </div>
                <div>
                  <span>Para</span>
                  <h3>{ticketInfos.to}</h3>
                </div>
              </PassengerInfo>
              <PassengerInfo>
                <div>
                  <span>Barco</span>
                  <h3>Madeira Boat</h3>
                </div>
                <div>
                  <span>Assento</span>
                  <h3>11</h3>
                </div>
              </PassengerInfo>
            </Infos>
          </InfosPadding>
          <InfosDetachablePadding>
            <InfosDetachable>
              <InfosDetachableHeader>
                <div>
                  <span>Nome do Passageiro</span>
                  <h3>{ticketInfos.name}</h3>
                </div>
              </InfosDetachableHeader>
              <InfosDetachableContent>
                <div>
                  <span>Horário Embarque</span>
                  <h3>{ticketInfos.time}</h3>
                </div>
                <div>
                  <span>Data Embarque</span>
                  <h3>{ticketInfos.date}</h3>
                </div>
                <div>
                  <span>Barco</span>
                  <h3>Madeira Boat</h3>
                </div>
              </InfosDetachableContent>
              <QRCodeContainer>
                {QRCodeImage && <QRCodeImage />}
              </QRCodeContainer>
            </InfosDetachable>
          </InfosDetachablePadding>
        </TicketContent>
      </Ticket>
      <InstructionsContainer>
        <Instructions>
          <h2>
            Para baixar a passagem<br></br>clique no botão abaixo
          </h2>
          <Button size="small" onClick={toPDF}>
            Baixar
          </Button>
        </Instructions>
      </InstructionsContainer>
    </Container>
  );
}

export default DownloadTicket;

const ContainerLogo = styled.div`
  height: 100%;
  width: fit-content;
  display: grid;
  place-items: center;

  img {
    height: 60px;
    width: 60px;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10%;
  box-sizing: border-box;
`;

const Ticket = styled.div`
  height: 754px;
  width: 332px;
  padding: 10px;
  box-sizing: content-box;
  margin-right: 20px;
  background-color: #849cd4;
  text-align: center;
  position: relative;

  h3 {
    font-size: 14px;
    font-weight: 600;
    display: grid;
    place-content: center;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    display: grid;
    place-content: center;
  }
`;

const InstructionsContainer = styled.div`
  height: 100%;
  width: 40%;
  display: grid;
  place-content: center;

  h2 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;

const Instructions = styled.div`
  height: 112px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.button``;

const TicketContent = styled.div`
  background-color: #f1f3f5;
  border-radius: 14px;
`;

const Infos = styled.div`
  height: 366px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #1e1e1e;
  border-radius: 12px;
  background-color: #f1f3f5;

  h3,
  span {
    color: #425582;
  }
`;

const InfosPadding = styled.div`
  height: fit-content;
  display: grid;
  place-content: center;
  padding: 14px;
  border-bottom: 3px dashed #849cd4;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 2px dashed #849cd4;
`;

const TicketHeader = styled(Section)`
  height: 78px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-beween;
    align-items: center;
  }
`;

const PassengerInfo = styled(Section)`
  height: 72px;
  padding: 6px 22px;

  div {
    height: 100%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

const DashedPart = styled.div`
  width: 400px;
  height: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 45%;

  div {
    width: 6px;
    height: 12px;
    padding: 0;
    background-color: #f2f2f2;
    position: absolute;
    z-index: 10;
  }
  div:nth-child(1) {
    box-shadow: inset -2px 2px 2px 0 ${(props) => (props.isSelected ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)")};
    border-radius: 0 5px 5px 0;
    border-left: 0;
    left: -2px;
  }
  div:nth-child(2) {
    box-shadow: inset 2px 2px 2px 0
      ${(props) => (props.isSelected ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)")};
    border-radius: 5px 0 0 5px;
    border-right: 0;
    right: -2px;
  }
`;

const InfosDetachable = styled.div`
  height: 316px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #425582;

  h3,
  span {
    color: #f1f3f5;
  }
`;

const InfosDetachablePadding = styled.div`
  height: fit-content;
  display: grid;
  place-content: center;
  padding: 14px;
  background-color: #425582;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`;

const InfosDetachableHeader = styled(Section)`
  height: 72px;
  width: 100%;
  padding: 6px 10px;
  display: grid;
  place-content: center;
`;

const InfosDetachableContent = styled(Section)`
  height: 72px;
  padding: 6px 10px;

  div {
    height: 100%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const QRCodeContainer = styled(Section)`
  height: 194px;
  width: 100%;
  padding: 22px 10px;
  display: grid;
  place-content: center;

  img {
    border: 2px dashed #1e1e1e;
  }
`;
