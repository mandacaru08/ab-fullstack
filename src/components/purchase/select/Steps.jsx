import styled from 'styled-components';

export default function Steps(){
    const steps = [
        {name: 'Pesquisar', concluded: false},
        {name: 'Selecionar', concluded: false},
        {name: 'Ticker e Reserva', concluded: false},
        {name: 'Pagamento', concluded: false},
        {name: 'Verificar e Reservar', concluded: false},
        {name: 'Confirmação', concluded: false},
    ];
    return(
        <Container>
            <StepsOptions>
                {
                    steps.map(step => {
                        return(
                            <Step key={step.name} isConcluded={step.concluded}>
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
    width: 980px;
    margin-bottom: 10px;
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
    width: 148px;
    display: grid;
    place-items: center;
    border-bottom: 2px solid ${props => props.isConcluded? '#63a615' : '#AFB4BB'};

    span{
        font-weight: ${props => props.isConcluded? '700' : '400'};
    }
`;