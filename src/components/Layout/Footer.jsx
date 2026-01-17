import styled from "styled-components";
import logoRodape from '../../assets/images/logo-rodape.png';
import ImagemInstagram from '../../assets/images/icon-instagram.png';
import ImagemGmail from '../../assets/images/icon-gmail.png';
import ImagemYoutube from '../../assets/images/icon-youtube.png';
import ImagemWhatsapp from '../../assets/images/icon-whatsapp.png';



const FootContainer = styled.footer`
    width: 100%;
    height: 350px;
    background-color: #2D4F3D;
    flex-direction: column;
    justify-content: center;
    display: flex;
    #creditos{
        font-size: .5rem;
        font-weight: 200;
        align-self: center;
    }
    .conteudo{
        
        margin: 0px 200px;
        display: flex;
        gap: 220px;

    }

    @media (max-width: 1100px){
        .conteudo{
            margin: 0px 100px;
            gap: 80px;
        }
    }

    @media (max-width: 500px){
        .conteudo{
            margin: 0px 30px;
        }
    }   
`

const LogoContainer = styled.div`
    height: 175px;
    display: flex;
    align-self: center;

    @media (max-width: 1150px){
        height: 100px;
    }

    @media (max-width: 677px){
       display: none;
    } 
`

const MenuFooter = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;
    text-align: end;
    gap: 30px;

    .line-division{
        width: 1px;
        height: 80%;
        background-color: #fff;
    }
    #redes-sociais h4{
        font-size: .8rem;
        font-weight: 100;
        text-align: start;
        margin-top: 4px;
       }
    #icones{
       display: flex;
       gap: 20px;
    }

    .links{
        display: flex;
        flex-direction: column;
        gap: 30px;
        height: 80%;
        text-align: start;

        a {
            
            text-decoration: none;
            color: #fff;
            font-size: .8rem;
            font-weight: 200;
        }
    }

    @media (max-width: 1150px){
        
    }

    @media (max-width: 677px){
        width: 100%;
        justify-content: center;

        .links a, #redes-sociais h4{
            font-size: .6rem;
        }
    } 
`
const LinkItem = ({imagem, link}) => {
    const RedeSocial = styled.div`
        width: 26px;
        height: 26px;
        align-self: center;
        background-image: url(${imagem});
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;

        @media (max-width: 1150px){
            width: 20px;
            height: 20px;
        }

        @media (max-width: 500px){
            a{
                font-size: .6rem;
            }
        }
        
    `
    return(
        <>
            <RedeSocial imagem={imagem} link={link}/>
        </>
    )

}

const Item = ({titulo, link}) =>{
    const Opcao = styled.li`
        margin: 30px 0px;
        font-weight: 100;
        
        a{
            color: #fff;
            text-decoration: none;
        }
        a:hover{
            text-decoration: underline;
            text-underline-offset: 5px;
        }

        @media (max-width: 1150px){
            a{
                font-size: .8rem;
            }
        }

        @media (max-width: 677px){
            a{
                font-size: .8rem;
            }
        } 
    `
    return(
        <>
            <Opcao>
                <a href={link}>{titulo}</a>
            </Opcao>
        </>
    )
}

function Footer(){
    return(
        <>
            <FootContainer>
                <div className="conteudo" >
                    <LogoContainer>
                        <img src={logoRodape} alt="" />
                    </LogoContainer>
                    <MenuFooter>
                        <nav>
                            <Item titulo={'Início'} link={''}/>
                            <Item titulo={'Sobre'} link={''}/>
                            <Item titulo={'Ações'} link={''}/>
                            <Item titulo={'Apoie'} link={''}/>
                            <Item titulo={'Contato'} link={''}/>
                        </nav>
                        <div className="line-division"></div>
                        <div className="links">
                            <div id="redes-sociais">
                                <div><h4>REDES SOCIAIS</h4></div>
                                <div id="icones">
                                    <LinkItem imagem={ImagemWhatsapp}/>
                                    <LinkItem imagem={ImagemYoutube}/>
                                    <LinkItem imagem={ImagemInstagram}/>
                                    <LinkItem imagem={ImagemGmail}/>
                                </div>
                                
                            </div>
                            <div id="anexos">
                                <a href="">LINK PARA ESTATUTO SOCIAL</a>
                            </div>
                        </div>
                        
                    </MenuFooter>
                </div>
                <p id="creditos">Copyright © developed bydevgaba</p>
            </FootContainer>
            
        </>
    )
}

export default Footer;