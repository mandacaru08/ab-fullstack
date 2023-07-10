import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import MeaningOfSymbols from '../MeaningOfSymbols';

export default function ClassSymbolsMeaning(){
    return(
        <MeaningOfSymbols>
            <div style={{width: '100%'}}>
                <h3>Significado dos Simbolos</h3>
            </div>
            <li>
                <h6>*</h6>
                <span>
                    O preço mostrado inclui todos os passageiros registrados 
                    e todos os cartões de desconto que podem ser aplicados à oferta, 
                    de acordo com as condições de transporte
                </span>
            </li>
            <li>
                <MdAirlineSeatReclineNormal/>
                <span>O preço indicado inclui reserva de assento</span>
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
    );
}