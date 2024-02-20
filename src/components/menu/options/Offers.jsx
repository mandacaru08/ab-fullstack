import OptionsBar from './OptionsBar';

export default function Offers({setShowMenuOptions}){

    const options = [
        {name: 'Visão Geral: Ofertas', url: ''},
        {name: 'Tarifa Flexível', url: ''},
        {name: 'Fan-Ticket', url: ''},
        {name: 'Tarifa Super Econômica', url: ''},
        {name: 'Tarifa Econômica', url: ''},
        {name: '(Super) Tarifa Econômica Joven', url: ''},
        {name: 'Tarifa Econômica Amazonas', url: ''},
        {name: 'Grupo de Viagem na Amazônia', url: ''},
        {name: 'Grupo de Viagem no Amazonas', url: ''},
        {name: 'Barco Noturno', url: ''},
        {name: 'Ofertas Regionais', url: ''},
        {name: 'Passes de Viagens', url: ''},
        {name: 'Cartão Amazon Boat', url: ''},
        {name: 'Reserva de Assento', url: ''},
        {name: 'Viajando com Crianças', url: ''},
    ];
    
    return(
        setShowMenuOptions && <OptionsBar options={options}/>
    );
}