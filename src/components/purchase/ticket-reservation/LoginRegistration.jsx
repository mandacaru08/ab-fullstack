import styled from 'styled-components';

import CustomerData from './CustomerData';

export default function LoginRegistration(){
    return(
        <Container>
            <CustomerData/>
        </Container>
    );
}

const Container = styled.div`
    height: 590px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;