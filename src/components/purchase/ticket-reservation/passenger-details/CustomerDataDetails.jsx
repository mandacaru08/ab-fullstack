import styled from 'styled-components';

import CustomerData from './CustomerData';
import SaveDetails from './SaveDetails';

export default function CustomerDataDetails(){
    return(
        <Container>
            <CustomerData/>
            <SaveDetails/>
        </Container>
    );
}

const Container = styled.div`
    height: 552px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;