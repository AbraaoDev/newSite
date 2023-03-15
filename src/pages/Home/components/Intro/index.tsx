import { ButtonLinkHero, IntroContainer, IntroContent, SectionDir, SectionEsq} from "./styles";
import mapHeroHome from '../../../../assets/mapHeroHome.svg'
import rocketHeroHome from '../../../../assets/rocketHeroHome.svg'
import pointLocal from '../../../../assets/point.svg'

import { CaretRight, FireSimple, Rocket } from "phosphor-react";

export function Intro(){
    return(
        <IntroContainer>
            <IntroContent className="container">
                <img src={mapHeroHome} />

                

                
                
                <SectionEsq>
                    <a >
                        <Rocket size={18}/>
                        <div className="border-svg"></div>
                        <span>Veja quais <strong>tecnologias</strong> utilizamos</span>
                        <CaretRight size={18} />

                    </a>

                    <h1>Desenvolva o seu futuro<span>.</span></h1>
                    <p>Landing Pages(Enterprise) e Aplicações Web<br></br>
                    com a trajetória do Visual para o Código.</p>

                    <aside>
                        <ButtonLinkHero>
                            <FireSimple size={16} weight="fill"/>
                                Iniciar Projeto
                        </ButtonLinkHero>
                        <div className="separator"></div>
                        <h2>+2</h2>
                        <span>Anos de <strong><br></br>Experiência</strong></span>



                    </aside>
                    
                </SectionEsq>
                
                <SectionDir>
                    <img src={rocketHeroHome} />
                    <img src={pointLocal} />
                </SectionDir>
                

            </IntroContent>
        </IntroContainer>
    )
}