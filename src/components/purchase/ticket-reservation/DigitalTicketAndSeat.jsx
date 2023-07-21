import { useState } from 'react';
import styled from 'styled-components';
import { ImInfo } from 'react-icons/im';
import { IoTicketOutline } from 'react-icons/io5';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown, MdAirlineSeatReclineNormal, MdGroups } from 'react-icons/md';

export default function DigitalTicketAndSeat(){

    const [ isSeatOptionSelected, setIsSeatOptionSelected ] = useState(false);

    function handleInputChange(){
        setIsSeatOptionSelected(!isSeatOptionSelected);
    };

    return(
        <Container>
            <section>
                <DigitalTicket>
                    <TicketIcon>
                        <IoTicketOutline/>
                    </TicketIcon>
                    <Label>
                        <h4>Ticket Digital</h4>
                        <span>Salve o ticket como PDF</span>
                    </Label>
                    <ImInfo/>
                </DigitalTicket>
                <Warning>
                    <h4>Atenção:</h4>
                    <span>
                        Válido apenas para o passageiro mencionado 
                        (e passageiros acompanhantes, se aplicável). 
                        Não é transferível. Você deve apresentar seu 
                        documento de identificação ao fiscal de 
                        bilhetes no trem.
                    </span>
                </Warning>
            </section>
            <section>
                <OurTip>
                    <span>Nossa dica: reserve seu assento agora.</span>
                </OurTip>
                <SeatsNumber onClick={() => handleInputChange()}>
                    <section>
                        <SeatOptionsContainer>
                            <InputContainer showInput={!isSeatOptionSelected}>
                                <input type='checkbox'/> 
                                {isSeatOptionSelected == true && <BsFillCheckSquareFill/>}
                            </InputContainer>
                            <Icon>
                                <MdAirlineSeatReclineNormal/>
                            </Icon>
                            <SelectContainer>
                                <label>Reserva de:</label>
                                <Options>
                                    <select type='text' onclick={e => e.stopPropagation()}>
                                        <option>1 assento</option>
                                        <option>2 assento</option>
                                        <option>3 assento</option>
                                        <option>4 assento</option>
                                        <option>5 assento</option>
                                    </select>
                                    <MdOutlineKeyboardArrowDown/>
                                </Options>
                            </SelectContainer>
                        </SeatOptionsContainer>
                        <NoteContainer>
                            <Icon>
                                <MdGroups style={{color: '#D77B00'}}/>
                            </Icon>
                            <span>
                                Esperamos uma alta demanda por assentos durante 
                                a sua viagem. É uma boa ideia reservar um assento.
                            </span>
                        </NoteContainer>
                        <ImInfo/>
                    </section>
                    <Price>
                        <span>R$49.90</span>
                    </Price>
                </SeatsNumber>
            </section>
        </Container>
    );
}

const Container = styled.div`
    height: 560px;
    width: 100%;
`;

const DigitalTicket = styled.div`
    height: 76px;
    width: 100%;  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    padding: 16px 30px 16px 140px;
    box-sizing: border-box;
    position: relative;
    background-color: #FFFFFF;
    border-bottom: 1px solid rgba(40,45,55,0.2);  
    border-radius: 4px 4px 0 0;

    svg{
        font-size: 20px;
        color: #8b8b8b;
    }
`;

const TicketIcon = styled.div`
    height: 76px;
    width: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 60px;
    top: 0;
    transform: translate(-50% -50%);

    svg{
        font-size: 25px;
    }
`;

const Label = styled.label`
    
    h4{
        font-weight: 700;
    }

    span{
        font-size: 14px;
    }
`;

const Warning = styled.div`
    height: 130px;
    width: 100%;
    padding: 20px 56px 35px 140px;
    box-sizing: border-box;
    border-radius: 0 0 4px 4px;
    background-color: #FFFFFF;

    h4{
        font-size: 16px;
        font-weight: 700;
    }
    span{
        font-size: 14px;
    }
`;

const OurTip = styled.div`
    height: 68px;
    width: 100%;
    display: flex;
    align-items: end;
    padding-bottom: 15px;
    box-sizing: border-box;
    font-size: 18px;
`;

const SeatsNumber = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 30px 16px 0;
    box-sizing: border-box;
    background-color: #FFFFFF;
    
    section{
        height: 115px;
        width: 80%;
        padding-left: 140px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
    }

    section svg{
        position: absolute;
        right: 0;
    }
`;

const SeatOptionsContainer = styled.div`
    position: relative;
`;

const InputContainer = styled.div`
    height: 16px;
    width: 16px;
    position: absolute;
    top: 50%;
    left: -120px;
    transform: translate(-50% -50%);
    border-radius: 3px;
    
    input{
        height: 16px;
        width: 16px;
        border-radius: 3px;
        border: 1px solid #858585;
        pointer-events: none;
        margin: 0;
        background-color: #FFFFFF;
        pointer-events: none;
        display: ${props => props.showInput? '' : 'none'};
    }
`;

const SelectContainer = styled.div`
    width: 50%;

    div svg{
        position: absolute;
        right: 0;
        font-size: 22px;
        pointer-events: none;
    }
`;

const Icon = styled.div`
    height: 100%;
    width: 56px;
    display: flex;
    justify-content: center;
    align-items: center; 
    position: absolute;
    left: -80px;
    top: 8px;
    transform: translate(-50% -50%);

    svg{
        font-size: 30px;
    }
`;

const Options = styled.div`
    height: 42px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;

    option{
        display: block;
    }

    select{
        height: 100%;
        width: 100%;
        padding: 2px 0 4px 16px;
        box-sizing: border-box;
        border: 1px solid #878C96;
        border-radius: 4px;
    }
`;

const NoteContainer = styled.div`
    position: relative;
`;

const Price = styled.div`
    display: flex;
    justify-content: right;
    font-size: 16px;
    font-weight: 700;
`;