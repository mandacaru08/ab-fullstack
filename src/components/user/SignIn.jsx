import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';
import { HiArrowLeft } from 'react-icons/hi';

import { signIn } from '../../services/authApi';

export default function SignIn(){

    const navigate = new useNavigate();

    const [ user, setUser ] = useState({
        email: '',
        password: ''
    });

    const [ inputStatus, setInputStatus ] = useState({
        emailIsFocused: false,
        passwordIsFocused: false,
        isEmailValid: true,
        isPasswordEmpty: true
    });

    const [ isButtonDisabled, setIsButtonDisabled ] = useState(true);

    function validateEmail(email) {
        const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
        return emailRegex.test(email);
    }

    useEffect(() => {
        const { email, password } = user;

        if(email === '' || password === '') {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
        }

        if(email !== ''){
            setInputStatus({...inputStatus, isEmailValid: true});
        }

    }, [user]);

    async function handleSignIn(event){
        event.preventDefault();

        const { email, password } = user;

        if(validateEmail(email)){
            setInputStatus({...inputStatus, isEmailValid: true});
        } else {
            setInputStatus({...inputStatus, isEmailValid: false});
            window.alert('Insira o e-mail corretamente.');
            return;
        }

        if(password === ''){
            setInputStatus({...inputStatus, isPasswordValid: false});
        } else {
            setInputStatus({...inputStatus, isPasswordValid: true});
        }

        const existUser = await signIn(user);
        if(existUser) navigate('/');
    }

    return(
        <Container>
            <ToBack onClick={() => navigate('/')}>
                <div>
                    <HiArrowLeft/>
                    <p>Voltar</p>
                </div>
            </ToBack>
            <LoginForm>
            <header>AB</header>
            <FormContainer>
                <div>
                    <h2>Log In</h2>
                </div>
                <Form>
                    <form onSubmit={handleSignIn}>
                        <InputsContainer>
                            <Input 
                                isFocusedOrFilled={inputStatus.emailIsFocused || user.email !== ''}
                                isInputValid={inputStatus.isEmailValid || inputStatus.emailIsFocused }
                            >
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
                            <Input 
                                isFocusedOrFilled={inputStatus.passwordIsFocused || user.password !== ''}
                                isInputValid={inputStatus.isPasswordEmpty || inputStatus.passwordIsFocused}
                            >
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
                        <Button 
                            type='submit' 
                            disabled={isButtonDisabled}
                            isButtonDisabled={isButtonDisabled}
                        >Log In</Button>
                    </form>
                </Form>
            </FormContainer>
            <Register>
                <div>
                    <h2>Sua primeira vez aqui?</h2>
                    <button onClick={() => navigate('/sign-up')} >Registre-se agora como cliente privado gratuitamente</button>
                </div>
            </Register>
        </LoginForm>
        </Container>
        
    );
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
`;

const ToBack = styled.div`
    height: 90px;
    width: 375px;

    div{
        height: 100%;
        width: 80px;

        font-size: 20px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const LoginForm = styled.div`
    height: 632px;
    width: 375px;
    padding: 40px 15px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 8px rgba(0,0,0,.3);

    header{
        height: 100px;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        font-size: 32px;
        font-weight: 900;
    }
`;

const FormContainer = styled.div`
    height: 230px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Form = styled.div`
    height: -webkit-fill-available;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    form{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

`;

const InputsContainer = styled.div`
    height: 123px;
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

    border-bottom: ${props => props.isInputValid? '1px solid #D9D9D9' : '1px solid #ff6767c4'};
    background-color: ${props => props.isInputValid? 'transparent' : '#ff9a9ac4'};
    transition: all 0.5s;

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
    color: #FFFFFF;
    font-weight: 700;
    background-color: ${props => props.isButtonDisabled? '#9c9cf8' : '#7979ff'};
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
        width: 100%;

        border: 1px solid #878c96;
        border-radius: 3px;
        :hover{
            cursor: pointer;
            background-color: #d7dce1;
        }
    }

`;