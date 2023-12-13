import OptionsBar from './OptionsBar';

export default function BookingInfos({setShowMenuOptions}){

    const options = [
        {name: 'Informações de Reserva', url: ''},
        {name: 'Opções de Pagamento', url: ''},
        {name: 'Ticket Online', url: ''},
        {name: 'Aplicativo AB Navegador', url: ''},
        {name: 'Check-In Automático', url: ''},
        {name: 'Troca ou Cancelamento', url: ''},
        {name: 'Direitos do Passageiro', url: ''},
        {name: 'Quão cheio está meu barco?', url: ''},
        {name: 'Localizador de melhor preço', url: ''},
        {name: 'Resgatar Cupons', url: ''},
        {name: 'Viagens Seguras', url: ''},
    ];
    
    return(
        setShowMenuOptions && <OptionsBar options={options}/>
    );
}