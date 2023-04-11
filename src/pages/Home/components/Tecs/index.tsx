import { FileCss, FileHtml, FileJs, FileTs } from "phosphor-react";
import { SectionDown, SectionUp, TecsContainer } from "./styles";


export function Tecs(){
    return(
        <TecsContainer>
            <div className="container">
                <SectionUp>
                    <h4>Algumas das tecnologias utilizadas<br></br>
                    nos projetos</h4>
                    <div className="divisor"></div>
                    <p>Essas são responsáveis por<br></br>
                    sua marca.</p>
                </SectionUp>
                <SectionDown>
                  
                </SectionDown>
            </div>
        </TecsContainer>
    )
}