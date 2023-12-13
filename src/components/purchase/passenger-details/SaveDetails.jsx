import { useState } from 'react';

import styled from 'styled-components';
import { BsFillCheckCircleFill, BsFillCheckSquareFill } from 'react-icons/bs';
import { ImInfo } from 'react-icons/im';
import ButtonHorizontal from '../../ButtonHorizontal';

const advantages = [
    {
        id: 1,
        name: 'Use os dados do perfil para compra rápida'
    },
    {
        id: 2,
        name: 'Vizualize e administre reservas de forma rápida'
    },
    {
        id: 3,
        name: 'Mantenha-se informado com as notificações de viagem'
    },
];

export default function SaveDetails(){

    const [ saveDetails, setSaveDetails ] = useState(false);

    function handleInputChange(){
        setSaveDetails(!saveDetails);
    };
    

    return(
        <Container>
            <label onChange={() => handleInputChange()}>
                <InputContainer showInput={!saveDetails}>
                    <input type='checkbox' readOnly/>
                    {saveDetails == true && <BsFillCheckSquareFill/>}
                </InputContainer>
                <Title checked={saveDetails}>
                    <h4>Salve os detalhes para futuras reservas</h4>
                    <ImInfo/>
                </Title>
                <Message>
                    Se você deseja criar uma conta de cliente agora, 
                    poderá atribuir<br></br> seus dados de acesso na próxima etapa.
                </Message>
            </label>
            <Advantages>
                <ol>
                    {
                        advantages.map(advantage => {
                            return(
                                <div key={advantage.id}>
                                    <BsFillCheckCircleFill/>
                                    <li>{advantage.name}</li>
                                </div>
                            )
                        })
                    }
                </ol>
            </Advantages>
            <ButtonContainer>
                <ButtonHorizontal size='large'>
                    {
                        saveDetails?
                            'Continuar com o registro'
                            :
                            'Continuar como convidado'
                    }
                </ButtonHorizontal>
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
    background-color: #FFFFFF;
    border-top: 1px solid #F0F3F5;
    border-radius: 0 0 4px 4px !important;
    
    label{
        height: 98px;
        width: 60%;
        padding: 16px 50px 16px 60px;
        box-sizing: border-box;
        position: relative;
    }
`;

const InputContainer = styled.div`
    height: 16px;
    width: 16px;
    position: absolute;
    top: 40%;
    left: 15px;
    transform: translate(-50% -50%);
    border-radius: 3px;
    
    input{
        height: 16px;
        width: 16px;
        border-radius: 3px;
        border: 1px solid #858585;
        pointer-events: none;
        display: ${props => props.showInput? 'block' : 'none'};
        margin: 0;
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    h4{
        font-size: 16px;
        font-weight: 700;
    }

    svg{
        font-size: 20px;
        font-weight: 700;
        color: #8b8b8b;
        margin-left: 10px;
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

    li{
        font-size: 14px;
        line-height: 20px;
    }
    
    svg{
        font-size: 16px;
        color: #63a615;
        margin-right: 10px;
    }

    div{
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