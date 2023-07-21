import { useState } from 'react';
import styled from 'styled-components';
import { ImInfo } from 'react-icons/im';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { 
    MdOutlineKeyboardArrowDown, 
    MdAirlineSeatReclineNormal, 
    MdGroups 
} from 'react-icons/md';

export default function NumberOfSeatsOptions(){

    const [ isSeatOptionSelected, setIsSeatOptionSelected ] = useState(false);

    function handleInputChange(){
        setIsSeatOptionSelected(!isSeatOptionSelected);
    };

    return(
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
                            <select type='text' onClick={e => e.stopPropagation()}>
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
            <SeatsPrice>
                <span>R$49.90</span>
            </SeatsPrice>
        </SeatsNumber>
    );
}

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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    label{
        font-weight: 700;
        margin-bottom: 5px;
    }

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

const SeatsPrice = styled.div`
    display: flex;
    justify-content: right;
    font-size: 16px;
    font-weight: 700;
`;