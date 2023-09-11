import { useState } from 'react';
import styled from 'styled-components';
import { BsFillExclamationCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';
import { MdKeyboardArrowRight, MdAirlineSeatReclineNormal } from 'react-icons/md';

const ticketClasses = [
    {   
        id: '1',
        name: 'Super Econômica',
        seatIncluded: false,
        price: '112,90',
        benefits: [
            {
                included: false,
                description: 'Sem cancelamento'
            },
            {
                included: false,
                description: 'Sem ticket local'
            },
            {
                included: false,
                description: 'Barco específico'
            },            
        ],
        
    },
    {
        id: '2',
        name: 'Econômica',
        seatIncluded: false,
        price: '123,90',
        benefits: [
            {
                included: true,
                description: 'Cancelamento antes do primeiro dia de validade sujeito a taxa em troca de um voucher'
            },
            {
                included: false,
                description: 'Ticket local incluso'
            }
        ],
        
    },
    {
        id: '3',
        name: 'Flexível',
        seatIncluded: false,
        price: '132,70',
        benefits: [
            {
                included: true,
                description: 'Cancelamento gratuito antes do primeiro dia de validade'
            },
            {
                included: true,
                description: 'Ticket local incluso'
            },
            {
                included: true,
                description: 'Escolha livre do trem no dia da viagem'
            }
        ],
    },
    {
        id: '4',
        name: 'Flexível Plus',
        seatIncluded: true,
        price: '153,50',
        benefits: [
            {
                included: true,
                description: 'Assento incluso'
            },
            {
                included: true,
                description: 'Cancelamento gratuito até o fim da validade'
            },
            {
                included: true,
                description: 'Ticket local incluso'
            },
            {
                included: true,
                description: 'Válido 1 dias antes e 2 dias depois da viagem'
            },
            {
                included: true,
                description: 'Escolha livre de trens'
            }
        ],
    },
];

export default function TicketClassesOptions() {

    const [ selectedClass, setSelectedClass ] = useState(
        {class: '',}
    );

    return(
        <Container>
            <TicketClasses>
                {
                    ticketClasses.map(ticketClass => {
                        return(
                            <>
                                <Class 
                                    key={ticketClass.name} 
                                    isSelected={selectedClass.class === ticketClass.id}
                                >
                                    <BenefitsAndConditions>
                                        <Benefits>
                                            <h2>{ticketClass.name}</h2>
                                            {
                                                ticketClass.benefits.map(benefit => {
                                                    return(
                                                        <Benefit 
                                                            key={benefit.description}
                                                            isIncluded={benefit.included}
                                                        >
                                                            {benefit.included? <BsFillCheckCircleFill/> : <BsFillExclamationCircleFill/>}
                                                            <span>{benefit.description}</span>
                                                        </Benefit>
                                                    )
                                                })
                                            }
                                        </Benefits>
                                        <Conditions>
                                            <MdKeyboardArrowRight/>
                                            <span>Condições</span>
                                        </Conditions>
                                    </BenefitsAndConditions>
                                    <DashedPart isSelected={selectedClass.class === ticketClass.id}>
                                        <div style={{left: '0'}}></div>
                                        <div style={{right: '0'}}></div>
                                    </DashedPart>
                                    <Price 
                                        checked={selectedClass.class === ticketClass.id}
                                        onClick={() => setSelectedClass({...selectedClass, class: ticketClass.id})}
                                    >
                                        <input type="radio"/>
                                        {ticketClass.seatIncluded && <MdAirlineSeatReclineNormal/>}
                                        <span>R$ {ticketClass.price}</span>
                                    </Price>
                                </Class>
                            </>
                        )
                    })
                }
            </TicketClasses>
        </Container>
    );
}

const Container = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 32px 24px;
    box-sizing: border-box;
`;

const TicketClasses = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Class = styled.div`
    height: 430px;
    width: 225px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 ${props => props.isSelected? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'};
`;

const BenefitsAndConditions = styled.div`
    height: 85%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 20px 14px 20px;
    box-sizing: border-box;
    border-bottom: 1px dashed #D7DCE1;
`;

const Benefits = styled.ul`
    height: fit-content;
    width: 100%;

    h2{
        margin-bottom: 8px;
    }
`;

const Benefit = styled.li`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;

    span{
        width: 100%;
        font-size: 15px;
        font-weight: 300;
        color: #646973;
        margin-bottom: 8px;
        padding-left: 25px;
        box-sizing: border-box;
        flex-wrap: wrap;
    }

    svg{
        position: absolute;
        top: -2px;
        font-size: 17px;
        color: ${props => props.isIncluded? '#63a615' : '#646973'};
    }
`;

const Conditions = styled.div`
    height: 54px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    svg{
        font-size: 25px;
    }
    :hover{
        cursor: pointer;
    }

    span{
        :hover{
            text-decoration: underline;
            color: #FF0000;
        }
    }

`;

const DashedPart = styled.div`
    width: 100%;
    height: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 14%;

    div{
        width: 5px;
        height: 10px;
        padding: 0;
        background-color: #f2f2f2;
        position: absolute;
        z-index: 10;
    }
    div:nth-child(1){
        box-shadow: inset -2px 2px 2px 0 ${props => props.isSelected? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'};
        border-radius: 0 5px 5px 0;
        border-left: 0;
        left: -2px;
    }
    div:nth-child(2){
        box-shadow: inset 2px 2px 2px 0 ${props => props.isSelected? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'};;
        border-radius: 5px 0 0 5px;
        border-right: 0;
        right: -2px;
    }
`;

const Price = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color: #282D37;
    padding: 26px 20px 14px 20px;
    box-sizing: border-box;
    position: relative;

    input{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 5px;
        position: absolute;
        left: 0;
        top: 40%;
        transform: translate(-50% -50%);
        border: ${props => props.checked? '5px solid #282D37' : '1px solid #282D37'};
        outline: none;
        pointer-events: none;
    }

    svg{
        font-size: 22px;
        margin-right: 10px;
        color: #95989c;
    }
`;