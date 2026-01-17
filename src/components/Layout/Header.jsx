import styled from "styled-components";
import logo from '../../assets/images/logo-inga.png'
import '../../components/Layout/Layout.css'
import { useState } from "react";

// ===================================
// 1. Componentes Estilizados (Estilo Fixo)
// ===================================

const CabecalhoContainer = styled.div`
    background-color: #fff;
    padding: 0px 200px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;


    @media (max-width: 1100px){
        nav, button{
            display: none;
        }
    }
    @media (min-width: 1101px){
        
    }

    @media (max-width: 1100px){
        padding: 0px 100px;
    }

    @media (max-width: 500px){
        padding: 0px 30px;
    }

`;

const ImagemLogo = styled.img`
    width: 150px;
`;

const MenuNav = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
`;

const MenuSanduiche = styled.div`
    width: 65px;
    height: 33px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    & .line{
        width: 40px;
        height: 8px;
        background-color: #2E4F3D;
        border-radius: 12px;
    }

    @media (min-width: 1101px){
        display: none; 
    }
`

const BotoesContainer = styled.div`
    width: 240px;
    display: flex;
    justify-content: space-between;
`;

const ListaOpcoes = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 0;
    width: 50%;
    height: 100vh;
    min-height: 500px;
    padding: 0px;
    top: 0px; 
    background-color: #2E4F3D;
    list-style: none;
    margin: 0;
    gap: 1px;
    overflow: hidden;
    transform: translateX(100%); /* Estado inicial: Escondido */
    transition: transform 0.8s ease-in-out;

    /* === CORREÇÃO 1: Usar '&.menu-visivel' === */
    /* Aplica o estilo ao próprio componente quando ele tiver a classe 'menu-visivel' */
    &.menu-visivel {
        transform: translateX(0); /* Estado final: Visível */
    }
    & li{
        margin: 18px 45px;

    }
    & a{
        color: white;
        text-decoration: none;
        font-size: 0.8rem;

    }
    @media (min-width: 1101px){
        display: none; 
    }

`;

const BotaoFechar = styled.div`
    position: absolute;
    top: 30px;
    right: 50px;
    cursor: pointer;
    font-size: 2rem;
    color: white; 
    font-weight: bold;
    z-index: 1001;
`;
// ===================================
// 2. Componentes Funcionais (Estilo Dinâmico/Reutilizável)
// ===================================

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
`;

const ItemMenuStyled = styled.li`
    list-style: none; 
    font-size: 0.8rem;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    
    a {
        text-decoration: none;
        color: #2E4F3D;
        transition: background-color 0.3s;
        
        &:hover {
            border-bottom: 2px solid #2E4F3D;
            padding-bottom: 3px;
        }
    }
`;

const BotaoCabecalho = ({ texto, onClick }) => (
    <BotaoStyled onClick={onClick}>
        {texto}
    </BotaoStyled>
);

const ItemMenu = ({ texto }) => (
    <ItemMenuStyled>
        <a href="#link"> 
             {/* Use um link real ou # para evitar recarregar a página */}
            {texto}
        </a>
    </ItemMenuStyled>
);

const Sanduiche = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () =>{
        setMenuAberto(!menuAberto)
    }

    return(
        <>
            <MenuSanduiche onClick={toggleMenu}>
                {menuAberto ? (
                    
                    <BotaoFechar>X</BotaoFechar> 
                ) : (
                    
                    <>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </>
                )}
            </MenuSanduiche>
            
            <ListaOpcoes
                
                className={menuAberto ? 'menu-visivel' : ''}
            >
                
                <li><a href="">INÍCIO</a></li>
                <li><a href="">SOBRE</a></li>
                <li><a href="">AÇÕES</a></li>
                <li><a href="">APOIE</a></li>
                <li><a href="">CONTATO</a></li>
            </ListaOpcoes>
            
        </>
    )
}
// ===================================
// 3. Componente Principal (Header)
// ===================================

function Header(){
    return(
        <header>
            <CabecalhoContainer>
                <div id="imagem">
                    <ImagemLogo src={logo} alt="Logo INGA"/>
                </div>
                
                <nav id="menu" style={{width:'40%'}}>
                    <MenuNav>
                        <ItemMenu texto="INÍCIO"/>
                        <ItemMenu texto="SOBRE"/>
                        <ItemMenu texto="AÇÕES"/>
                        <ItemMenu texto="APOIE"/>
                        <ItemMenu texto="CONTATO"/>
                    </MenuNav>
                </nav>
                
                <BotoesContainer>
                    <BotaoCabecalho texto="DOE AGORA"/>
                    <BotaoCabecalho texto="FALE CONOSCO"/>
                </BotoesContainer>
                <Sanduiche/>
            </CabecalhoContainer>
        </header>
        
    )
}

export default Header;