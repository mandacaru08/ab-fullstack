import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function OptionsBar({options}){

    const [ linesNumber, serLinesNumber ] = useState(1);
    const [ optionHeight, setOptionHeight ] = useState(1);

    useEffect(() => {
        const number = Math.ceil(options.length / 3);
        serLinesNumber(number);
        const height = `calc(100% / ${number})`;
        setOptionHeight(height);
    }, [optionHeight]);
    
    return(
        <Container linesNumber={linesNumber} onMouseEnter={() => setShowMenuOptions('booking-information')}>
            {
                options.map(option => {
                    return(
                        <Option key={option.name} linesHeight={optionHeight}>
                            <MdKeyboardArrowRight/>
                            <OptionName>{option.name}</OptionName>
                        </Option>
                    )
                })
            }
        </Container>
    );
}

const Container = styled.ol`
    height: ${props => props.linesNumber? `${34 * props.linesNumber +52}px` : ''};
    width: 100%;
    column-count: 3;
    display: block;

    padding: 2rem 2rem 1rem;
    box-sizing: border-box;
    
    position: absolute;
    top: 5rem;
    left: 0;

    background-color: #F0F3F5;
`;

const Option = styled.li`
    height: ${props => props.linesHeight? props.linesHeight : 'auto'};
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    :hover{
        text-decoration: underline;
        cursor: pointer;
    }

    svg{
        color:#c6361b;
    }
`;

const OptionName = styled.p`
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: center;
    align-items: center;
`;