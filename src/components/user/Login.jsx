import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';

import { signIn } from '../../services/authApi';

export default function Login(){

    const navigate = new useNavigate();

    const [ user, setUser ] = useState({
        email: '',
        password: ''
    });

    const [ inputStatus, setInputStatus ] = useState({
        emailIsFocused: false,
        passwordIsFocused: false
    });

    async function login(){
        await signIn(user);
        navigate('/');
    }

    return(
        <Container>
            <header>AB</header>
            <FormContainer>
                <div>
                    <h2>Log In</h2>
                </div>
                <Form>
                    <form onSubmit={login}>
                        <InputsContainer>
                            <Input isFocusedOrFilled={inputStatus.emailIsFocused || user.email !== ''}>
                                <input 
                                    type='text' 
                                    value={user.email} 
                                    onFocus={() => setInputStatus({...inputStatus, emailIsFocused: true})}
                                    onBlur={() => setInputStatus({...inputStatus, emailIsFocused: false})}
                                    onChange={(e) => setUser({...user, email: e.target.value})}
                                />
                                <label>e-mail *</label>
                                <Icon onClick={() => setUser({...user, email: ''})}>
                                    <IoIosCloseCircle/>
                                </Icon>
                            </Input>
                            <Input isFocusedOrFilled={inputStatus.passwordIsFocused || user.password !== ''}>
                                <input 
                                    type='password' 
                                    value={user.password} 
                                    onFocus={() => setInputStatus({...inputStatus, passwordIsFocused: true})}
                                    onBlur={() => setInputStatus({...inputStatus, passwordIsFocused: false})}
                                    onChange={(e) => setUser({...user, password: e.target.value})}
                                />
                                <label>password *</label>
                                <Icon onClick={() => setUser({...user, password: ''})}>
                                    <IoIosCloseCircle/>
                                </Icon>
                            </Input>
                        </InputsContainer>
                        <Button type='submit'>Log In</Button>
                    </form>
                </Form>
            </FormContainer>
            <Register>
                <div>
                    <h2>Sua primeira vez aqui?</h2>
                    <button onClick={() => navigate('/sign-up')} >Registre-se agora como cliente privado gratuitamente</button>
                </div>
            </Register>
        </Container>
    );
}

const Container = styled.div`
    height: 70vh;
    width: 375px;
    padding: 40px 15px;
    box-sizing: border-box;
    margin: 10% 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 8px rgba(0,0,0,.3);

    header{
        height: 20%;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        font-size: 32px;
        font-weight: 900;
    }
`;

const FormContainer = styled.div`
    height:60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Form = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    form{
        height: 100%;
        width: 100%;
    }

`;

const InputsContainer = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Input = styled.div`
    height: 56px;
    width: 100%;

    display: flex;
    flex-direction: row;
    position: relative;

    border-bottom: 1px solid #D9D9D9;

    label{
        position: absolute;
        left: 5px;
        z-index: 0;
        top: ${props => props.isFocusedOrFilled? 0 : '50%'};
        font-size: ${props => props.isFocusedOrFilled? '12px' : '16px'};
        transition: all 0.5s;
    }

    input{
        height: auto;
        width: 90%;
        border-style: none;
        z-index: 1;
        background-color: transparent;
    }
`;

const Icon = styled.div`
    height: 100%;
    width: 10%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    color: #646973;
`;

const Button = styled.button`
    height: 56px;
    width: 100%;
    margin-top: 30px;

    border-style: none;
    border-radius: 5px;
    background-color: lightblue;
`;

const Register = styled.div`
    height: 150px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #F0F3F5;

    div{
        height: 90%;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    button{
        height: 80px;

        border: 1px solid #878c96;
        border-radius: 3px;
        :hover{
            cursor: pointer;
            background-color: #d7dce1;
        }
    }

`;