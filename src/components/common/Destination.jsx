import styled from 'styled-components';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { TbArrowsLeftRight } from 'react-icons/tb';
import { MdKeyboardArrowRight } from 'react-icons/md';
 
export default function Destination(){
    return(
        <TravelInfos>
            <h2>Para onde você quer ir?</h2>
            <FormInfos>

                <TravelRoute>
                    <Input>
                        <label>Saída</label>
                        <input type='text' placeholder='estação / parada / endereço '/>
                    </Input>
                    <Icon>
                        <TbArrowsLeftRight/>
                    </Icon>
                    <Input>
                        <label>Destino</label>
                        <input type='text' placeholder='estação / parada / endereço '/>
                    </Input>
                </TravelRoute>

                <TravelDate>
                    <h4>Viagem de ida</h4>
                    <DateAndHour>
                        <Input>
                            <label>Saída</label>
                            <input type='text' placeholder='estação / parada / endereço '/>
                        </Input>
                        <Icon>
                            <FaRegCalendarAlt/>
                        </Icon>
                        <Input>
                            <label>Destino</label>
                            <input type='text' placeholder='estação / parada / endereço '/>
                        </Input>
                    </DateAndHour>
                </TravelDate>

                <Options>
                    <div>
                        <Icon>
                            <MdKeyboardArrowRight/>
                        </Icon>
                        <h3>Apenas assento (sem ticket)</h3>
                    </div>
                    <button>Pesquisar</button>
                </Options>

            </FormInfos>
        </TravelInfos>
    );
}

const TravelInfos = styled.div`
    height: 380px;
    width: 85%;    
    box-sizing: border-box;
    border-radius: 3px;
    padding: 24px 40px;
    margin-top: -5rem;

    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0,0,0,.3);

    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2{
        height: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media(max-width: 770px){
        width: 100%;
        border-radius: 0;
    }
`;

const FormInfos = styled.div`
    height: 85%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TravelRoute = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`;

const TravelDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
`;

const DateAndHour = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`;

const Input = styled.div`
    height: 65px;
    width: 45%;
    position: relative;
    box-sizing: border-box;
    border-bottom: .0625rem solid #878c96;
    border-radius: 0.25rem;
    background-color: #f0f3f5;


    input{
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: 32px 16px 8px 16px;
        border-style: none;
        background-color: #f0f3f5;
    }

    label{
        position: absolute;
        top: 8px;
        left: 16px;
        font-size: .75rem;
    }
`;

const Icon = styled.div`
    height: 100%;
    width: 30px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Options = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div{
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: end;
    }

    button{
        height: 100%;
        width: 90px;
        border-style: none;
        border-radius: 3px;
        background-color: #6495ED;
        color: #FFFFFF;
        :hover{
            cursor: pointer;
        }
    }
`;