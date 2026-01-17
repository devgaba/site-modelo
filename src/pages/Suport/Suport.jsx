import styled from "styled-components";
import BackgroundIntro from '../../assets/images/background-cachoeira.png';
import BackgroundBoxSection from '../../assets/images/background-maos-com-coracao.png';
import IconeFolha from '../../assets/images/folha.png';
import '../../pages/Suport/Suport.css';
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

const BoxDonationStyled = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    border-radius: 12px;
    background-image: url(${BackgroundBoxSection});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1100px){
        
    }
    @media (max-width: 500px){
        
    }
`

const BoxVolunteeringStyled = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: 12px;
    background-image: url(${BackgroundBoxSection});
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1380px){
        display: flex;
        width: 100%; 
    }
    @media (max-width: 500px){
        display: flex;        
    }
`

const SectionDonation = styled.section`
    width: 100%;
    padding: 50px 0px;
    background-color: #DAD7CD;
    display: flex;
    
    flex-direction: column;

    .espaco-botao{
        display: flex;
        align-items: end;
        justify-content: end;
    }

    @media (max-width: 1100px){
        
    }
    @media (max-width: 500px){
           padding: 20px 0px;
    }
`

const SectionVolunteering = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px 0px;
    justify-content: center;
    align-items: center;

    .espaco-botao{
        display: flex;
        align-items: end;
        justify-content: end;
        flex-direction: column;
    }

    @media (max-width: 500px){
        padding: 20px 0px;
    }
`

const Botao = ({ texto, onClick }) => {
    const BotaoStyled = styled.button`
    padding: 10px 7px;
    font-size: 0.9rem;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    border-radius: 4px;
    border: 1px solid #ffffffff;
    background-color: transparent;
    color: #ffffffff;
    width: 150px;
    height: 50px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #ffffffff;
        color: #000;
    }

    @media (max-width: 1100px){
        font-size: 0.8rem;
        width: 120px;
    }
    @media (max-width: 728px){
        width: 130px;
        height: 30px;
        padding: 5px 3px;
        font-size: 0.6rem;
        
    }
`;
    return(
        <BotaoStyled onClick={onClick}>
            {texto}
        </BotaoStyled>
    )
    
};

const TituloTopico = ({icone, titulo}) => {
    const Titulo = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    gap: 10px;
    align-items: center;

    img{
        width: 21px;
        height: 21px;
    }

    h3{
        font-size: 1.6rem;
        margin: 0px;
    }

        
    @media (max-width: 1100px){
            h3{
                font-size: 1.2rem;
            }
        }
    @media (max-width: 728px){
        width: 100%;
        align-items: start;
        height: 20px;
        img{
            display: none;
        }
        h3{
            font-size: 0.7rem;
        }
        
        
    }

`
    return(
        <>
            <Titulo>
                <img src={icone} alt="icone-folha"/>
                <h3>{titulo}</h3>
            </Titulo>
        </>
    )

}
const Topico = ({titulo, texto}) => {
    const TopicoStyled = styled. div`
        width: 100%;
    
    `
    const TextoStyled = styled.p`
        font-size: 1.2rem;
        font-weight: 200;
        text-align: justify;
        margin: 0px;
        padding-left: 31px;
        line-height: 30px;

        @media (max-width: 1100px){
            font-size: 1rem;
            line-height: 20px;
        }
        @media (max-width: 728px){
            text-align: start;
            width: 90%;
            line-height: 15px;
            font-size: 0.8rem;
            padding: 0px;
            
            
        }
    `
    return(
        <>
            <TopicoStyled>
                {titulo}
                <TextoStyled>
                    {texto}
                </TextoStyled>
            </TopicoStyled>
        </>
    )
}


const SectionIntro = styled.section`
    width: 100%;
    height: 600px;
    margin-top: 120px;
    background-image: url(${BackgroundIntro});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;

    .conteudo{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 70%;
    }

    .botoes{
        width: 350px;
        display: flex;
        justify-content: space-between;
    }

    @media (min-width: 501px) and (max-width: 1100px){
        
        .botoes{
            width: 350px;
            display: flex;
            align-self: center;
            justify-content: space-between;
            height: 30%;
        }
    }
    

    @media (max-width: 500px){
        .conteudo{
            align-items: start;
        }
        .botoes{
            display: flex;
            flex-direction:column;
            align-self: start;
            justify-content: space-between;
            width: 100%;
            height: 20%;
        }
    }
    
`
const TituloSuport = ({texto}) => {

    const StyledTitle = styled.h2`
    color: #FFF;
    font-family: 'Bebas Neue';
    font-size: 3.7rem;
    max-width: 690px;
    text-align: center;

    @media (min-width: 501px) and (max-width: 1100px){
        font-size: 2.3rem;
        width: 431px;
    }

    @media (max-width: 500px){
        font-size: 1.7rem;
        text-align: start;
    }
`
    return(
        <>
            <StyledTitle>
                {texto}
            </StyledTitle> 
        </>
    )
}

function Suport(){
    return(
        <>
            <Header/>
            <SectionIntro>
                <div className="conteudo">
                    <TituloSuport 
                    texto={`ÁGUA LIMPA, SOLO VIVO, AR PURO.
                        NADA DISSO EXISTE SEM PRESERVAÇÃO.
                        SEU APOIO TRANSFORMA CUIDADO EM AÇÃO`}/>
                        
                    <div className="botoes">
                        <Botao texto={'DOE AGORA'} className="botao"/>
                        <Botao texto={'FALE CONOSCO'} className="botao"/>
                    </div>
                </div>
            </SectionIntro>
            <SectionDonation>
                <div className="conteudo">
                    <div className='box-title'>
                        <h1 className='title' id='title-donations'>Doações</h1>
                    </div>
                    <BoxDonationStyled>
                        <Topico 
                            titulo={<TituloTopico icone={IconeFolha} titulo={'Apadrinhamento de Projetos'}/>}
                            texto={`Torne-se um padrinho ou madrinha dos nossos projetos ambientais e educativos. 
                                    Com contribuições mensais, você ajuda a manter vivas nossas ações contínuas, 
                                    como a proteção de nascentes, reflorestamentos e oficinas ecológicas.
                                    Cada ciclo conta com você. Apoie como quiser, com liberdade para ajustar ou 
                                    cancelar quando desejar.`}/>
                        <Topico 
                            titulo={<TituloTopico icone={IconeFolha} titulo={'Semente de Impacto'}/>}
                            texto={`Um ato simples pode se tornar um rio de transformação. Faça uma doação única 
                                    via PIX ou transferência e contribua diretamente para as causas que defendemos.`}/>
                        
                        <Topico 
                            titulo={<TituloTopico icone={IconeFolha} titulo={'Contribuição Solidária'}/>}
                            texto={`Você pode ajudar doando aquilo que tem de melhor: seu tempo, seu talento ou seus recursos. 
                                    Recebemos com carinho. Envie sua proposta de doação por nossos canais de divulgação. Juntos, 
                                    podemos fazer mais, com o que temos.`}/>
                        <div className="espaco-botao">
                            <Botao texto={'QUERO DOAR'}/>
                        </div>
                    </BoxDonationStyled>
                    </div>
                
            </SectionDonation>
            <SectionVolunteering>

                <div className="conteudo">
                         <div className='box-title'>
                             <h1 className='title' id='title-volunteering'>Voluntariado</h1>
                        </div>
                        <BoxVolunteeringStyled >
                            <Topico 
                                titulo={<TituloTopico icone={IconeFolha} titulo={'Multirões Ambientais'}/>}
                                texto={`Torne-se apoiador dos nossos projetos ambientais e educativos com contribuições mensais. Sua 
                                        ajuda mantém ações como proteção de nascentes, reflorestamento e oficinas ecológicas. O apoio 
                                        é flexível e pode ser ajustado ou cancelado a qualquer momento.`}/>
                            <Topico 
                                titulo={<TituloTopico icone={IconeFolha} titulo={'Voluntariado Profissional'}/>}
                                texto={`Um ato simples pode se tornar um rio de transformação. Faça uma doação única via PIX ou transferência 
                                        e contribua diretamente para as causas que defendemos`}/>
                            
                            <Topico 
                                titulo={<TituloTopico icone={IconeFolha} titulo={'Embaixadores Ingá'}/>}
                                texto={`Contribua com seu tempo, talento ou recursos — toda doação é bem-vinda. Envie sua proposta pelos nossos 
                                        canais e, juntos, faremos mais com o que temos.`}/>

                            <Topico 
                                titulo={<TituloTopico icone={IconeFolha} titulo={'Oficinas e Ações Educativas'}/>}
                                texto={`Ajude a promover conhecimento e consciência em escolas, feiras ou encontros. Educação é semente.`}/>

                            <Topico 
                                titulo={<TituloTopico icone={IconeFolha} titulo={'Voluntário Pontual'}/>}
                                texto={`Ajude a promover conhecimento e consciência em escolas, feiras ou encontros. Educação é semente.`}/>

                            <div className="espaco-botao">
                                <Botao texto={'QUERO SER VOLUNTÁRIO'}/>
                            </div>
                        </BoxVolunteeringStyled>
                </div>
            </SectionVolunteering>
            <Footer/>
        </>
    )
}

export default Suport;