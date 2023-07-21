import styled from 'styled-components';
import { ImInfo } from 'react-icons/im';

export default function TotalPrice(){
    return(
        <Container>
            <Total>
                <span>Total</span>
                <ImInfo/>
                <Price>R$150</Price>
            </Total>
            <Buttons>
                <Back>Voltar</Back>
                <Proceed>Continuar</Proceed>
            </Buttons>
        </Container>
    );
}

const Container = styled.section`

`;

const Total = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: row;
    justify-content: right;
    align-items: center;
    background-color: #FFFFFF

    svg{
        margin: 0 25px 0 5px;
    }
`;

const Buttons = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    
    button{
        height: 44px;
        width: 100px;
        font-size: 14px;
        border-radius: 4px;
    }
`;

const Back = styled.button`
    color: #282D37;
    background: transparent no-repeat;
    border: 1px solid #70747f;
`;

const Proceed = styled.button`
    color: #FFFFFF;
    font-weight: 700;
    background-color: #EC0016;
`;

const Price = styled.div`
    display: flex;
    justify-content: right;
    font-size: 16px;
    font-weight: 700;
`;