import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';


import TicketContext from '../../contexts/ticket-context/TicketContext';

export default function StepsStatus(){ 

    const navigate = useNavigate();

    function redirectCurrentStep(stepName){
        const route = stepName == 'search'? '/' : `/purchase/${stepName}`;
        navigate(route);
    }

    const { steps } = useContext(TicketContext);


    return(
        <Container>
            <StepsOptions>
                {
                    steps.map(step => {
                        return(
                            <Step 
                                key={step.name} 
                                isPending={step.status == 'pending'}
                                isCurrentStep={step.status == 'in-progress'} 
                                onClick={() => redirectCurrentStep(step.stepName)}
                            >
                                <span>{step.name}</span>
                            </Step>
                        );
                    })
                }
            </StepsOptions>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin: 18px 0px 14px;
    padding: 0 24px;
    box-sizing: border-box;
`;

const StepsOptions = styled.ol`
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Step = styled.li`
    height: 100%;
    width: 118px;
    display: grid;
    place-items: center;
    border-bottom: 2px solid ${props => props.isPending?  '#AFB4BB' : '#63a615'};

    span{
        font-size: 12px;
        color: ${props => props.isCurrentStep? '#282D37' : '878c96'};
        font-weight: ${props => props.isCurrentStep? '700' : '400'};
    }

    :hover{
        cursor: pointer;
    }
`;