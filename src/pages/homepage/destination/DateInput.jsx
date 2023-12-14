import { useState, useEffect } from "react";
import { addDays, subDays, format } from "date-fns";
import styled from "styled-components";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

export default function DateInput(){
    const [ date, setDate ] = useState(new Date());
    const [ day, setDay ] = useState('Hoje');
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    const incrementDate = () => {
        setDate(prevDate => addDays(prevDate, 1));
    }

    const decrementDate = () => {
        
        const selectedDate = date.getTime();
        const presentDate = Date.now();
        const isInvalidDate = selectedDate < presentDate;
        
        if(isInvalidDate){
            return window.alert('Data invalida. Você deve selecionar uma data a partir de hoje.');
        } else {
            setDate(prevDate => subDays(prevDate, 1));
        }
    }

    useEffect(() => {
        const dayOfWeek = date.getDay();
        setDay(daysOfWeek[dayOfWeek]);
    }, [date]);

    return(
        <Input>
            <PreviousDay onClick={decrementDate}>
                <MdArrowBackIos/>
            </PreviousDay>
            <span>{day}, {format(date, 'dd, MM, yyyy')}</span>
            <NextDay onClick={incrementDate}>
                <MdArrowForwardIos/>
            </NextDay>
        </Input>
    );
}

const Input = styled.div`
    height: 48px;
    width: 480px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    border: 0.0625rem solid #878c96;
    border-radius: 3px;
    color: #282d37;
    box-sizing: border-box;

    div{
        cursor: pointer;
    }
`;

const NextDay = styled.div`
    height: 100%;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PreviousDay = styled.div`
    height: 100%;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
`;