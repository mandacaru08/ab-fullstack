import { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BiUpArrowAlt } from 'react-icons/bi';

export default function SortByAndTimeButton(){

    const [ sortBy, setSortBy ] = useState(null);

    return(
        <Container>
            <Earlier style={{width: '100px'}}>
                <span>Mais cedo</span>
                <BiUpArrowAlt style={{color: '#FF0000'}}/>
            </Earlier>
            <div style={{width: 'auto'}}>
                <select>
                    <option value='partida' onClick={event => setSortBy(event.target.value)}>Ordenar por: Partida</option>
                    <option value='duracao'>Ordenar por: Duração</option>
                    <option value='mudanca'> Ordenar por: Mudanças</option>
                    <option value='tarifa'>Ordenar por: Tarifa</option>
                </select>
                <MdOutlineKeyboardArrowDown/>
            </div>
        </Container>
    );
}

const Container = styled.div`
    height: 54px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 17px 12px;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #FFFFFF;

    div{
        height: 30px;
        position: relative;
    }
    select{
        font-size: 16px;
        font-weight: 400;
        color: #232D37;
        padding-right: 30px;
        box-sizing: border-box;
    }

    svg{
        font-size: 25px;
        pointer-events: none;
        position: absolute;
        right: 0;
        pointer-events: none;
    }
`;

const Earlier = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;