import styled from "styled-components";
import imagemTeste from '../../../assets/images/background-doacao.png'

const HelpContainer = styled.section`
    width: 100%;
    height: 500px;


    .conteudo{
        margin: 0px 200px;
    }

    @media (max-width: 1100px){
        .conteudo{
            margin: 0px 80px;
        }
    }
    @media (max-width: 500px){
        margin-top: 50px;

        .conteudo{
            margin: 0px 30px;
        }

    }
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
const CardsContainer = styled.div`
    width: 100%;
    height: 380px;
    

    #cards{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (min-width: 501px) and (max-width: 1100px){
        width: 100%;
        
        #cards{
            display: flex;
            flex-direction: column;
            justify-content: space-between;  
            gap: 20px;
         }
    }
    @media (max-width: 500px){
        #cards{
            flex-direction: column;
            gap: 20px;
        }
    }
    
`


const StyleCard = styled.div`
    background-image: url(${(props) => props.urlImagem});
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 1px 3px #000;
    
    width: 48%;
    height: 227px;
    background-color: #fff;
    border-radius: 12px;

    #texto{
        & h1{
            
            font-weight: 100;
            border-left: 8px solid #2D4F3D;
            padding-left: 10px;

        }

        & p{
            max-width: 250px;
            font-size: 1.2rem;
            font-weight: 100;
            margin:25px 18px;
            
        }
    }

    #linkEBotao{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0px 18px;

        a{
            font-size: .8rem;
            color: #fff;
            font-weight: 100;
            text-decoration: none;
            align-self: center;

        }
        a:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }


    @media (min-width: 501px) and (max-width: 1100px){
        width: 100%;
        height: 150px;
        
        #texto{
            
            width: 100%;
            h1{
                font-size: 1.3rem;
                height: max-content;
                width: 50%;
                padding-right: 10px;
            }
            p{
                font-size: .8rem;
                text-align: justify;
                margin: 10px 18px;
                
            }
        }

        #linkEBotao{
            a{
                
            }
        }
        
    }
    @media (max-width: 500px){
        width: 100%;
        height: 150px;
        
        #texto{
            
            width: 100%;
            h1{
                font-size: 1.3rem;
                height: max-content;
                width: 50%;
                padding-right: 10px;
            }
            p{
                font-size: .6rem;
                text-align: justify;
                margin: 20px 18px;
                
            }
        }

        #linkEBotao{
            a{
                display: none;
            }
        }
    }

`

const BotaoStyled = styled.button`
    padding: 10px 7px;
    font-size: 0.7rem;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    border-radius: 4px;
    border: 1px solid #ffffffff;
    background-color: transparent;
    color: #ffffffff;
    width: 110px;
    height: 40px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #ffffffff;
        color: #000;
    }

    @media (max-width: 1100px){
        font-size: 0.5rem;
        width: 90px;
    }
    @media (max-width: 500px){
        width: 100px;
        height: 30px
    }
`;


const CardHelp = ({titulo, descricao, urlImagem, link, textoBotao})=>{
    return(
        <>
            <StyleCard urlImagem={urlImagem}>
                <div id="texto">
                    <h1>{titulo}</h1>
                    <p>{descricao}</p>
                </div>
                <div id="linkEBotao">
                    <a href={link}>{'Clique aqui para saber mais...'}</a>
                    <BotaoHelp texto={textoBotao}/>
                </div>
                
            </StyleCard>
        </>
    );
};

const BotaoHelp = ({ texto, onClick }) => (
    <BotaoStyled onClick={onClick}>
        {texto}
    </BotaoStyled>
);

function Help(){
    
    return(
        <>
            <HelpContainer>
                <div className="conteudo">
                    <TitleContainer>
                        <h1>Como Apoiar</h1>
                    </TitleContainer>
                </div>
                <CardsContainer>
                    <div className="conteudo" id="cards">
                        <CardHelp 
                        titulo={'Doações'} 
                        descricao={'Contribua financeiramente para projetos de preservação'}
                        link={'youtube.com'}  
                        urlImagem={imagemTeste} textoBotao={'DOE AGORA'}/>

                        <CardHelp 
                        titulo={'Voluntariado'} 
                        descricao={'Doe seu tempo e participe das ações do instituto'} 
                        urlImagem={imagemTeste}
                        link={'youtube.com'} 
                        textoBotao={'FALE CONOSCO'}/>
                    </div>
                </CardsContainer>
            </HelpContainer>
        </>
    )
}


export default Help;