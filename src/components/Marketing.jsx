import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiCircle } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const allInfos = [
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Amazon_Theatre_in_Manaus.jpg/800px-Amazon_Theatre_in_Manaus.jpg',
        title: 'Conexões diretas para as principais cidades do Rio Amazonas',
        description: <p>Descubra as cidades mais bonitas em <strong>6 estados do Rio Amazonas</strong>, por apenas <strong>BRL</strong> <strong>149,49</strong>. Passagem grátis para crianças até 5 anos de idade.</p>
    },
    {
        image: 'https://www.lopeix.com/br/assets/images/3-days-amazonas.jpg',
        title: 'Uma tarifa fixa para viajar pelo Rio Amazonas',
        description: <p><strong>Inter Amazonas</strong>: Descubra a Amazônia pelo rio: <strong>6 estados</strong>, <strong>1 ticket</strong>, 32 cidades.</p>
    }
];

export default function Marketing(){

    const [currentSection, setCurrentSection] = useState(0);

    const carouselRef = useRef([]);

    function previousSection(event){

        event.preventDefault();

        if(currentSection === 0){
            setCurrentSection(allInfos.length-1);
        } else {
            setCurrentSection(currentSection -1);
        }
    }

    function nextSection(event){

        event.preventDefault();

        if(allInfos.length-1 === currentSection){
            setCurrentSection(0);
        } else {
            setCurrentSection(currentSection + 1);
        }
    }

    useEffect(() => {
        const element = carouselRef.current[currentSection];
        if (element) {
          const wrapper = element.parentElement.parentElement;
          const scrollLeft = element.offsetLeft - wrapper.offsetLeft;
          wrapper.scrollTo({
            left: scrollLeft,
            behavior: 'smooth',
          });
        }
      }, [currentSection]);

    return(
        <AdvertisementsContainer>
            <Advertisements>
                <Carousel ref={carouselRef}>
                    {
                        carouselRef.current?

                        allInfos.map((advertisement, index) => {
                            return(
                                <Advertisement ref={el => carouselRef.current[index] = el} key={advertisement.title}>
                                    <Poster>
                                        <Image src={advertisement.image} alt={'poster-' + advertisement.title}/>
                                    </Poster>
                                    <Information>
                                        <Title>
                                            <h1>{advertisement.title}</h1>
                                        </Title>
                                        <Description>{advertisement.description}</Description>
                                    </Information>
                                </Advertisement>
                            )
                        })
                        :
                        <></>
                    }
                </Carousel>
             </Advertisements>
            <ArrowButtons>
                <Previous onClick={(event) => previousSection(event)}>
                    <div>
                        <MdArrowBackIos/>
                    </div>
                </Previous>
                <Next onClick={(event) => nextSection(event)}>
                    <div>
                        <MdArrowForwardIos/>
                    </div>
                </Next>
            </ArrowButtons>
             <Sections>
                    <ul>
                        {
                            allInfos.map((section, index) => {
                                return(
                                    <li key={section.title}>
                                        {
                                            index == currentSection? <FaCircle/> : <FiCircle/>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
            </Sections>
        </AdvertisementsContainer>
    );
}

const AdvertisementsContainer = styled.div`
    //height: 360px;
    width: 100%;
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`;

const Advertisements = styled.div`
    //height: 300px;
    width: fit-content;

    display: flex;
    flex-direction: row;
    background-color: #FFFFFF;

    position: relative;
    overflow: hidden;
`;

const Carousel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease-in-out;
`;

const Advertisement = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-shrink: 0;

    @media(max-width: 975px){
        flex-direction: column;
    }
`;

const Poster = styled.div`
    height: auto;
    width: 50%;

    @media(max-width: 975px){
        flex-direction: column;
        width: 100%;
    }
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;

    @media(max-width: 975px){
        height: 565px;
    }    
`;

const Information = styled.div`
    height: auto;
    width: 50%;
    padding: 2.5rem 4.5rem;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: 975px){
        width: 100%;
    }

    @media(max-width: 1300px){
        padding: 2rem 3.5rem;
    }
`;

const Title = styled.div`
    height: 20%;
    width: 100%;

    flex-wrap: flex-wrap;
`;

const Description = styled.div`
    height: 40%;
    width: 100%;

    strong{
        font-weight: 700;
    }

    @media(max-width: 1300px){
        margin-top: 15px;
    }
`;

const ArrowButtons = styled.div`
    button{
        height: 100%;
    }
    div{
        height: 40px;
        width: 40px;
        
        font-size: 22px;
        
        display: flex;
        justify-content: center;
        
        align-items: center;
        background-color: #FFFFFF70;
    }
`;

const Previous = styled.button`
    position: absolute;
    top: 0;;
    left: 0;
    z-index: 1;
`;

const Next = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
`;

const Sections = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ul{
        height: 25px;
        width: 130px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    li{
        font-size: 12px;
        color: #878c96;
    }
`;
