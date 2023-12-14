import { useState } from 'react';
import styled from 'styled-components';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function CreditCardOption(showOption) {

    const [ creditCardData, setCreditCardData] = useState({
        name: '',
        number: '',
        expiry: '',
        cvc: '',
        focus: '',
    });

    function handleInputFocus(e){
        setCreditCardData({...creditCardData, focus: e.target.name});
    }

    function handleInputChange(e){
        const { name, value } = e.target;
        setCreditCardData({...creditCardData, [name]: value });
    }

    return(
        <Container>
            <PaymentForm>
                <Fieldset>
                    <section style={{width: '100%'}}>
                        <label>Nome<span>*</span></label>
                        <input 
                            type='text' 
                            name="name" 
                            onFocus={(e) => handleInputFocus(e)}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </section> 
                </Fieldset>
                <Fieldset>
                    <section style={{width: '100%'}}>
                        <label>Número do Cartão<span>*</span></label>
                        <input 
                            type='text' 
                            name="number" 
                            onFocus={(e) => handleInputFocus(e)}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </section> 
                </Fieldset>
                <Fieldset>
                    <section style={{width: '100%'}}>
                        <label>Valido até<span>*</span></label>
                        <input 
                            type="tel"
                            name="expiry"
                            placeholder="Valid Trhu"
                            onFocus={(e) => handleInputFocus(e)}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </section> 
                </Fieldset>
                <Fieldset>
                    <section style={{width: '100%'}}>
                        <label>CVC<span>*</span></label>
                        <input 
                            type='tel' 
                            name="cvc" 
                            onFocus={(e) => handleInputFocus(e)}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </section> 
                </Fieldset>
            </PaymentForm>
            <div>
                <Cards
                    name={creditCardData.name}
                    number={creditCardData.number}
                    expiry={creditCardData.expiry}
                    cvc={creditCardData.cvc}
                    focused={creditCardData.focus}
                />
            </div>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    box-sizing: border-box;
    //border-top: 1px solid #878c96;
    background-color: #FFFFFF;
    border-radius: 4px;
`;

const PaymentForm = styled.form`
    height: fit-content;
    width: 45%;
    border-radius: 4px;
`;

const Fieldset = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 10px;

    section{
        height: 62px;
        width: calc(50% - 10px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
    }

    label{
        height: 22px;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        font-size: 14px;
    }

    input, select{
        height: 100%;
        width: 100%;
        padding: 2px 0 4px 16px;
        box-sizing: border-box;
        border: 1px solid #878C96;
        border-radius: 4px;
    }

    input{
        background-color: #F0F3F5;
        border: none;
        border-bottom: 1px solid #AFB4BB;
    }

    span{
        font-size: 22px;
        font-weight: 700;
        color: #C50014;
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

    svg{
        font-size: 22px;
        pointer-events: none;
        position: absolute;
        right: 0;
    }
`;

const CardInfos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;