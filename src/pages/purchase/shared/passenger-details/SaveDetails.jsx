import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsFillCheckCircleFill, BsFillCheckSquareFill } from "react-icons/bs";

import { Button, Checkbox } from "../../../../components";

const advantages = [
  {
    id: 1,
    name: "Use os dados do perfil para compra rápida",
  },
  {
    id: 2,
    name: "Vizualize e administre reservas de forma rápida",
  },
  {
    id: 3,
    name: "Mantenha-se informado com as notificações de viagem",
  },
];

const NavigateButton = ({ children, onClick, ...props }) => {
  return (
    <Button onClick={onClick} {...props} size="medium">
      {children}
    </Button>
  );
};

NavigateButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function SaveDetails() {
  const navigate = useNavigate();
  const [saveDetails, setSaveDetails] = useState(false);

  function handleInputChange() {
    setSaveDetails(!saveDetails);
  }

  return (
    <Container>
      <section>
        <Checkbox
          type="checkbox"
          label="Salve os detalhes para futuras reservas"
          checked={saveDetails}
          onClick={() => handleInputChange()}
          icon={saveDetails && <BsFillCheckSquareFill />}
        />
        <Message>
          Se você deseja criar uma conta de cliente agora, poderá atribuir
          <br></br> seus dados de acesso na próxima etapa.
        </Message>
      </section>
      <Advantages>
        <ol>
          {advantages.map((advantage) => {
            return (
              <div key={advantage.id}>
                <BsFillCheckCircleFill />
                <li>{advantage.name}</li>
              </div>
            );
          })}
        </ol>
      </Advantages>
      <ButtonContainer>
        <NavigateButton onClick={() => navigate("/purchase/ticket-overview")}>
          {saveDetails
            ? "Continuar com o registro"
            : "Continuar como convidado"}
        </NavigateButton>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  background-color: #ffffff;
  border-top: 1px solid #f0f3f5;
  border-radius: 0 0 4px 4px !important;

  section {
    height: 98px;
    width: 60%;
    padding: 16px 50px 16px 60px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
  }
`;

const Message = styled.span`
  font-size: 14px;
  color: #646973;
`;

const Advantages = styled.div`
  height: 90px;
  width: 100%;
  padding-left: 70px;

  li {
    font-size: 14px;
    line-height: 20px;
  }

  svg {
    font-size: 16px;
    color: #63a615;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: row;
  }
`;

const ButtonContainer = styled.div`
  height: 84px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: center;
`;
