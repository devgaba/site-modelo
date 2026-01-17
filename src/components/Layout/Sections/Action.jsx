import styled from "styled-components";
import BackgroundAreaDegradada from '../../../assets/images/background-seca.png'
import BackgroundAreaPreservacao from '../../../assets/images/background-area.png'
import BackgroundDialogo from '../../../assets/images/background-dialogo-comunidade.png'
import BackgroundRecuperacao from  '../../../assets/images/background-recuperacao.png'


const ActionContainer = styled.section`
    width: 100%;
    

    .conteudo{
        margin: 0px 200px;
    }

    #cards{
        display: flex;
        justify-content: space-between;
    }

    @media (min-width: 1520px){
        height: 450px;
    }
    @media (min-width: 1101px) and (max-width: 1520px){
        #cards{
            flex-wrap: wrap;
            gap: 10px;
        }
        #teste{
            width: 45%;
        }
    }
    @media (max-width: 1100px){
        .conteudo{
            margin: 0px 80px;
        }

        #cards{
            flex-wrap: wrap;
            gap: 10px;
        }
    }
    @media (max-width: 500px){
        .conteudo{
            margin: 0px 30px;
        }
        
        #cards{
            align-items: center;
            flex-direction: column;
            gap: 20px;
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


const CardContainer = styled.div`
    width: 100%;
    height: 724px;
    
    @media(min-width: 1102px){
        
    }
`


const ActionCard = styled.div`
  background-image: url(${(props) => props.urlImagem});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 1px 3px #000;
  
  .card-overlay:hover{
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    border-radius: 12px;
  }
  h2{
    margin: 0px;
    max-width: 220px;
    padding: 30px;
  }
  .linha-titulo-card{
    width: 23px;
    background-color: #8B6E4C;
    height: 2px;
    margin: 2px 0px 10px 20px;
  }
  p{
    padding: 30px;
    margin: 0px;
  }

  
    @media (min-width: 1101px){
        width: 23%;
        height: 350px;
        border-radius: 12px;
        
        .card-overlay{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
        }
        h2{
            padding: 0px;
            margin: 10px 20px;
            font-size: 1.4rem;
        }
        p{
            line-height: 32px;
            height: 60%;
            padding: 0px;
            margin: 0px 20px;
            font-size: 1.1rem;
            font-weight: 100;
            width: auto;
            
        }
    }
    @media (min-width: 501px) and (max-width: 1100px){
        max-width: 80%;
        min-width: 100%;
        height: 160px;
        border-radius: 12px;
        background-size: cover;
        .card-overlay{
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

        }
        .card-overlay 
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .linha-titulo-card{
            width: 3px;
            height: 82px;
        }
        h2{
            width: 40%;
            height: 50%;
            padding: 0px 15px;
            font-size: 1rem;
            display: flex;
            align-items: center;
        }
        p{
            display: flex;
            max-width: 60%;
            height: 100%;
            padding: 0px 15px;
            font-size: .9rem;
            font-weight: 200;
            text-align: start;
            line-height: 19px;
            align-items: center;
        }
    }
    @media (min-width: 120px) and (max-width: 500px){
        width: 100%;
        height: 180px;
        border-radius: 12px;

        .linha-titulo-card{
            display: block;
            height: 3px;
            width: 43px;
            margin: 2px 0px 10px 20px;
        }

        h2{
            height: 70%;
            padding: 14px 20px;
            font-size: 1.01rem;
        }
        p{
            height: 70%;
            padding: 5px 20px;
            font-size: .7rem;
            font-weight: 200;
            text-align: start;
            line-height: 15px;
        
        }
    }
  
`;

const CardComFundo = ({ titulo, descricao, urlImagem }) => {
  
    return (
    <ActionCard urlImagem={urlImagem} id="teste"> 
      
      <div className="card-overlay">
        <div>
            <h2 className="card-titulo">{titulo}</h2>
            <div className="linha-titulo-card"></div>
        </div>
        <p className="card-descricao">{descricao}</p>
      </div>
    </ActionCard>
  );
};

function Action(){
    return(
        <>
            <ActionContainer>
                <div className="conteudo">
                    <TitleContainer>
                        <h1>Nossas Ações</h1>
                    </TitleContainer>
                </div>
                <CardContainer >
                    <div className="conteudo" id="cards">
                        <CardComFundo 
                        titulo={'Recuperação de Áreas Degradadas'} 
                        descricao={"Ajudamos a regenerar o que foi destruído, promovendo reflorestamento e soluções ecológicas em locais que perderam sua vitalidade ambiental."} 
                        urlImagem={BackgroundAreaDegradada}/>

                        <CardComFundo 
                        titulo={'Gerenciamento de Áreas de Preservação'} 
                        descricao={"Atuamos no monitoramento técnico de reservas naturais, garantindo sua proteção, equilíbrio ecológico e uso sustentável."} 
                        urlImagem={BackgroundAreaPreservacao}/>

                        <CardComFundo 
                        titulo={'Educação e Diálogo com Comunidades'} 
                        descricao={"Levamos informação e consciência ambiental às pessoas, promovendo ações que aproximam a sociedade da preservação."} 
                        urlImagem={BackgroundDialogo}/>

                        <CardComFundo 
                        titulo={'Apoio à Recuperação de Danos Ambientais'} 
                        descricao={"Orientamos e colaboramos com responsáveis por infrações ambientais, incentivando práticas de reparação e restauração consciente"} 
                        urlImagem={BackgroundRecuperacao}/>
                    </div>
                </CardContainer>
                
                
            </ActionContainer>
        </>
    )
}

export default Action;

