import { useState } from 'react';

import styled from 'styled-components';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export default function CustomerData(){

    const [ customerData, setCustomerData ] = useState({
        salutation: '',
        title: '',
    });

    return(
        <Container>
            <h4>
                Você ainda não tem uma conta de cliente?
                <span>Por favor, entre com os detalhes para esta reserva</span>
            </h4>
            <FieldsetContainer>
                <Fieldset>
                    <section>
                        <label>Saudações</label>
                        <Options>
                            <select type='text' value={customerData.salutation}>
                                <option>Sr.</option>
                                <option>Sra.</option>
                            </select>
                            <MdOutlineKeyboardArrowDown/>
                        </Options>
                    </section>
                    <section>
                        <label>Título</label>
                        <Options>
                            <select type='text' value={customerData.title}>
                                <option>Dr.</option>
                                <option>Prof.</option>
                                <option>Prof. Dr.</option>
                                <option>Dr. Dr.</option>
                                <option>Prof. Dr. Dr.</option>
                            </select>
                            <MdOutlineKeyboardArrowDown/>
                        </Options>
                    </section>
                </Fieldset>
                <Fieldset>
                    <section>
                        <label>Primeiro Nome<span>*</span></label>
                        <input type='text'/>
                    </section> 
                    <section>
                        <label>Sobrenome<span>*</span></label>
                        <input type='text'/>
                    </section> 
                </Fieldset>
            </FieldsetContainer>
        </Container>
    );
}

const Container = styled.section`
    height: 282px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;

    h4{
        height: 52px;
        width: 100%;
        padding: 20px 0;
        font-size: 1em;
        font-weight: 700;
        line-height: 22px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    span{
        font-size: 14px;
        font-weight: 400;
    }
`;

const FieldsetContainer = styled.fieldset`
    height: calc(100% - 52px);
    width: 100%;
    padding-right: 110px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Fieldset = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;

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