import styled from "styled-components";

const allInfos = [
  {
    name: "Compare nossas ofertas",
    image:
      "https://assets.static-bahn.de/.imaging/focalpoint/560x280/dam/jcr:11b737d1-0b17-4b53-b0df-5cd64e7be097/209589-281598.svg",
    topics: [
      "Tarifas mais seguras e flexíveis para viagens de longa distância",
    ],
  },
  {
    name: "Informações de reserva",
    image:
      "https://assets.static-bahn.de/.imaging/focalpoint/560x280/dam/jcr:100215fa-dfb6-4a03-b4d7-29f6812b5fec/227072-304291.svg",
    topics: [
      "Alterações e reembolso",
      "Informações sobre ticket digital",
      "Aplicativo Amazon Boats",
    ],
  },
  {
    name: "Frota de barcos",
    image:
      "https://png.pngtree.com/png-vector/20191001/ourlarge/pngtree-planing-powerboat-icon-simple-style-png-image_1772912.jpg",
    topics: ["Wi-Fi no Barco", "Viajar em Camarote"],
  },
];

export default function BoatOffersComparator() {
  return (
    <Container>
      {allInfos.map((item) => {
        return (
          <OffersComparator key={item.name}>
            <img src={item.image} alt="image" />
            <Topics>
              <h2>{item.name}</h2>
              <Topic>
                <ul>
                  {item.topics.map((topic) => {
                    return <li key={topic}>{topic}</li>;
                  })}
                </ul>
              </Topic>
            </Topics>
          </OffersComparator>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  height: 400px;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 40px;
  box-sizing: content-box;
  background-color: #ffffff;

  img {
    height: 50%;
    width: 100%;
    object-fit: contain;
  }

  ul {
    display: flex;
  }
`;

const OffersComparator = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: content-box;
`;

const Topics = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
  }
`;

const Topic = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style-type: circle;
  }

  li {
    margin-left: 18px;
    margin-bottom: 0.7rem;
  }
`;
