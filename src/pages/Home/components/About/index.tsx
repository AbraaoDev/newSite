import { AboutContainer, AboutContent, FooterAbout, ImageSide, SocialButtons, TextSide } from "./styles";
import personalImg from '../../../../assets/personalImage.svg'
import helloAll from '../../../../assets/helloAll.svg'
import { GitlabLogoSimple, InstagramLogo, LinkedinLogo } from "phosphor-react";


export function About(){
    return(
        <AboutContainer>
            <div className="container">
                <p><span>Um pouco sobre mim</span></p>

                <AboutContent>
                    <ImageSide>
                        <img src={personalImg} />
                    </ImageSide>
                    <TextSide>
                        <div>
                            <h3>Olá, prazer</h3>
                            <img src={helloAll} />
                        </div>
                        <aside>
                            <h1>Abraão Moreira</h1>
                            <p>Desenvolvedor FullStack</p>
                            <span>
                                Sou estudante de Ciências da Computação pela Universidade 
                                Federal da Paraíba, com um forte interesse e paixão pela tecnologia. 
                                Desenvolvedor Front-End e Designer UI/UX, sempre buscando evoluir e 
                                se aprimorar na área de TI. 
                            </span>
                        </aside>
                        

                        <FooterAbout>
                            <SocialButtons>
                                <button>
                                    <GitlabLogoSimple size={22} weight="fill" />
                                </button>
                                <button>
                                    <InstagramLogo size={22} weight="fill" />
                                </button>
                                
                            </SocialButtons>

                            <div className="divisor"></div>

                            <span><strong>Compartilho</strong> todo<br></br>
                            o meu conteúdo aqui</span>
                        </FooterAbout>
                    </TextSide>
                </AboutContent>
            </div>
        </AboutContainer>
    )
}