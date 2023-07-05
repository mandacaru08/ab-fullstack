import styled from "styled-components";
import { MdGroups } from 'react-icons/md';
import { CgDanger } from 'react-icons/cg';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';

export default function SymbolLegendNote(){

    return(
        <Container>
            <MeaningOfSymbols>
                <div style={{width: '100%'}}>
                    <h3>Significado dos Simbolos</h3>
                </div>
                <li>
                    <MdGroups style={{color: '#D77B00'}}/>
                    <span>{info.legend}</span>
                </li>
                <li>
                    <CgDanger/>
                    <span>
                        Informações importantes sobre esta conexão estão atualmente 
                        disponíveis (por exemplo, a conexão está ameaçada, viagem 
                        cancelada). Por favor, observe as informações nos detalhes.
                    </span>
                </li>
                <li>
                    <RiMoneyDollarBoxFill/>
                    <span>Mostrar nossos melhores preços ¹</span>
                </li>
                <li>
                    <h6>¹</h6>
                    <span>
                        Mostra os melhores preços encontrados aqui para a conexão 
                        selecionada no dia selecionado. Em alguns casos (tarifas de 
                        certas associações de transporte, etc.), nosso sistema pode 
                        conter uma conexão que vendemos, mas não é possível exibir o 
                        preço aqui. O preço é mostrado na próxima etapa e pode ser menor.
                    </span>
                </li>
            </MeaningOfSymbols>
            <PleaseNote>
                <div style={{width: '100%'}}>
                    <h3>Atenção</h3>
                </div>
                <ul>
                    <li>
                        <span>Todas as informações são emitidas sem responsabilidade</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>
                            Devido à falta de dados em tempo real de algumas transportadoras 
                            de terceiros, os detalhes da conexão podem não ser totalmente precisos.
                        </span>
                    </li>
                </ul>
            </PleaseNote>
        </Container>
    );
}

const Container = styled.div`
    height: 320px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    background-color: #FFFFFF;

    div{
        margin-bottom: 16px;
    }
    h3{
        font-size: 21px;
    }
    span{
        font-size: 14px;
        flex-wrap: wrap;
    }
`;

const MeaningOfSymbols = styled.ul`
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    li{
        height: fit-content;
        width: 100%;
        padding: 0 0 10px 60px;
        box-sizing: border-box;
        position: relative;
    }
    svg, h6{
        font-size: 20px;
        margin-left: 16px;
        position: absolute;
        left: 0;
        top: 0;
    }
`;

const PleaseNote = styled.div`
    height: 100%;
    width: 35%;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    ul{
        margin-bottom: 16px;
    }
`;