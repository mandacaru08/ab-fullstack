import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Bar from '../Bar';
import StepsStatus from '../StepsStatus';
import CustomerGreetings from '../passenger-details/CustomerGreetings';
import PaymentOptions from './PaymentOptions';
import TotalPrice from '../TotalPrice';

export default function Payment(){
    return(
        <Container>
            <Bar/>
            <StepsStatus/>
            <PaymentForm>
                <h3>Por favor, preencha com seus dados pessoais.</h3>
                <AddressForm>
                    <TitleForm>
                        <h4>Seu Endereço</h4>
                    </TitleForm>
                    <Form>
                        <CustomerGreetings/>
                        <Fieldset>
                            <section style={{width: '100%'}}>
                                <label>E-mail<span>*</span></label>
                                <input type='text'/>
                            </section> 
                        </Fieldset>
                        <Fieldset>
                            <section style={{width: 'calc(50% - 10px)'}}>
                                <label>Rua / Número<span>*</span></label>
                                <input type='text'/>
                            </section> 
                            <section style={{width: 'calc(30% - 14px)'}}>
                                <label>CEP<span>*</span></label>
                                <input type='text'/>
                            </section> 
                            <section style={{width: 'calc(20% - 14px)'}}>
                                <label>Cidade<span>*</span></label>
                                <input type='text'/>
                            </section> 
                        </Fieldset>
                        <Fieldset>
                            <section>
                                <label>País</label>
                                <Options>
                                    <select type='text'>
                                        <option>Dr.</option>
                                        <option>Prof.</option>
                                        <option>Prof. Dr.</option>
                                        <option>Dr. Dr.</option>
                                        <option>Prof. Dr. Dr.</option>
                                    </select>
                                    <MdOutlineKeyboardArrowDown/>
                                </Options>
                            </section>
                            <section>
                                <label>Estado<span>*</span></label>
                                <input type='text'/>
                            </section>


                        </Fieldset>
                        <Fieldset>
                            <section style={{width: '100%'}}>
                                <label>Complemento</label>
                                <input type='text' style={{width: 'calc(20% - 10px)'}}/>
                            </section> 
                        </Fieldset>
                        <Fieldset>
                            <section>
                                <label>Celular</label>
                                <input type='text' style={{width: 'calc(30% - 10px)'}}/>
                            </section> 
                        </Fieldset>
                    </Form>
                </AddressForm>
            </PaymentForm>
            <PaymentOptions/>
            <TotalPrice/>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const PaymentForm = styled.section`
    height: auto;
    width: 100%;
    padding: 20px 0;
    box-sizing: border-box;
    
    h3{
        font-size: 16px;
        margin: 25px 0 16px 0;
    }
`;

const AddressForm = styled.div`
    background-color: #FFFFFF;
`;

const TitleForm = styled.div`
    height: 48px;
    padding: 25px 0 0 80px;
    box-sizing: border-box;

    h4{
        font-size: 16px;
        font-weight: 700;
    }
`;

const Form = styled.fieldset`
    width: 100%;
    padding: 30px 80px 20px 80px;
    box-sizing: border-box;
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