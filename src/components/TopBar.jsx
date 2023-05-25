import styled from 'styled-components';
import { IoMdSearch, IoMdPerson } from 'react-icons/io';


export default function TopBar(){
    return(
      <Header>
        <Menu>
          <Options>
            <Option>Ofertas</Option>
            <Option>Informações de reservas</Option>
            <Option>Frota de Barcos</Option>
          </Options>
          <SearchAndLogin>
            <IoMdSearch/>
            <ul>
              <IoMdPerson />
              <li>Login</li>
            </ul>
          </SearchAndLogin>
        </Menu>
        <Banner>
          <img src='https://wallpapers.com/images/hd/aerial-view-of-amazonas-river-qoa6265cuypo4fd2.jpg' alt='banner'/>
        </Banner>
      </Header>
    );
}

const Header = styled.div`
  width: 100%;
  z-index: 1;
  padding:0 15%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 1200px){
    width: 100%;
    padding:0 5%;
  }

  @media(max-width: 1080px){
    width: 100%;
    padding:0 0;
  }
`;

const Menu = styled.header`
  height: 5rem;
  width: 90%;
  padding: 0 20px;
  z-index: 0;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0,0,0,.3);

  color: #252d37;
  font-size: 16px;
  font-weight: 700;

  ul{
    height: 100%;
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  ul:before{
      background: #d7dce1;
      content: "";
      display: block;
      height: 2rem;
      width: 0.0625rem;
  }

  svg{
    font-size: 25px;
  }

  @media(max-width: 770px){
    height: 70px;
    width: 100%;
  }
`;

const Options = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  div:hover{
    cursor: pointer;
    margin-top: 3px;
    border-bottom: 3px solid #000000;
  }
`;

const Option = styled.div`
  height: 30px;
  width: fit-content;
  margin: 0 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SearchAndLogin = styled.div`
  height: 100%;
  width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Banner = styled.div`
  height: 440px;
  width: 100%;

  margin-top: -5rem;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media(max-width: 770px){
    height: 330px;
    margin-top: 0;
  }
`;