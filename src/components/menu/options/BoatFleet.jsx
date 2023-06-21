import OptionsBar from './OptionsBar';

export default function BoatFleet({setShowMenuOptions}){

    const options = [
        {name: 'Visão Geral: Frota de Barcos', url: ''},
        {name: 'Intermunicipal-Express', url: ''},
        {name: 'Interestadual-Express', url: ''},
        {name: 'Primeira Classe', url: ''},
        {name: 'Barcos Regionais', url: ''},
        {name: 'Viagem com Bagagem', url: ''},
        {name: 'Wi-Fi', url: ''},
        {name: 'Portal de Entretenimento', url: ''},
        {name: 'Outros', url: ''},
        
    ];
    
    return(
        setShowMenuOptions && <OptionsBar options={options}/>
    );
}