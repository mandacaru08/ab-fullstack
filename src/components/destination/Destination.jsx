import { useState } from 'react';
import styled from 'styled-components';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { TbArrowsLeftRight } from 'react-icons/tb';
import { BsCheck } from 'react-icons/bs';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import { ImInfo } from 'react-icons/im';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowDown, MdRepeat } from 'react-icons/md';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
 
export default function Destination(){

    const [ showBackground, setShowBackground ] = useState(false);
    const [ transportTypes, setTransportTypes ] = useState({
        localTransports: false,
        fastestConnections: false,
    });
    const [ ticket, setTicket ] = useState({
        from: '',
        to: '',
        outboundDate: '',
        returnDate: '',
        passengers: 1,
        age: '',
        class: '',
    });

    return(
        <>
            {showBackground && <BlurBackground onClick={() => setShowBackground(false)}/>}
            <TravelInfos isClicked={showBackground} onClick={() => setShowBackground(true)}>
                <h2>Para onde você quer ir?</h2>
                <FormInfos>

                    <TravelRoute>
                        <Input>
                            <label>Saída</label>
                            <input type='text' placeholder='estação / parada / endereço '/>
                        </Input>
                        <Icon>
                            <TbArrowsLeftRight/>
                        </Icon>
                        <Input>
                            <label>Destino</label>
                            <input type='text' placeholder='estação / parada / endereço '/>
                        </Input>
                    </TravelRoute>

                    <TravelDate>
                        <h4>Viagem de ida</h4>
                        <DateAndHour>
                            <DateInput/>
                            <Icon>
                                <FaRegCalendarAlt/>
                            </Icon>
                            <TimeInput/>
                        </DateAndHour>
                    </TravelDate>
                    
                    {showBackground  === true?
                        <OtherInfosForm>
                            <span><MdRepeat/>dicionar viagem de retorno</span>
                            <NumberPassengers>
                                <select type='text' value={ticket.passengers}>
                                    <option value='1'>1 pessoa</option>
                                    <option value='2'>2 pessoas</option>
                                    <option value='3'>3 pessoas</option>
                                    <option value='4'>4 pessoas</option>
                                    <option value='5'>5 pessoas</option>
                                </select>
                                <ShowOptions>
                                    <MdOutlineKeyboardArrowDown/>
                                </ShowOptions>
                            </NumberPassengers>
                            <AgeAndCardType>
                                <Age>
                                    <InfoIcon>
                                        <ImInfo/>
                                    </InfoIcon>
                                    <select type='text' value={ticket.age}>
                                        <option value='1'>Idade entre 5-14</option>
                                        <option value='2'>Idade entre 15-27</option>
                                        <option value='3'>Maior de 27</option>
                                    </select>
                                    <ShowOptions>
                                        <MdOutlineKeyboardArrowDown/>
                                    </ShowOptions>
                                </Age>
                                <CardType>
                                    <select type='text' value={ticket.age}>
                                        <option value='1'>Sem Cartão</option>
                                    </select>
                                    <ShowOptions>
                                        <MdOutlineKeyboardArrowDown/>
                                    </ShowOptions>
                                </CardType>
                            </AgeAndCardType>
                            <AmazonTicketInformation>
                                <PercentIcon>
                                    <HiOutlineReceiptPercent/>
                                </PercentIcon>
                                <Information>
                                    <p>
                                        Para os portadores do Amazon-Ticket, pode ser 
                                        mais barato limitar a consulta e a reserva à rota de 
                                        longa distância, já que esse bilhete já cobre o transporte 
                                        local. Para obter mais informações (incluindo 
                                        sobre os direitos dos passageiros, que podem ser limitados).
                                    </p>
                                </Information>
                            </AmazonTicketInformation>
                            <TransportationInfos>
                                <TransportationClass>
                                    <Options>
                                        <Option>
                                            <input 
                                                type="radio" 
                                                value="1" 
                                                checked={ticket.class === '1'}
                                                onClick={(event) => setTicket({...ticket, class: event.target.value})}
                                            />
                                            <label>1ª Classe</label>
                                        </Option>
                                        <Option>
                                        <input 
                                            type="radio" 
                                            value="2" 
                                            checked={ticket.class === '2'}
                                            onClick={(event) => setTicket({...ticket, class: event.target.value})}
                                        />
                                            <label>2ª Classe</label>
                                        </Option>
                                    </Options>
                                </TransportationClass>
                                <hr/>
                                <LocalTransportOption>
                                    <Options>
                                        <Option>
                                            <input 
                                                type="checkbox"
                                                onClick={() => setTransportTypes({...transportTypes, localTransports: !transportTypes.localTransports})}
                                            />
                                            <label>Apenas Transposrtes Locais</label>
                                            {transportTypes.localTransports && <BsCheck/>}
                                        </Option>
                                        <Option>
                                            <input 
                                                type="checkbox"
                                                onClick={() => setTransportTypes({...transportTypes, fastestConnections: !transportTypes.fastestConnections})}
                                            />
                                            <label>Mostrar conexões mais rápidas</label>
                                            {transportTypes.fastestConnections && <BsCheck/>}
                                        </Option>
                                    </Options>
                                </LocalTransportOption>
                                <FastConnectionOption></FastConnectionOption>
                            </TransportationInfos>
                        </OtherInfosForm>
                        :
                        <></>
                    }

                    <OnlySeatOption>
                        <div>
                            <Icon>
                                <MdKeyboardArrowRight/>
                            </Icon>
                            <h3>Apenas assento (sem ticket)</h3>
                        </div>
                        <button>Pesquisar</button>
                    </OnlySeatOption>

                </FormInfos>
            </TravelInfos>
        </>
    );
}

const OtherInfosForm = styled.div`
    height: 385px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    select{
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: 0.625rem 1rem;
        cursor: pointer;
    }
`;

const NumberPassengers = styled.div`
    height: 48px;
    width: 45%;
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border: 0.0625rem solid #878c96;
    border-radius: 3px;
    color: #282d37;
`;

const ShowOptions = styled.div`
    height: 100%;
    width: 45px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;

    pointer-events: none;
`;

const AgeAndCardType = styled.div`
    height: 62px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    select{
        height: calc(100% - 8px);
        padding-left: 32px;
        padding-right: 0;
        border-bottom: 1px solid #878c96;
        cursor: pointer;
    }
`;

const Age = styled.div`
    height: 100%;
    width: 45%;
    box-sizing: border-box;
    padding: 0 8px;
    position: relative;
    background-color: #F0F3F5;

    border-radius: 3px;
    color: #282d37;
`;

const InfoIcon = styled.div`
    height: 100%;
    width: 32px;
    font-size: 20px;
    color: #8b8b8b;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    pointer-events: none;
`;

const CardType = styled.div`
    height: 100%;
    width: 45%;
    box-sizing: border-box;
    padding: 0 8px;
    position: relative;
    background-color: #F0F3F5;

    border-radius: 3px;
    color: #282d37;
`;

const AmazonTicketInformation = styled.div`
    height: 62px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const PercentIcon = styled.div`
    height: 100%;
    width: 25px;
    font-size: 20px;
    color: #000000;
    
    position: absolute;
    top: 0;
    left: 0;
`;

const Information = styled.div`
    height: 100%;
    width: 100%;
    padding-left: 25px;
    
    p{
        font-size: .875rem;
    }
`;

const TransportationInfos = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;

    hr{
        background-color: #afb4bb;
        border: 0;
        height: 1.5rem;
        margin: 0 2.5rem;
        visibility: hidden;
        width: 1px;
    }
`;

const TransportationClass = styled.div`
    height: 30px;

    input[type="radio"]{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid #818181;
        outline: none;
        margin-right: 5px;
        position: relative;
        top: 3px;

        &:checked::after{
            content: "";
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 5px solid #000;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

const Options = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Option = styled.ul`
    height: 100%;
`;

const LocalTransportOption = styled.div`
    height: 70px;
    width: 500px;

    input[type="checkbox"]{
        width: 16px;
        height: 16px;
        border-radius: 2px;
        border: 1px solid #818181;
        outline: none;
        margin-right: 5px;
        position: relative;
        top: 3px;

        &:checked::after{
            content: "";
            display: block;
            width: 16px;
            height: 16px;
            background-color: #000;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

const FastConnectionOption = styled.div``;

/*  */

const BlurBackground = styled.div`
    height: 100vh;
    width: 100%;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #282d37;
    opacity: .8;
`;

const TravelInfos = styled.div`
    height: ${props => props.isClicked ? '765px' : '380px'};
    width: 85%;    
    box-sizing: border-box;
    border-radius: 3px;
    padding: 24px 40px;
    margin-top: -5rem;

    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0,0,0,.3);

    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2{
        height: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media(max-width: 770px){
        width: 100%;
        border-radius: 0;
    }
`;

const FormInfos = styled.div`
    height: 85%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TravelRoute = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`;

const TravelDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
`;

const DateAndHour = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`;

const Input = styled.div`
    height: 65px;
    width: 45%;
    position: relative;
    box-sizing: border-box;
    border-bottom: .0625rem solid #878c96;
    border-radius: 0.25rem;
    background-color: #f0f3f5;


    input{
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: 32px 16px 8px 16px;
        border-style: none;
        background-color: #f0f3f5;
    }

    label{
        position: absolute;
        top: 8px;
        left: 16px;
        font-size: .75rem;
    }
`;

const Icon = styled.div`
    height: 100%;
    width: 30px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const OnlySeatOption = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div{
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: end;
    }

    button{
        height: 100%;
        width: 90px;
        border-style: none;
        border-radius: 3px;
        background-color: #6495ED;
        
        font-weight: 700;
        color: #FFFFFF;
        :hover{
            cursor: pointer;
        }
    }
`;