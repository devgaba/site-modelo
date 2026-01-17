import styled from "styled-components";
import voluntariosDeCostas from '../../../assets/images/background-voluntarios-de-costas.png';
import voluntariosEmAcao from '../../../assets/images/background-voluntarios-em-acao.png';

const AboutContainer = styled.section`
    width: 100%;
    height: 800px;

    & .conteudo{
        margin: 0px 200px;
    }
    & #cards{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    #voluntarios-costas{
        width: 100%;
        height: 306px;
        background-image: url(${voluntariosDeCostas});
        background-size: cover;
        background-position: center;
        text-align: end;
        display: flex;
        justify-content: end;

        & p{
            padding-right: 10px;
            border-right: 5px solid #9BD396;
        }
    }

    #voluntarios-acao{
        width: 100%;
        height: 306px;
        background-image: url(${voluntariosEmAcao});
        background-size: cover;
        background-position: center;
        text-align: start;
        display: flex;

        & p{
            padding-left: 10px;
            border-left: 5px solid #9BD396;
        }
    }

    @media (max-width: 1100px){
        .conteudo{
            margin: 0px 80px;
        }

        p{
            line-height: 25px;
            text-align: justify;
            font-size: .9rem;
        }
    }
    @media (max-width: 500px){
        .conteudo{
            margin: 0px 30px;
        }

        p{
            line-height: 20px;
            text-align: justify;
            font-size: .7rem;
            font-weight: 300;
        }
    }

`
const InformationsContainer = styled.div`
    width: 100%;
    height: 680px;
    background-color: #2E4F3D;
`
const TitleContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;

    & h1{
        color: #2D4F3D;
        font-weight: 200;
        margin: 0px;
    }
`

const TextCards = styled.p`
    font-size: 1.2rem;
    color: white;
    font-weight: 100;
    max-width: 600px;
    line-height: 30px;
    align-self: center;
    text-shadow: 1px 1px 1px #000;
`
function AboutSection (){
    return(
        <>
            <AboutContainer>
                <div className="conteudo">
                    <TitleContainer>
                        <h1>Sobre o Ingá</h1>
                    </TitleContainer>
                    
                </div>
                <InformationsContainer>
                    <div className="conteudo" id="cards">
                        <div id="voluntarios-costas">
                            <TextCards>
                                Criado em 2009, o INGÁ (Instituto Nacional De Gestão Ambiental) nasceu com a  
                                missão de contribuir para que as futuras gerações possam viver com qualidade de  
                                vida em um meio ambiente saudável e equilibrado. Atuamos promovendo a  recuperação 
                                de áreas degradadas, o monitoramento e gerenciamento de reservas,  e o diálogo com 
                                comunidades para incentivar o uso responsável dos recursos  naturais. 
                            </TextCards>
                        </div>
                        <div id="voluntarios-acao">
                            <TextCards>
                                Acreditamos que a transformação ambiental, começa com a consciência por isso,  trabalhamos 
                                para movimentar a sociedade civil em torno da sustentabilidade,  promovendo ações que unem 
                                ciência, educação, solidariedade e preservação. 
                                <br /><br />
                                Seja por meio de doações, voluntariado ou apoio institucional, todos podem fazer  parte dessa mudança. 
                                Quem pode contribuir com recursos, ajuda a semear  projetos. Quem contribui com tempo e dedicação, cultiva 
                                a esperança de um  planeta mais saudável.
                            </TextCards>
                        </div>
                    </div>
                </InformationsContainer>
            </AboutContainer>
        </>
    )
}

export default AboutSection;