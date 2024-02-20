import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

const allInfos = [
  {
    name: "Ofertas",
    infos: ["Viagem em grupo", "Viagem durante a noite", "Reserva de assentos"],
  },
  {
    name: "Informações de reserva",
    infos: [
      "Alterar ou Cancelar",
      "Viajar com bagagem",
      "Direitos dos passageiros",
    ],
  },
  {
    name: "Frota de barcos",
    infos: [
      "Balsa ou bote",
      "Intermunicipal ou interestadual",
      "Barcos regionais",
    ],
  },
  {
    name: "Destinos populares",
    infos: ["Manaus", "Belém", "Santarém"],
  },
];

export default function GeneralInfos() {
  return (
    <Sections>
      {allInfos.map((item) => {
        return (
          <SectionInfos key={item.name}>
            <h2>{item.name}</h2>
            {item.infos.map((item) => {
              return (
                <Subsections key={item}>
                  <MdKeyboardArrowRight />
                  <h3>{item}</h3>
                </Subsections>
              );
            })}
          </SectionInfos>
        );
      })}
    </Sections>
  );
}

const Sections = styled.div`
  height: 230px;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 2.5rem;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f3f5;

  @media (max-width: 770px) {
    padding: 1rem 2rem;
  }
`;

const SectionInfos = styled.div`
  height: 100%;
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Subsections = styled.div`
  display: flex;
  flex-direction: row;

  h3:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
