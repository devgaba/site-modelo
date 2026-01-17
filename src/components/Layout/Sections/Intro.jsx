import styled from "styled-components";
import backgroundIntro from '../../../assets/images/background-intro.jpg';
import '../../Layout/Layout.css'

const IntroContainer = styled.section`
    width: 100%;
    margin-top: 120px;
    height: 611px;
    background-image: url(${backgroundIntro});
    display: flex; 
    flex-direction: column;
    align-items: start;
    justify-content: center;

    & #conteudo{
        height: 350px;
        margin: 0px 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media (max-width: 1100px){
        #conteudo{
            margin: 0px 80px;
        }
    }
    @media (max-width: 500px){
        #conteudo{
            margin: 0px 30px;
        }
    }
`;

const TituloContainer = styled.h1`
    font-size: 2.3rem;
    color: #2D4F3D;
    font-family: 'Nunito';
    width: 550px;
    margin: 0px;

    @media (max-width: 1100px){
        max-width: 420px;
        font-size: 1.8rem;
        width: 100%;
    }
    @media (max-width: 500px){
        max-width: 300px;
        font-size: 1.3rem;
        width: 100%;
    }
`

const DescricaoContainer = styled.p`
    font-size: 1.1rem;
    font-weight: 300;
    color: #2D4F3D;
    font-family: 'Nunito';
    width: 550px;
    line-height: 28px;
    text-align: justify;
    border-left: 3px solid #2D4F3D;
    padding-left: 10px;
    margin: 0px;

    @media (max-width: 1100px){
        max-width: 486px;
        font-size: 0.9rem;
        width: 100%;

    }
    @media (max-width: 500px){
        max-width: 350px;
        font-size: 0.7rem;
        width: 100%;
    }
`
const BotoesContainer = styled.div`
    width: 240px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1100px){
        width: 200px;
    }
    @media (max-width: 500px){
        
    }
`;

const BotaoStyled = styled.button`
    padding: 10px 7px;
    font-size: 0.7rem;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    border-radius: 4px;
    border: 1px solid #2E4F3D;
    background-color: transparent;
    color: #2E4F3D;
    width: 110px;
    height: 40px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #2E4F3D;
        color: white;
    }

    @media (max-width: 1100px){
        font-size: 0.5rem;
        width: 90px;
    }
    @media (max-width: 500px){
        
    }
`;

const BotaoIntro = ({ texto, onClick }) => (
    <BotaoStyled onClick={onClick}>
        {texto}
    </BotaoStyled>
);

function Intro(){
    return(
        <div>
            <IntroContainer>
                <div id="conteudo">
                    <TituloContainer>
                        Por um futuro com mais natureza e mais consciência
                    </TituloContainer>
                    <DescricaoContainer>
                        Somos um instituto ambiental dedicado à preservação 
                        da natureza e à construção de um futuro mais sustentável. 
                        Junte-se a nós nessa jornada por um mundo mais verde e consciente.
                    </DescricaoContainer>
                    <BotoesContainer>
                        <BotaoIntro texto={'DOE AGORA'}/>
                        <BotaoIntro texto={'FALE CONOSCO'}/>
                    </BotoesContainer>
                </div>
            </IntroContainer>
        </div>
        
    );
}

export default Intro;