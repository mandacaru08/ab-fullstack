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
    height: 140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border-radius: 4px;
`;

const Total = styled.div`
    height: 24px;
    width: 100%;
    display: flex; 
    flex-direction: row;
    justify-content: right;
    align-items: center;
    font-size: 18px;

    span{
        font-weight: bold;
    };

    svg{
        font-size: 20px;
        color: #646973;
        margin: 0 25px 0 10px;
    };
`;

const Buttons = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    margin: 24px 0 30px 0;
    
    button{
        height: 44px;
        width: 100px;
        font-size: 14px;
        border-radius: 4px;
    }
    button:hover{
        cursor: pointer;
    }
`;

const Back = styled.button`
    color: #282D37;
    background: transparent no-repeat;
    border: 1px solid #70747f;

    :hover{
        background-color: #AFB4BB;
    }
`;

const Proceed = styled.button`
    color: #FFFFFF;
    font-weight: 700;
    background-color: #EC0016;

    :hover{
        background-color: #9B000E;
    }
`;

const Price = styled.div`
    display: flex;
    justify-content: right;
    font-size: 16px;
    font-weight: 700;
`;