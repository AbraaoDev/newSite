import { NavLink } from "react-router-dom";

import { HeaderButton, HeaderContainer, HeaderContent } from "./styles";
import logoWEB from '../../assets/logoHeader.svg'
import { FireSimple } from 'phosphor-react'


export function Header() {
    return(
        <HeaderContainer>
            <div className="container">
                <img src={logoWEB} />
                <HeaderContent>
                    <NavLink to={"/"}>Home</NavLink>
                    <HeaderButton>
                        <FireSimple size={16} weight="fill"/>
                        Iniciar Projeto
                    </HeaderButton>
                </HeaderContent>
            </div>
        </HeaderContainer>
    )
}