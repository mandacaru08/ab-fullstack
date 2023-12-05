import styled from 'styled-components';

function CitiesOptionsFiltered({ cities, showOptions }) {
  return (
    <CitiesOptions visibility={showOptions}>
      {cities.map((city) => {
        return (
            <CityOption 
                key={city.id} 
                value={city.id}
            >
                {city.name} - {city.state}
            </CityOption>
        );
      })}
    </CitiesOptions>
  );
}

const CitiesOptions = styled.ol`
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    border: 1px solid #c1c1c1;
    border-radius: 0 0 5px 5px;
    background-color: #FFFFFF;
    opacity: ${props => props.visibility ? 1 : 0};
    transform: translateY(${props => props.visibility ? 0 : 'calc(-100px + 100px)'});
    transition: all 0.5s linear;
    pointer-events: ${props => props.visibility ? 'auto' : 'none'};
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
`;

const CityOption = styled.li`
    height: 24px;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    border-bottom: 1px solid #c1c1c1;
`;

export default CitiesOptionsFiltered;